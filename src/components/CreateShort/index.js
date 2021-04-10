import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import useUser from 'hooks/useUser'
import useTags from 'hooks/useTags'
import { create } from 'api/shorts'
import { Context } from 'context/ShortContext'

function CreateShort() {
  const { handleSubmit, register, errors, watch } = useForm({
    mode: 'onChange'
  })
  const watchContent = watch('content', false)

  const { jwt } = useUser()
  const { tags } = useTags({ watchContent })
  const { setShorts } = useContext(Context)

  const onSubmit = values => {
    values.tags = tags
    console.log(values)
    create(values, jwt)
      .then(data => {
        if (data.errors) {
          console.error(data.errors)
        }

        setShorts(prev => [data, ...prev])
      })
      .catch(err => console.error(err))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        ref={register({
          required: 'required'
        })}
        name="content"
      />
      <input
        type="file"
        accept="image/*"
        multiple
        name="images"
        ref={register()}
      />
      {tags && (
        <div>
          {tags.map(tag => (
            <span>{tag}</span>
          ))}
        </div>
      )}
      {errors.content ? <div>{errors.content.message}</div> : null}

      <button>Crear</button>
    </form>
  )
}

export default CreateShort
