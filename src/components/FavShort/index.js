import React, { useState, useCallback } from 'react'
import useUser from 'hooks/useUser'
import { addFavShort } from 'api/favs'
import { FaRegHeart } from 'react-icons/fa'

function FavShort({ id, favouritesCount }) {
  const { jwt, user, isLogged, shortFavs, setShortFavs } = useUser()
  const [favCount, setFavCount] = useState(favouritesCount)

  const isFaved = useCallback(() => {
    if (user) {
      if (shortFavs) {
        return shortFavs.some(short => short.id === id) ? true : false
      }
    }
  }, [shortFavs, user, id])

  const handleAddFav = () => {
    if (isLogged) {
      addFavShort({ shortId: id, jwt })
        .then(res => {
          if (!isFaved()) {
            setShortFavs([...shortFavs, { id: id }])
            setFavCount(prev => prev + 1)
          } else {
            const newShortsFavs = shortFavs.filter(short => short.id !== id)
            setShortFavs(newShortsFavs)
            setFavCount(prev => prev - 1)
          }
        })
        .catch(e => console.error(e))
    }
  }
  return (
    <button onClick={handleAddFav}>
      <FaRegHeart className={` icon ${isFaved() ? 'faved' : ''}`} />
      <span>{favCount !== 0 ? favCount : null}</span>
    </button>
  )
}

export default FavShort
