import config from 'api/config'

export function getAuthFetch(URI, jwt) {
  return fetch(`${config.urlPath}${URI}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwt}`
    }
  }).then(res => {
    if (!res.ok) throw new Error('Response is not Ok')
    return res.json()
  })
}

export function postAuthFetch(URI, formData, jwt) {
  const headers = new Headers({
    Authorization: `Bearer ${jwt}`,
    Accept: 'application/json'
  })
  return fetch(`${config.urlPath}${URI}`, {
    method: 'POST',
    body: formData,
    headers
  }).then(res => {
    if (!res.ok && res.status !== 422) throw new Error('Response is not Ok')
    return res.json()
  })
}

export function postFetch(URI, data) {
  return fetch(`${config.urlPath}${URI}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(data)
  }).then(res => {
    if (!res.ok && res.status !== 422) throw new Error('Response is not Ok')
    return res.json()
  })
}
