import { useState, useContext, useEffect } from 'react'
import { getShorts, getPerspectiveShorts } from 'api/shorts'
import { Context } from 'context/ShortContext'
import useUser from './useUser'

function useShorts(perspective) {
  const { shorts, setShorts } = useContext(Context)
  const [isLoading, setLoading] = useState(false)
  const [isLoadingNewPage, setIsLoadingNewPage] = useState(false)
  const { jwt } = useUser()
  const [page, setPage] = useState(1)

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

  useEffect(() => {
    if (page === 1) return
    if (perspective === 'perspective') {
      setIsLoadingNewPage(true)

      getPerspectiveShorts(jwt, page)
        .then(data => {
          setIsLoadingNewPage(false)
          setShorts(prev => prev.concat(...data))
        })
        .catch(err => console.error(err))
    } else {
      setIsLoadingNewPage(true)

      getShorts(page)
        .then(data => {
          setIsLoadingNewPage(false)
          setShorts(prev => prev.concat(...data))
        })
        .catch(err => console.error(err))
    }
  }, [page, jwt, perspective, setShorts])

  return { isLoading, shorts, setPage, isLoadingNewPage }
}

export default useShorts
