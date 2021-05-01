import { useState, useContext } from 'react'
import { Context } from 'context/UserContext'
import { register as registerService, login as loginService } from 'api/auth'

export default function useUser() {
  const [errorServer, setErrorServer] = useState([])
  const [isSubmitted, setIsSubmitted] = useState(false)

  const { user, setUser, setJwt, jwt, setShortFavs, shortFavs } = useContext(
    Context
  )

  const register = values => {
    registerService(values)
      .then(res => {
        setErrorServer([])
        if (res.errors) {
          const { errors } = res
          Object.entries(errors).forEach(([key, value]) => {
            value.forEach(value => {
              setErrorServer(prev => [...prev, value])
            })
          })
        } else {
          setIsSubmitted(true)
        }
      })
      .catch(err => {
        setErrorServer(err.message)
      })
  }

  const login = values => {
    loginService(values)
      .then(res => {
        setErrorServer([])

        if (res.errors) {
          console.log('err')
          const { errors } = res
          Object.entries(errors).forEach(([key, value]) => {
            value.forEach(value => {
              setErrorServer(prev => [...prev, value])
            })
          })
        } else {
          setUser(res.user)
          setJwt(res.access_token)
          sessionStorage.setItem('jwt', res.access_token)
          setIsSubmitted(true)
        }
      })
      .catch(err => {
        console.error(err)
        setErrorServer(['Wrong Crendentials'])
      })
  }

  const logout = () => {
    setUser('')
    setJwt('')
    sessionStorage.removeItem('jwt')
  }

  return {
    register,
    login,
    logout,
    errorServer,
    isSubmitted,
    user,
    jwt,
    shortFavs,
    setShortFavs,
    isLogged: Boolean(user)
  }
}
