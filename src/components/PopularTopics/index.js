import React, { useEffect, useState } from 'react'
import './styles.css'

import { getTags } from 'api/tags'

function PopularTopics() {
  const [tags, setTags] = useState([])

  useEffect(() => {
    let mounted = true
    getTags()
      .then(res => {
        mounted && setTags(res)
      })
      .catch(err => console.error(err))

    return function () {
      mounted = false
    }
  }, [])

  return (
    <div className="popular-topics">
      <h2>
        Popular <span>Topics</span>
      </h2>
      <ul>
        {tags.map(tag => (
          <li key={tag.id}>
            <a href={`url/tag/${tag.id}`}>#{tag.name}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PopularTopics
