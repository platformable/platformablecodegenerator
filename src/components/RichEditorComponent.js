import React, { useState } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

export default function RichEditorComponent({ handleLabsBlogContent,index }) {
  return (
    <CKEditor
      fontColor="black"
      editor={ ClassicEditor }
      data=""
      index={index}
      onChange={ (event, editor) => {
        const data = editor.getData()
        handleLabsBlogContent(data)
      } }
    />
  )
}
