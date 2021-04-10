import React, { useState } from 'react'
import PostList from 'components/PostList'
import ShortList from 'components/ShortList'

import useUser from 'hooks/useUser'

import { CardSection, Menu, MenuItem } from './styles'

const ACTIVITY = {
  POSTS: 'posts',
  SHORTS: 'shorts'
}

function Dashboard() {
  const [activity, setActivity] = useState(ACTIVITY.POSTS)
  const [perspective, setPerspective] = useState('new')

  const { isLogged } = useUser()

  return (
    <CardSection>
      <div>
        <button onClick={() => setActivity(ACTIVITY.SHORTS)}>SHORTS</button>
        <button onClick={() => setActivity(ACTIVITY.POSTS)}>POSTS</button>
      </div>
      <Menu>
        {isLogged && (
          <MenuItem
            className={perspective === 'perspective' ? 'selected' : null}
            onClick={() => setPerspective('perspective')}
          >
            PERSPECTIVE!
          </MenuItem>
        )}
        <MenuItem
          className={perspective === 'new' ? 'selected' : null}
          onClick={() => setPerspective('new')}
        >
          NEW
        </MenuItem>
        <MenuItem
          className={perspective === 'best' ? 'selected' : null}
          onClick={() => setPerspective('best')}
        >
          BEST
        </MenuItem>
      </Menu>

      {activity === 'posts' ? (
        <PostList perspective={perspective} />
      ) : (
        <ShortList perspective={perspective} />
      )}
    </CardSection>
  )
}

export default Dashboard
