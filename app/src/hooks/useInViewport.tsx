import * as React from 'react'

const { useEffect, useReducer, useRef } = React

// Adapted from:
// https://medium.com/the-non-traditional-developer/how-to-use-an-intersectionobserver-in-a-react-hook-9fb061ac6cb5

interface State {
  isInView: boolean
  isInViewOnce: boolean
}

const INTERSECTION = 'INTERSECTION'

interface IsInViewAction {
  type: typeof INTERSECTION
  isIntersecting: boolean
}

type Action = IsInViewAction

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case INTERSECTION:
      return {
        isInViewOnce: state.isInViewOnce || action.isIntersecting,
        isInView: action.isIntersecting,
      }

    default:
      throw new Error(`"${action.type}" is not a valid action`)
  }
}

const initialState: State = {
  isInView: false,
  isInViewOnce: false,
}

export const useInViewport = (
  node: React.RefObject<HTMLElement>,
  rootMargin?: string,
) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const observer = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    if (observer?.current) observer.current.disconnect()
    const options = {
      rootMargin: rootMargin || '200px 400px',
    }

    observer.current = new IntersectionObserver(([entry]) => {
      const { isIntersecting } = entry
      dispatch({ type: INTERSECTION, isIntersecting })
    }, options)

    const { current: currentObserver } = observer

    if (node.current) currentObserver.observe(node.current)

    return () => currentObserver.disconnect()
  }, [node.current])

  return state
}
