import config from './config'

export function getUser() {
  return fetch(`${config.urlPath}/user`)
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
