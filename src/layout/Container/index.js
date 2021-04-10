import React from 'react'
import { Container as ContainerStyle } from './styles'

function Container({ children, width }) {
  return <ContainerStyle width={width}>{children}</ContainerStyle>
}

export default Container
