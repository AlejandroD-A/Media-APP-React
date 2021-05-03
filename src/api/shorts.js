import config from './config'
import { getAuthFetch, postAuthFetch } from './index'

export function getShorts(page = 1) {
  return fetch(`${config.urlPath}/shorts?page=${page}`)
    .then(res => {
      if (!res.ok) {
        throw new Error('Error')
      }
      return res.json()
    })
    .then(resJson => {
      console.log(resJson)
      const { data } = resJson.data
      return data
    })
}

export function getPerspectiveShorts(jwt, page = 1) {
  return getAuthFetch(`/shorts/perspective?page=${page}`, jwt).then(resJson => {
    const { data } = resJson.data
    return data
  })
}

export function create(data, jwt) {
  const { content, images } = data

  let tags = []
  let validation = /(#[a-z0-9][a-z0-9\-_]*)/gi

  let validatedTags = content.match(validation)
  if (validatedTags) {
    const uniqueTags = new Set(validatedTags)
    tags = [...uniqueTags]
  }

  const formData = new FormData()
  formData.append('content', content)

  Object.entries(images).forEach((item, i) => {
    formData.append(`images[${i}]`, images[i])
  })

  tags.forEach((tag, i) => {
    formData.append(`tags[${i}][name]`, tag.replace('#', ''))
  })

  return postAuthFetch({ URI: '/shorts', formData, jwt }).then(res => {
    if (res.errors) {
      return res
    }
    return res.data
  })
}
