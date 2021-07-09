import React from "react"
import "./layout.css"
import {OverlayTrigger, Tooltip, Button} from 'react-bootstrap'
import CallModalBtn from './callModal'


export default function SummaryBlockquoteComponent({
  whoShouldReadThis,
  whatAbout,
  whyImportant,
  selectedColor,
}) {
  const theHtml = `  
  <div class="summary-box text-white ${selectedColor}">
  <h3 class="">Who should read this:</h3> ${whoShouldReadThis} <br><br>
  <h3 class="">What it’s about:</h3> ${whatAbout}<br><br>
  <h3 class="">Why it’s important:</h3> ${whyImportant}<br>
  </div>

  `
  return (
    <>
      <div className="code-container">
      <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Copy to Clipboard</Tooltip>}>
  <span className="d-inline-block">
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
    </>
  )
}
