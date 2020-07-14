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
      scrollingElement.style.overflow = 'hidden'
    } else {
      scrollingElement.style.overflow = 'scroll'
    }
  }, [locked])

  return {
    locked,
    unlockScroll,
    lockScroll,
  }
}
