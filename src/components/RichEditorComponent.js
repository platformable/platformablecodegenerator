import React, { useState } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

export default function RichEditorComponent({ handleLabsBlogContent }) {
  return (
    <CKEditor
      fontColor="black"
      editor={ ClassicEditor }
      data=""
      onChange={ (event, editor) => {
        const data = editor.getData()
        handleLabsBlogContent(data)
      } }
    />
  )
}
