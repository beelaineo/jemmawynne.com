import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { useLockScroll } from '../LockScroll'
import { Background, ModalWrapper, Wrapper, CloseButton } from './styled'

const { useEffect } = React

interface ModalProps {
  children: React.ReactNode
  open: boolean
  closeModal: () => void
}

export const Modal = ({ children, open, closeModal }: ModalProps) => {
  const { lockScroll, unlockScroll } = useLockScroll()

  const handleKeyup = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeModal()
    }
  }

  useEffect(() => {
    if (open) {
      lockScroll()
      document.addEventListener('keyup', handleKeyup)
      return () => {
        document.removeEventListener('keyup', handleKeyup)
      }
    } else {
      unlockScroll()
    }
  }, [open])

  if (!open || typeof document === 'undefined') return null
  const modalRoot = document.getElementById('modal')
  if (!modalRoot) throw new Error('No modal root')

  return ReactDOM.createPortal(
    <Wrapper>
      <ModalWrapper>
        <CloseButton onClick={closeModal} />
        {children}
      </ModalWrapper>
      <Background open={open} onClick={closeModal} />
    </Wrapper>,
    modalRoot,
  )
}
