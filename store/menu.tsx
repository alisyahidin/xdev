import { useReducer, useContext, createContext } from 'react'

interface InitialState { floatMenuMode: 'dark' | 'light' , showMenu: boolean, isAnimating: boolean }
const initialState: InitialState = {
  floatMenuMode: 'dark',
  showMenu: false,
  isAnimating: false
}

type Action = { type: 'UPDATE_SHOW_MENU', value: boolean }
  | { type: 'UPDATE_MENU_MODE', value: 'dark' | 'light' }
  | { type: 'FINISH_TRANSITION' }
const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'UPDATE_SHOW_MENU':
      return {
        ...state,
        showMenu: action.value,
        isAnimating: true
      }
    case 'UPDATE_MENU_MODE':
      return {
        ...state,
        floatMenuMode: action.value,
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

interface ShowMenu extends InitialState {
  setShowMenu: (value: boolean) => void,
  setMenuMode: (value: 'dark' | 'light' | string) => void,
  finishTransition: () => void,
}
const ShowMenuContext = createContext<ShowMenu>({
  ...initialState,
  setShowMenu: () => null,
  setMenuMode: () => null,
  finishTransition: () => null,
})

export const ShowMenuProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ShowMenuContext.Provider value={{
      ...state,
      setShowMenu: value => dispatch({ type: 'UPDATE_SHOW_MENU', value }),
      setMenuMode: value => dispatch({ type: 'UPDATE_MENU_MODE', value }),
      finishTransition: () => dispatch({ type: 'FINISH_TRANSITION' }),
    }}>
      {children}
    </ShowMenuContext.Provider>
  )
}

export const useShowMenu = () => useContext(ShowMenuContext)