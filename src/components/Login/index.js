import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import useUser from 'hooks/useUser'
import { useHistory } from 'react-router-dom'

import { Form, FormGroup } from 'components/Register/styles'

function Login() {
  const { handleSubmit, register, errors } = useForm({ mode: 'onChange' })
  const { login, errorServer, isSubmitted } = useUser()
  const history = useHistory()

  useEffect(() => {
    if (isSubmitted === true) {
      setTimeout(() => {
        history.push('/')
      }, 2000)
    }
  }, [isSubmitted, history])

  const onSubmit = values => {
    login(values)
  }

  if (isSubmitted) {
    return (
      <>
        <h2>Bienvenido</h2>
        <span> Redireccionando!</span>
      </>
    )
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {errorServer
        ? errorServer.map((err, i) => <span key={i}> {err}</span>)
        : null}
      <FormGroup>
        <label>Email</label>
        <input
          name="email"
          type="email"
          ref={register({
            required: 'Required',
            pattern: {
              value: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
              message: 'Email not valid'
            }
          })}
        />
        {errors.email ? <div>{errors.email.message}</div> : null}
      </FormGroup>
      <FormGroup>
        <label>Password</label>
        <input
          name="password"
          type="password"
          ref={register({ required: 'Required' })}
        />
        {errors.password ? <div>{errors.password.message}</div> : null}
      </FormGroup>
      <button>Login</button>
    </Form>
  )
}

export default Login
