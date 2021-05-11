import React, { useState } from 'react'
import { EditorState, convertToRaw } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import draftToHtml from 'draftjs-to-html'
import PreviewPost from 'components/PreviewPost'
import Modal from 'components/Modal'

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import './style.css'

function CreatePost() {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  )
  const [convertedContent, setConvertedContent] = useState()
  const [showPreview, setShowPreview] = useState(false)

  const handleSave = () => {
    const rawContentState = convertToRaw(editorState.getCurrentContent())
    let currentContentToHtml = draftToHtml(rawContentState)
    setConvertedContent(currentContentToHtml)

    console.log(convertedContent)
  }

  const handleShowPreview = () => {
    const rawContentState = convertToRaw(editorState.getCurrentContent())
    let currentContentToHtml = draftToHtml(rawContentState)
    setConvertedContent(currentContentToHtml)

    setShowPreview(true)
  }

  return (
    <div className="App">
      <button onClick={handleSave}> Save</button>
      <button onClick={handleShowPreview}> Show Preview</button>

      <Editor
        defaultEditorState={editorState}
        onEditorStateChange={setEditorState}
        toolbarClassName="toolbar-class"
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
      />

      {showPreview && (
        <Modal onClose={() => setShowPreview(false)}>
          <PreviewPost contentHtml={convertedContent} />
        </Modal>
      )}
    </div>
  )
}

export default CreatePost
