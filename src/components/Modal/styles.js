import styled from '@emotion/styled'

export const Modal = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(2px);
  position: fixed;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const ModalContent = styled.div`
  button {
    display: block;
    margin-bottom: 2rem;
  }
`
