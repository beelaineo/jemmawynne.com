import { useReducer, useState } from 'react'
import type { SanityClient } from '@sanity/client'
import type { Reducer } from 'react'
import { withTypenames } from './withTypenames'

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
  V extends Variables = Variables
>() => {
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

  const executeQuery = async (query: string, customParams: V) => {
    dispatch({ type: FETCH })
    const client = await fetchOrGetClient()
    const params = customParams ? customParams : {}
    const results = await client.fetch<R>(query, params)
    // @ts-ignore ???
    const r = withTypenames<R>(results)
    dispatch({ type: SUCCESS, results: r })
  }

  return {
    state,
    reset,
    executeQuery,
  }
}
