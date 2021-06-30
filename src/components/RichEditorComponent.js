import React, {useState} from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


export default function RichEditorComponent({handleTest}) {




    return (
        <CKEditor
        fontColor="black"
      editor={ ClassicEditor }
      data="<p>Create your table here, remember to set first row as Header Row</p>"
      onChange={ ( event, editor ) => {
          const data = editor.getData();
          handleTest(data)

/*           setPreview(false) */
      } }

  /> 
    )
}
