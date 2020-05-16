import * as React from 'react'

const { useState, useEffect } = React

export const useLockScroll = (initialState?: boolean) => {
  const [locked, setLocked] = useState(initialState || false)

  const unlockScroll = () => setLocked(false)
  const lockScroll = () => setLocked(true)

  useEffect(() => {
    const scrollingElement = document?.getElementById('main')
    if (!scrollingElement) return
    if (locked) {
      // @ts-ignore
      scrollingElement.style.overflow = 'hidden'
    } else {
      // @ts-ignore
      scrollingElement.style.overflow = 'scroll'
    }
  }, [locked])

  return {
    locked,
    unlockScroll,
    lockScroll,
  }
}
