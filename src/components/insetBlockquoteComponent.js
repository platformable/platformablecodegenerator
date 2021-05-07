import React from "react"
import "./layout.css"
import {OverlayTrigger, Tooltip, Button} from 'react-bootstrap'

export default function InsetBlockquoteComponent({
  content,
  selectedColor,
}) {
  const theHtml = `  
    <div className="rounded-xl shadow-md my-5 px-5 text-white ${selectedColor}">
<strong><i>${content}</i></strong>
</div>

    `
  return (
    <>
      <div className="code-container">
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
      <p className="my-2 badge badge-warning">Preview</p>
      <div
        dangerouslySetInnerHTML={{ __html: theHtml }}
        className={`text-white shadow-sm px-3 py-3 rounded ${selectedColor}`}
      />
    </>
  )
}