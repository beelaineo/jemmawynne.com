import { useReducer } from 'react'

interface State {
  error?: Error
  errorMessage?: string | React.ReactNode
  isFatal: boolean
}

enum ActionTypes {
  RESET = 'reset',
  SET_ERROR = 'set-error',
}

interface ResetAction {
  type: ActionTypes.RESET
}

interface SetErrorAction extends State {
  type: ActionTypes.SET_ERROR
}

type Action = ResetAction | SetErrorAction

const initialState: State = {
  error: undefined,
  errorMessage: undefined,
  isFatal: false,
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionTypes.RESET:
      return initialState
    case ActionTypes.SET_ERROR:
      return {
        ...state,
        error: action.error,
        errorMessage: action.errorMessage,
        isFatal: action.isFatal,
      }
    default:
      // @ts-ignore
      throw new Error(`Action type "${action.type}" is not valid`)
  }
}

export type SetErrorArgs = Omit<SetErrorAction, 'type'>

interface Actions {
  reset: () => void
  setError: (args: SetErrorArgs) => void
}

type UseErrorReducerValues = [State, Actions]

export const useErrorReducer = (): UseErrorReducerValues => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const reset = () => dispatch({ type: ActionTypes.RESET })
  const setError = (args: SetErrorArgs) =>
    dispatch({ type: ActionTypes.SET_ERROR, ...args })

  const actions = { reset, setError }
  const values: UseErrorReducerValues = [state, actions]
  return values
}
