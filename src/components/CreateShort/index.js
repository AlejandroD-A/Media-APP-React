import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { AiOutlineFileImage } from 'react-icons/ai'

import Loader from 'components/Loader'

import useUser from 'hooks/useUser'
import { create } from 'api/shorts'
import { Context } from 'context/ShortContext'

import { Form } from './styles'

function CreateShort({ onClose }) {
  const { handleSubmit, register, errors } = useForm({
    mode: 'onChange'
  })
  const { jwt } = useUser()
  const { setShorts } = useContext(Context)
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = values => {
    setIsLoading(true)
    create(values, jwt)
      .then(data => {
        setIsLoading(false)
        if (data.errors) {
          return console.error(data.errors)
        }
        setShorts(prev => [data, ...prev])
        onClose()
      })
      .catch(err => console.error(err))
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div className="input-form">
        <textarea
          ref={register({
            required: 'required'
          })}
          name="content"
          rows="2"
        ></textarea>
        <div>
          <input
            className="file-input"
            type="file"
            id="file"
            accept="image/*"
            multiple
            name="images"
            ref={register()}
          />
          <label htmlFor="file">
            <AiOutlineFileImage />
          </label>
        </div>
      </div>

      {errors.content ? <div>{errors.content.message}</div> : null}

      <button disabled={isLoading}>{!isLoading ? 'CREATE' : <Loader />}</button>
    </Form>
  )
}

export default CreateShort
