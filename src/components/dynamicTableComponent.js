import React from "react"
import "./layout.css"
import {OverlayTrigger, Tooltip, Button} from 'react-bootstrap'
import CallModalBtn from './callModal'


export default function DynamicTableComponent({
  whoShouldReadThis,
  whatAbout,
  whyImportant,
  selectedColor,
}) {
  const theHtml = `  
    <div className="rounded-xl shadow-md my-5 px-5 text-white ${selectedColor}">
    <strong>Who should read this:</strong> ${whoShouldReadThis} <br><br>
    <strong>What it’s about:</strong> ${whatAbout}<br><br>
    <strong>Why it’s important:</strong> ${whyImportant}<br>
    </div>

    `
  return (
    <>
      <div className="code-container">
        <CallModalBtn theHtml={theHtml} selectedColor={selectedColor}/>

      <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Copy to Clipboard</Tooltip>}>
  <span className="d-inline-block">
    {/* <Button disabled style={{ pointerEvents: 'none' }}>
      Disabled button
    </Button> */}
    <div
          className="badge badge-warning block"
          role="button"
          onClick={() => {
            navigator.clipboard.writeText(theHtml)
          }}
        >
          <img src="https://img.icons8.com/small/16/000000/copy-2.png" />
        </div>
  </span>
</OverlayTrigger>
<br></br>
        

        <code
          onClick={() => {
            navigator.clipboard.writeText(theHtml)
          }}
        >
          {theHtml}
        </code>
      </div>
      {/* <p className="my-2 badge badge-warning">Preview</p>
      <div
        dangerouslySetInnerHTML={{ __html: theHtml }}
        className={`text-white shadow-sm px-3 py-3 rounded ${selectedColor}`}
      /> */}
    </>
  )
}
