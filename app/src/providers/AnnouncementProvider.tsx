import * as React from 'react'
import { getCookie, setCookie } from '../utils'

const { useState, useEffect } = React
const ANNOUNCEMENT_DISMISSED = 'ANNOUNCEMENT_DISMISSED'

interface AnnouncementContextValue {
  open: boolean
  setOpen: (open: boolean) => void
  dismiss: () => void
  /* */
}

const AnnouncementContext = React.createContext<
  AnnouncementContextValue | undefined
>(undefined)

export const AnnouncementConsumer = AnnouncementContext.Consumer

export const useAnnouncement = () => {
  const ctx = React.useContext(AnnouncementContext)
  if (!ctx)
    throw new Error(
      'useAnnouncementContext must be used within a AnnouncementProvider',
    )
  return ctx
}

interface AnnouncementProps {
  children: React.ReactNode
}

export const AnnouncementProvider = ({ children }: AnnouncementProps) => {
  const [open, setOpenState] = useState(false)

  const setOpen = (open: boolean) => setOpenState(open)

  const dismiss = () => {
    setOpen(false)
    setCookie(ANNOUNCEMENT_DISMISSED, true)
  }

  useEffect(() => {
    const dismissed = getCookie(ANNOUNCEMENT_DISMISSED)
    if (dismissed) return
    const timeout = setTimeout(() => {
      setOpen(true)
    }, 5000)
    return () => clearTimeout(timeout)
  }, [])

  const value = {
    open,
    dismiss,
    setOpen,
  }

  return (
    <AnnouncementContext.Provider value={value}>
      {children}
    </AnnouncementContext.Provider>
  )
}
