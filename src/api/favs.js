import { getAuthFetch, postAuthFetch } from './index.js'

export function addFavShort({ shortId, jwt }) {
  return postAuthFetch({ URI: `/shorts/${shortId}/favourites`, jwt: jwt })
}

export function getFavs(jwt) {
  return getAuthFetch({ URI: `/user/favourites`, jwt: jwt })
}
