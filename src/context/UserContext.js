import React, { useState, useEffect } from 'react'
import { user as userAuthService } from 'api/auth'

export const Context = React.createContext({})

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState()
  const [jwt, setJwt] = useState(() => window.sessionStorage.getItem('jwt'))

  useEffect(() => {
    if (jwt) {
      userAuthService(jwt)
        .then(data => {
          const { user } = data
          setUser(user)
        })
        .catch(err => console.error(err))
    }
  }, [jwt])

  return (
    <Context.Provider value={{ user, setUser, jwt, setJwt }}>
      {children}
    </Context.Provider>
  )
}
