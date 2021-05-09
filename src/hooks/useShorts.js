import { useState, useContext, useEffect } from 'react'
import { getShorts, getPerspectiveShorts } from 'api/shorts'
import { Context } from 'context/ShortContext'

function useShorts(perspective = 'new') {
  const { shorts, setShorts } = useContext(Context)
  const [isLoading, setLoading] = useState(false)
  const [isLoadingNewPage, setIsLoadingNewPage] = useState(false)
  const [page, setPage] = useState(1)

  useEffect(() => {
    console.log(perspective)
    if (perspective === 'perspective') {
      setLoading(true)
      let jwt = sessionStorage.getItem('jwt')
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
  }, [perspective, setShorts])

  useEffect(() => {
    if (page === 1) return
    if (perspective === 'perspective') {
      setIsLoadingNewPage(true)
      let jwt = sessionStorage.getItem('jwt')

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
  }, [page, perspective, setShorts])

  return { isLoading, shorts, setPage, isLoadingNewPage }
}

export default useShorts
