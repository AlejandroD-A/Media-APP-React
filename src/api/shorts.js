import config from './config'
import { getAuthFetch, postAuthFetch } from './index'

export function getShorts() {
  return fetch(`${config.urlPath}/shorts`)
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

export function getPerspectiveShorts(jwt) {
  return getAuthFetch(`/shorts/perspective`, jwt).then(resJson => {
    const { data } = resJson.data
    return data
  })
}

export function create(data, jwt) {
  const { content, images, tags } = data

  const formData = new FormData()
  formData.append('content', content)

  Object.entries(images).forEach((img, i) => {
    formData.append(`images[${i}]`, images[i])
  })

  tags.forEach((tag, i) => {
    formData.append(`tags[${i}][name]`, tag.replace('#', ''))
  })

  return postAuthFetch('/shorts', formData, jwt).then(res => {
    if (res.errors) {
      return res
    }
    return res.data
  })
}
