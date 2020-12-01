import { useReducer, useContext, createContext, Dispatch, SetStateAction } from 'react'

interface InitialState { showMenu: boolean, isAnimating: boolean }
const initialState: InitialState = {
  showMenu: false,
  isAnimating: false
}

type Action = { type: 'UPDATE_SHOW_MENU', value: boolean }
  | { type: 'FINISH_TRANSITION' }
const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'UPDATE_SHOW_MENU':
      return {
        ...state,
        showMenu: action.value,
        isAnimating: true
      }
    case 'FINISH_TRANSITION':
      return {
        ...state,
        isAnimating: false
      }
    default:
      return state
  }
}

interface ShowMenu {
  showMenu: boolean,
  isAnimating: boolean,
  setShowMenu: (value: boolean) => void,
  finishTransition: () => void,
}
const ShowMenuContext = createContext<ShowMenu>({
  ...initialState,
  setShowMenu: () => null,
  finishTransition: () => null,
})

export const ShowMenuProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ShowMenuContext.Provider value={{
      ...state,
      setShowMenu: value => dispatch({ type: 'UPDATE_SHOW_MENU', value }),
      finishTransition: () => dispatch({ type: 'FINISH_TRANSITION' }),
    }}>
      {children}
    </ShowMenuContext.Provider>
  )
}

export const useShowMenu = () => useContext(ShowMenuContext)