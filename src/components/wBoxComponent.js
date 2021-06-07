import React from "react"
import "./layout.css"
import {OverlayTrigger, Tooltip, Button} from 'react-bootstrap'
import CallModalBtn from './CallModal'


export default function wBoxComponent({
  specialNote,
  whatAbout,
  whyImportant,
  selectedColor,
}) {
  const theHtml = `  
  <div class="w-box ${selectedColor}">
  <h4 class="whatIsItAbout font-black">Whats is it about</h4>
  <p>${whatAbout}</p>

<h4 class="whatIsItAbout font-black">Whats is it about</h4>
  <p>${whyImportant}</p>

  <h4 class="whatIsItAbout font-black">Whats is it about</h4>
  <p>${specialNote}</p>


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
