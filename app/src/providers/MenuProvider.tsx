import * as React from 'react'

const { useReducer } = React

interface NavState {
  cartOpen: boolean
  cartMessage?: string
  menuOpen: boolean
  subMenuOpen: boolean
  currentSubMenuKey: string | void
}

const OPEN_MENU = 'OPEN_MENU'
const CLOSE_MENU = 'CLOSE_MENU'
const OPEN_SUBMENU = 'OPEN_SUBMENU'
const OPEN_CART = 'OPEN_CART'
const CLOSE_CART = 'CLOSE_CART'
const CLOSE_SUBMENU = 'CLOSE_SUBMENU'
const CLOSE_ALL = 'CLOSE_ALL'

interface GenericAction {
  type: typeof CLOSE_SUBMENU | typeof OPEN_MENU | typeof CLOSE_MENU
}

interface OpenMenuAction {
  type: typeof OPEN_SUBMENU
  subMenuKey: string | void
}

interface OpenCartAction {
  type: typeof OPEN_CART
  message?: string
}

interface CloseCartAction {
  type: typeof CLOSE_CART
}

type Action = GenericAction | OpenMenuAction | OpenCartAction | CloseCartAction

function navReducer(currentState: NavState, action: Action): NavState {
  switch (action.type) {
    case OPEN_CART:
      return {
        ...currentState,
        currentSubMenuKey: undefined,
        subMenuOpen: false,
        menuOpen: false,
        cartOpen: true,
        cartMessage: action.message,
      }
    case CLOSE_CART:
      return {
        ...currentState,
        cartOpen: false,
      }

    case OPEN_SUBMENU:
      return {
        ...currentState,
        currentSubMenuKey: action.subMenuKey,
        subMenuOpen: true,
      }
    case CLOSE_SUBMENU:
      return {
        ...currentState,
        subMenuOpen: false,
        currentSubMenuKey: undefined,
      }
    case OPEN_MENU:
      return {
        ...currentState,
        menuOpen: true,
      }

    case CLOSE_MENU:
      return {
        ...currentState,
        menuOpen: false,
        subMenuOpen: false,
        currentSubMenuKey: undefined,
      }

    default:
      // @ts-ignore
      throw new Error(`"${action.type}" is not a valid action type`)
  }
}

interface MenuContextValue extends NavState {
  openCart: (message?: string) => void
  closeCart: () => void
  openMenu: () => void
  closeMenu: () => void
  toggleMenu: () => void
  openSubMenu: (key: string | undefined) => void
  closeSubMenu: () => void
}

const MenuContext = React.createContext<MenuContextValue | undefined>(undefined)

export const MenuConsumer = MenuContext.Consumer

export const useMenu = () => {
  const ctx = React.useContext(MenuContext)
  if (!ctx) throw new Error('useMenuContext must be used within a MenuProvider')
  return ctx
}

interface MenuProps {
  children: React.ReactNode
}

const initialState = {
  cartOpen: false,
  menuOpen: false,
  subMenuOpen: false,
  currentSubMenuKey: undefined,
}

export const MenuProvider = ({ children }: MenuProps) => {
  const [state, dispatch] = useReducer(navReducer, initialState)

  const { menuOpen } = state

  const openMenu = () => dispatch({ type: OPEN_MENU })
  const closeMenu = () => dispatch({ type: CLOSE_MENU })
  const toggleMenu = () => (menuOpen ? closeMenu() : openMenu())

  const openSubMenu = (subMenuKey: string | undefined) =>
    dispatch({ type: OPEN_SUBMENU, subMenuKey })
  const closeSubMenu = () => dispatch({ type: CLOSE_SUBMENU })

  const openCart = (message?: string) => dispatch({ type: OPEN_CART, message })
  const closeCart = () => dispatch({ type: CLOSE_CART })

  const value = {
    ...state,
    openCart,
    closeCart,
    openMenu,
    closeMenu,
    toggleMenu,
    openSubMenu,
    closeSubMenu,
  }

  console.log(state)
  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>
}
