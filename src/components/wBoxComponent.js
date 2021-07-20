import React from "react"
import "./layout.css"
import {OverlayTrigger, Tooltip, Button} from 'react-bootstrap'
import CallModalBtn from './callModal'


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
      <div className="">

        <code
          onClick={() => {
            navigator.clipboard.writeText(theHtml)
          }}
        >
          {/* Display the code */}
          <pre>{theHtml}</pre>
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
