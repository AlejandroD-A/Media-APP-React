import config from './config'
import { getAuthFetch } from './index'

export function getPosts() {
  return fetch(`${config.urlPath}/posts`)
    .then(res => {
      if (!res.ok) {
        throw new Error('Error')
      }
      return res.json()
    })
    .then(resJson => {
      const { data } = resJson.data
      return data
    })
}

export function getPerspectivePosts(jwt) {
  return getAuthFetch(`/posts/perspective`, jwt).then(resJson => {
    const { data } = resJson.data
    return data
  })
}
