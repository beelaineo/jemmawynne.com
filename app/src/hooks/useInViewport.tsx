import * as React from 'react'

const { useEffect, useState, useRef } = React

// Adapted from:
// https://medium.com/the-non-traditional-developer/how-to-use-an-intersectionobserver-in-a-react-hook-9fb061ac6cb5

export const useInViewport = (node: React.RefObject<HTMLElement>) => {
  const [isInView, setIsInView] = useState(false)
  const [isInViewOnce, setIsInViewOnce] = useState(false)

  const observer = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    if (observer?.current) observer.current.disconnect()
    const options = {
      rootMargin: '0px 600px',
    }

    observer.current = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting)
      if (entry.isIntersecting) setIsInViewOnce(true)
    }, options)

    const { current: currentObserver } = observer

    if (node.current) currentObserver.observe(node.current)

    return () => currentObserver.disconnect()
  }, [node.current])

  return { isInView, isInViewOnce }
}
