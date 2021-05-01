import React, { useEffect, useRef } from 'react'
import ReactDom from 'react-dom'
import { Modal as ModalStyled, ModalContent } from './styles'

function Modal({ children, onClose }) {
  const contRef = useRef(null)
  useEffect(() => {
    function handleOnClose(event) {
      if (contRef.current && !contRef.current.contains(event.target)) {
        onClose()
      }
    }
    document.addEventListener('mousedown', handleOnClose)

    return () => {
      document.removeEventListener('mousedown', handleOnClose)
    }
  }, [onClose])

  return (
    <ModalStyled>
      <ModalContent ref={contRef}>{children}</ModalContent>
    </ModalStyled>
  )
}

export default function ModalPortal({ children, onClose }) {
  return ReactDom.createPortal(
    <Modal onClose={onClose}>{children}</Modal>,
    document.getElementById('root')
  )
}
