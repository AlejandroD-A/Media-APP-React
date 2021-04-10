import React from 'react'
import { useForm } from 'react-hook-form'
import useUser from 'hooks/useUser'

import { Form, FormGroup } from './styles'
function Register() {
  const { handleSubmit, register, errors } = useForm({ mode: 'onChange' })
  const { register: registerForm, errorServer, isSubmitted } = useUser()

  const onSubmit = values => {
    registerForm(values)
  }

  if (isSubmitted) return <h2>Se ha registrado con exito</h2>

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {errorServer
        ? errorServer.map((err, i) => <span key={i}> {err}</span>)
        : null}

      <FormGroup>
        <label>Name</label>
        <input
          name="name"
          type="text"
          ref={register({
            required: 'Required',
            maxLength: {
              value: 50,
              message: 'Must be less than 50 characters '
            },
            minLength: {
              value: 4,
              message: 'Must be must be at least 4 characters'
            },
            pattern: {
              value: /(?!.*[\\.\-\\_]{2,})^[a-zA-Z0-9\\.\-\\_\\  *]{4,50}$/,
              message: 'Cant contain special characters'
            }
          })}
        />
        {errors.name ? <div>{errors.name.message}</div> : null}
      </FormGroup>
      <FormGroup>
        <label>Username</label>
        <input
          name="username"
          type="text"
          ref={register({
            required: 'Required',
            maxLength: {
              value: 20,
              message: 'Must be less than 20 characters '
            },
            minLength: {
              value: 3,
              message: 'Must be must be at least 4 characters'
            },
            pattern: {
              value: /(?!.*[\\.\-\\_]{2,})^[a-zA-Z0-9\\.\-\\_]{3,20}$/,
              message: 'Cant contain special characters'
            }
          })}
        />
        {errors.username ? <div>{errors.username.message}</div> : null}
      </FormGroup>
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
      <button>Register</button>
    </Form>
  )
}

export default Register
