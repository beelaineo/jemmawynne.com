import * as React from 'react'

const { useReducer } = React

interface CartProviderContextValue {
  open: boolean
  message?: string
  openCart: (message?: string) => void
  closeCart: () => void
  /* */
}

const CartProviderContext = React.createContext<
  CartProviderContextValue | undefined
>(undefined)

export const CartProviderConsumer = CartProviderContext.Consumer

export const useCart = () => {
  const ctx = React.useContext(CartProviderContext)
  if (!ctx)
    throw new Error(
      'useCartProviderContext must be used within a CartProviderProvider',
    )
  return ctx
}

interface CartProviderProps {
  children: React.ReactNode
}

interface CartState {
  open: boolean
  message?: string
}

const OPEN_CART = 'OPEN_CART'
const CLOSE_CART = 'CLOSE_CART'

interface OpenAction {
  type: typeof OPEN_CART
  message?: string
}

interface CloseAction {
  type: typeof CLOSE_CART
}

type Action = OpenAction | CloseAction

function cartReducer(currentState: CartState, action: Action): CartState {
  switch (action.type) {
    case OPEN_CART:
      return {
        ...currentState,
        open: true,
        message: action.message,
      }
    case CLOSE_CART:
      return {
        ...currentState,
        open: false,
      }
    default:
      // @ts-ignore
      throw new Error(`"${action.type}" is not a valid action type`)
  }
}

const initialState: CartState = {
  open: false,
  message: undefined,
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  const { message, open } = state
  const openCart = (message?: string) => dispatch({ type: OPEN_CART, message })
  const closeCart = () => dispatch({ type: CLOSE_CART })

  const value = {
    open,
    message,
    openCart,
    closeCart,
  }

  return (
    <CartProviderContext.Provider value={value}>
      {children}
    </CartProviderContext.Provider>
  )
}
