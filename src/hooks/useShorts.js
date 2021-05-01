import { useState, useContext, useEffect } from 'react'
import { getShorts, getPerspectiveShorts } from 'api/shorts'
import { Context } from 'context/ShortContext'
import useUser from './useUser'

function useShorts(perspective) {
  const { shorts, setShorts } = useContext(Context)
  const [isLoading, setLoading] = useState(true)
  const { jwt } = useUser()

  useEffect(() => {
    console.log(perspective)
    if (perspective === 'perspective') {
      setLoading(true)
      getPerspectiveShorts(jwt)
        .then(data => {
          setLoading(false)
          setShorts(data)
        })
        .catch(err => console.error(err))
    } else {
      setLoading(true)

      getShorts()
        .then(data => {
          setLoading(false)
          setShorts(data)
        })
        .catch(err => console.error(err))
    }
  }, [perspective, jwt, setShorts])

  return { isLoading, shorts }
}

export default useShorts
