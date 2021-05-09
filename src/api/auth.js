import { postFetch } from 'api'
import config from 'api/config'

export function register(formData) {
  return postFetch(`/auth/register`, formData)
}

export function login(formData) {
  return postFetch(`/auth/login`, formData)
}

export function user(jwt) {
  return fetch(`${config.urlPath}/auth/user`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwt}`
    }
  })
    .then(res => {
      if (!res.ok) throw new Error('response not OK')
      return res.json()
    })
    .then(resJson => resJson.data)
    .catch(err => console.error(err))
}
