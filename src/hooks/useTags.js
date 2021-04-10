import { useEffect, useState } from 'react'

function useTags({ watchContent }) {
  const [tags, setTags] = useState([])

  useEffect(() => {
    if (watchContent) {
      setTags([])
      let validation = /(#[a-z0-9][a-z0-9\-_]*)/gi

      let validatedTags = watchContent.match(validation)
      if (validatedTags) {
        const uniqueTags = new Set(validatedTags)
        const finalTags = [...uniqueTags]
        setTags(finalTags)
      }
    }
  }, [watchContent, setTags])

  return { tags }
}

export default useTags
