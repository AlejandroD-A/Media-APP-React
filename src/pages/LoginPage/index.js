import React from 'react'
import Login from 'components/Login'
import styled from '@emotion/styled'

const Title = styled.h2`
  text-align: center;
`

function LoginPage() {
  return (
    <>
      <Title>Iniciar Sesion!</Title>
      <Login />
    </>
  )
}

export default LoginPage
