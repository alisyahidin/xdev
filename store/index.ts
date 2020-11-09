import { useMemo } from 'react'
import { createStore } from 'redux'

type actionFloatMenu = { type: 'UPDATE_FLOAT_MENU_MODE', mode: string }

let store: any

const initialState = {
  floatMenuMode: 'dark'
}

const reducer = (state = initialState, action: actionFloatMenu) => {
  switch (action.type) {
    case 'UPDATE_FLOAT_MENU_MODE':
      return {
        ...state,
        floatMenuMode: action.mode
      }
    default:
      return state
  }
}

function initStore(preloadedState = initialState) {
  return createStore(
    reducer,
    preloadedState
  )
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState)

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    })
    // Reset the current store
    store = undefined
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store
  // Create the store once in the client
  if (!store) store = _store

  return _store
}

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}