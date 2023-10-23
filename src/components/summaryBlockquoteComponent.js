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
  <h3 class="">Who should read this:</h3><p> ${whoShouldReadThis}</p>
  <h3 class="">What it’s about:</h3><p> ${whatAbout}</p>
  <h3 class="">Why it’s important:</h3><p> ${whyImportant}</p>
  </div>

  `
  return (
    <>
      <div className="">
        <code
          onClick={() => {
            navigator.clipboard.writeText(theHtml)
          }}
        >
          <pre>{theHtml}</pre>
        </code>
      </div>
    </>
  )
}
