import { useReducer } from 'react'
import { ShopifyProduct, ShopifyCollection } from '../../types'

export type SearchResult = ShopifyProduct | ShopifyCollection

enum ActionTypes {
  OPEN = 'open',
  CLOSE = 'close',
  START_SEARCH = 'startSearch',
  SUCCESS = 'success',
  RESET = 'reset',
  ERROR = 'error',
  SET_TERM = 'setSearchTerm',
}

interface OpenAction {
  type: ActionTypes.OPEN
  searchTerm?: string
}

interface CloseAction {
  type: ActionTypes.CLOSE
}

interface SetTermAction {
  type: ActionTypes.SET_TERM
  searchTerm?: string
}

interface ResetAction {
  type: ActionTypes.RESET
}

interface SearchAction {
  type: ActionTypes.START_SEARCH
}

interface SuccessAction {
  type: ActionTypes.SUCCESS
  searchResults: SearchResult[]
}

interface ErrorAction {
  type: ActionTypes.ERROR
  errorMessage: string
}

type Action =
  | OpenAction
  | CloseAction
  | ResetAction
  | SearchAction
  | SetTermAction
  | SuccessAction
  | ErrorAction

const initialSearchState: SearchState = {
  open: false,
  loading: false,
  searchResults: undefined,
  searchTerm: '',
  errorMessage: undefined,
}

const reducer = (state: SearchState, action: Action): SearchState => {
  switch (action.type) {
    case ActionTypes.OPEN:
      return {
        ...state,
        open: true,
        searchTerm: action.searchTerm ? action.searchTerm : state.searchTerm,
      }
    case ActionTypes.CLOSE:
      return {
        ...state,
        open: false,
      }
    case ActionTypes.RESET:
      return initialSearchState
    case ActionTypes.START_SEARCH:
      return {
        ...state,
        open: true,
        loading: true,
      }
    case ActionTypes.SUCCESS:
      return {
        ...state,
        loading: false,
        searchResults: action.searchResults,
      }
    case ActionTypes.SET_TERM:
      return {
        ...state,
        searchTerm: action.searchTerm || '',
      }

    case ActionTypes.ERROR:
      return {
        ...state,
        loading: false,
        errorMessage: action.errorMessage,
      }
    default:
      // @ts-ignore
      throw new Error(`Action "${action.type}" is not a valid action`)
  }
}

export interface SearchState {
  loading: boolean
  open: boolean
  searchTerm: string
  searchResults?: SearchResult[]
  errorMessage?: string
}

export interface SearchActions {
  openSearch: (searchTerm?: string) => void
  closeSearch: () => void
  reset: () => void
  setSearchTerm: (
    searchTerm?: string | React.ChangeEvent<HTMLInputElement>,
  ) => void
  startSearch: () => void
  onError: (errorMessage: string) => void
  onSuccess: (searchResults: SearchResult[]) => void
}

export const useSearchReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialSearchState)

  const openSearch = (searchTerm?: string) =>
    dispatch({ type: ActionTypes.OPEN, searchTerm })
  const closeSearch = () => dispatch({ type: ActionTypes.CLOSE })
  const setSearchTerm = (
    input?: string | React.ChangeEvent<HTMLInputElement>,
  ) => {
    const searchTerm =
      input === undefined
        ? ''
        : typeof input === 'string'
        ? input
        : input.target.value
    dispatch({ type: ActionTypes.SET_TERM, searchTerm })
  }
  const reset = () => dispatch({ type: ActionTypes.RESET })
  const startSearch = () => dispatch({ type: ActionTypes.START_SEARCH })
  const onError = (errorMessage: string) =>
    dispatch({ type: ActionTypes.ERROR, errorMessage })
  const onSuccess = (searchResults: SearchResult[]) =>
    dispatch({ type: ActionTypes.SUCCESS, searchResults })

  const actions: SearchActions = {
    openSearch,
    closeSearch,
    setSearchTerm,
    reset,
    startSearch,
    onError,
    onSuccess,
  }

  return { state, actions }
}
