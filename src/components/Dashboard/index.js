import React, { useState } from 'react'
import PostList from 'components/PostList'
import ShortList from 'components/ShortList'

import { DashboardSection, SelectorButton } from './styles'

const ACTIVITY = {
  POSTS: 'posts',
  SHORTS: 'shorts'
}

function Dashboard() {
  const [activity, setActivity] = useState(ACTIVITY.SHORTS)
  const [perspective, setPerspective] = useState('new')

  return (
    <DashboardSection>
      <div>
        <SelectorButton
          selected={activity === ACTIVITY.SHORTS}
          onClick={() => setActivity(ACTIVITY.SHORTS)}
        >
          SHORTS
        </SelectorButton>
        <SelectorButton
          selected={activity === ACTIVITY.POSTS}
          onClick={() => setActivity(ACTIVITY.POSTS)}
        >
          POSTS
        </SelectorButton>
      </div>

      {activity === 'posts' && (
        <PostList perspective={perspective} setPerspective={setPerspective} />
      )}
      {activity === 'shorts' && (
        <ShortList perspective={perspective} setPerspective={setPerspective} />
      )}
    </DashboardSection>
  )
}

export default Dashboard
