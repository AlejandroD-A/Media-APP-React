import React, { useState, useEffect } from 'react'
import { follow } from 'api/user'
import useUser from 'hooks/useUser'

function FollowButton({ id, isFollow, setIsFollow }) {
  const { jwt } = useUser()
  const [isDisabled, setIsDisabled] = useState(false)

  useEffect(() => {
    console.log('render')
  }, [])
  const onFollow = () => {
    setIsDisabled(true)
    follow(id, jwt)
      .then(res => {
        !isFollow ? setIsFollow(true) : setIsFollow(false)
        setIsDisabled(false)
      })
      .catch(e => console.log(e))
  }

  return (
    <button disabled={isDisabled} onClick={onFollow}>
      {isFollow ? 'Following' : 'Follow'}
    </button>
  )
}

export default FollowButton
