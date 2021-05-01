import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getUser } from 'api/user'
import FollowButton from 'components/FollowButton'
import useUser from 'hooks/useUser'
import Loader from 'components/Loader'

function ProfilePage() {
  const { id } = useParams()
  const { isLogged, user: userLogged, jwt } = useUser()

  const [isFollow, setIsFollow] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  const [user, setUser] = useState({
    name: '',
    username: '',
    avatar: '',
    profile: {
      url: '',
      about: ''
    }
  })

  useEffect(() => {
    setIsLoading(true)
    getUser({ id: id, jwt: jwt })
      .then(({ user, isFollow }) => {
        setUser(user)
        setIsFollow(isFollow)
        setIsLoading(false)
      })
      .catch(err => {
        setIsLoading(false)
        setError(true)
        console.log(err)
      })
  }, [setUser, setIsFollow, id, jwt])

  if (error) return <h1>User Not Found</h1>

  return (
    <>
      {isLoading && <Loader />}

      {!isLoading && (
        <>
          <section>
            <div className="avatar">
              <img src={user.avatar} alt="avatar" />
            </div>
            <span>@{user.username}</span>
            <h1>{user.name}</h1>

            {isLogged && userLogged.id !== id && (
              <div className="follow">
                <FollowButton
                  id={id}
                  isFollow={isFollow}
                  setIsFollow={setIsFollow}
                />
              </div>
            )}

            <p>{user.profile.url}</p>

            <div className="content">
              <p>{user.profile.about}</p>
            </div>
          </section>

          <section></section>
        </>
      )}
    </>
  )
}

export default ProfilePage
