import { postAuthFetch, getAuthFetch } from './index'

export function getUser({ id, jwt }) {
  return getAuthFetch(`/user/${id}`, jwt).then(resJson => {
    const { user, isFollow } = resJson.data
    return { user, isFollow }
  })
}

export function follow(id, jwt) {
  return postAuthFetch({ URI: `/user/${id}/follow`, jwt }).then(res => res)
}
