import React, { useContext, useEffect, useState } from 'react'
import { getShorts, getPerspectiveShorts } from 'api/shorts'
import { Context } from 'context/ShortContext'
import useUser from 'hooks/useUser'
import Card from 'components/Card'
import CardList from 'components/CardList'
import Loader from 'components/Loader'

function ShortList({ perspective }) {
  const { shorts, setShorts } = useContext(Context)
  const [isLoading, setLoading] = useState(true)
  const { jwt } = useUser()

  useEffect(() => {
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

  return isLoading ? (
    <Loader />
  ) : (
    <CardList>
      {shorts.map(short => (
        <Card
          id={short.id}
          key={short.id}
          user={short.user}
          content={short.content}
          created_at={short.created_at}
          tags={short.tags}
        />
      ))}
    </CardList>
  )
}

export default React.memo(ShortList)
