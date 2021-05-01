import React, { useState, useEffect } from 'react'
import { user as userAuthService } from 'api/auth'

export const Context = React.createContext({})

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState()
  const [shortFavs, setShortFavs] = useState()
  const [jwt, setJwt] = useState(() => window.sessionStorage.getItem('jwt'))

  useEffect(() => {
    if (jwt) {
      userAuthService(jwt)
        .then(data => {
          const { user } = data
          const { favourite_shorts } = data.user
          setUser(user)
          return favourite_shorts
        })
        .then(favourite_shorts => setShortFavs(favourite_shorts))
        .catch(err => console.error(err))
    }
  }, [jwt])

  return (
    <Context.Provider
      value={{ user, setUser, jwt, setJwt, shortFavs, setShortFavs }}
    >
      {children}
    </Context.Provider>
  )
}
