import React from 'react'
import DOMPurify from 'dompurify'

function PreviewPost({ contentHtml }) {
  const createMarkup = html => {
    return {
      __html: DOMPurify.sanitize(html)
    }
  }

  return (
    <div
      className="preview"
      dangerouslySetInnerHTML={createMarkup(contentHtml)}
    ></div>
  )
}

export default PreviewPost
