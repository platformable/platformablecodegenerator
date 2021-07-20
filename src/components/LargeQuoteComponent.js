import React from "react"
import "./layout.css"
import {OverlayTrigger, Tooltip, Button} from 'react-bootstrap'
import CallModalBtn from './callModal'


export default function wBoxComponent({
  quote,
  author,
  secondLine,
  selectedColor,
}) {
  const theHtml = `  
  <div class="large-quote ${selectedColor}">
  <p>${quote}</p>
  <div class="author"><h3 class="font-black">${author}</h3></div>
  <div class="second-line">${secondLine}</div>
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
