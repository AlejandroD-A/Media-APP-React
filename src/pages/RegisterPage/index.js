import React from 'react'
import RegisterForm from 'components/Register'
import styled from '@emotion/styled'

const Title = styled.h2`
  text-align: center;
`

function RegisterPage() {
  return (
    <>
      <Title>Registrese Señol</Title>
      <RegisterForm />
    </>
  )
}

export default RegisterPage
