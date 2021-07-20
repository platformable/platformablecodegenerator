import React from "react"
import "./layout.css"
import { OverlayTrigger, Tooltip, Button } from "react-bootstrap"
import CallModalBtn from "./callModal"

export default function InsetBlockquoteComponent({ content, selectedColor }) {
  const theHtml = `
      <div class="text-white ${selectedColor}">
        <strong>
          <i>${content}</i>
        </strong>
      </div>
  `
  return (
    <>
      <div class="text-white ${selectedColor}">
        <strong>
          <i>${content}</i>
        </strong>
      </div>
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
