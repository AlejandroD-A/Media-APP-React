import { useState, useContext } from 'react'
import { Context } from 'context/UserContext'
import { register as registerService, login as loginService } from 'api/auth'

export default function useUser() {
  const [errorServer, setErrorServer] = useState([])
  const [isSubmitted, setIsSubmitted] = useState(false)

  const { user, setUser, setJwt, jwt, setShortFavs, shortFavs } = useContext(
    Context
  )

  const handleErrors = errors => {
    let arrayError = []
    Object.entries(errors).forEach(([key, value]) => {
      value.forEach(error => arrayError.push(error))
    })
    console.log(arrayError)
    setErrorServer(arrayError)
  }

  const register = values => {
    registerService(values)
      .then(res => {
        setErrorServer([])
        res.errors ? handleErrors(res.errors) : setIsSubmitted(true)
      })
      .catch(err => {
        setErrorServer(err.message)
      })
  }

  const login = values => {
    loginService(values)
      .then(res => {
        const { data } = res
        setErrorServer([])
        window.sessionStorage.setItem('jwt', data.access_token)
        setJwt(data.access_token)

        setIsSubmitted(true)
      })
      .catch(err => {
        setErrorServer(['Invalid Credentials'])
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
