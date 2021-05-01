import React, { useState, useEffect } from 'react'
import { getPosts, getPerspectivePosts } from 'api/posts'
import useUser from 'hooks/useUser'
import PerspectiveMenu from 'components/PerspectiveMenu'
import Card from 'components/Card'
import CardList from 'components/CardList'

function PostList({ perspective, setPerspective }) {
  const [posts, setPosts] = useState([])
  const { jwt } = useUser()

  useEffect(() => {
    if (perspective === 'perspective') {
      getPerspectivePosts(jwt)
        .then(data => {
          setPosts(data)
        })
        .catch(err => console.error(err))
    } else {
      getPosts()
        .then(data => {
          setPosts(data)
        })
        .catch(err => console.error(err))
    }
  }, [perspective, jwt])

  return (
    <>
      <PerspectiveMenu
        perspective={perspective}
        setPerspective={setPerspective}
      />

      <CardList>
        {posts.map(post => (
          <Card
            index={post.id}
            id={post.id}
            key={post.id}
            user={post.user}
            title={post.title}
            cover={post.cover}
            created_at={post.created_at}
            tags={post.tags}
            commentsCount={post.commentsCount}
            favouritesCount={post.favouritesCount}
          />
        ))}
      </CardList>
    </>
  )
}

export default React.memo(PostList)
