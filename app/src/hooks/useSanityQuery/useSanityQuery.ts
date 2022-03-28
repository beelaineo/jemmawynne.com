import { useReducer, useState } from 'react'
import type { SanityClient } from '@sanity/client'
import type { Reducer } from 'react'
import { withTypenames } from '../../utils'
import { useError } from '../../providers/ErrorProvider'

const RESET = 'RESET'
const SUCCESS = 'SUCCESS'
const FETCH = 'FETCH'

interface ResetAction {
  type: typeof RESET
}

interface SuccessAction<ResultType> {
  type: typeof SUCCESS
  results: ResultType[]
}

interface FetchAction {
  type: typeof FETCH
}

type Action<R> = ResetAction | SuccessAction<R> | FetchAction

interface State<ResultType> {
  loading: boolean
  results: ResultType[] | null
}

const initialState = {
  loading: false,
  results: null,
}

const reducer = <R>(prevState: State<R>, action: Action<R>): State<R> => {
  switch (action.type) {
    case RESET:
      return {
        loading: false,
        results: null,
      }
    case FETCH:
      return {
        ...prevState,
        loading: true,
      }
    case SUCCESS:
      return {
        ...prevState,
        loading: false,
        results: action.results,
      }
    default:
      // @ts-ignore
      throw new Error(`"${action.type}" is not a valid action type`)
  }
}

interface Document {
  _type?: string | null | undefined
}

type Response = Document[]

type Variables = { [key: string]: any }

export const useSanityQuery = <
  R extends Document,
  V extends Variables = Variables,
>() => {
  const { handleError } = useError()
  const [sanityClient, setSanityClient] = useState<SanityClient | null>(null)
  const [state, dispatch] = useReducer<Reducer<State<R>, Action<R>>>(
    reducer,
    initialState,
  )

  const fetchOrGetClient = async (): Promise<SanityClient> => {
    if (sanityClient) return sanityClient
    const module = await import('../../services/sanity')
    const client = module.sanityClient
    setSanityClient(client)
    return client
  }

  const reset = () => dispatch({ type: RESET })

  const query = async (query: string, customParams: V): Promise<R[]> => {
    dispatch({ type: FETCH })
    const client = await fetchOrGetClient()
    const params = customParams ? customParams : {}
    try {
      const results = await client.fetch<R>(query, params)
      // @ts-ignore ???
      const r = withTypenames<R>(results)
      // @ts-ignore
      dispatch({ type: SUCCESS, results: r })
      // @ts-ignore
      return r
    } catch (err) {
      const error =
        err instanceof Error
          ? err
          : new Error('There was an error making this request')
      handleError(error)
      // @ts-ignore
      return []
    }
  }

  return {
    state,
    reset,
    query,
  }
}
