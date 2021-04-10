import config from './config'

export function getTags() {
  return fetch(`${config.urlPath}/tags/thrends`)
    .then(res => {
      if (!res.ok) {
        throw new Error('Error')
      }
      return res.json()
    })
    .then(resJson => {
      const { data } = resJson
      return data
    })
}
