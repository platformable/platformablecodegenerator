import React from "react"
import "./layout.css"


export default function SmallQuoteComponent({
  quote,
  author,
  secondLine,
  selectedColor,
}) {
/*   const theHtml = `  
  <div class="smallQuote ${selectedColor}">
    <div class="centered-border" style="margin-bottom:30px;"></div>
      <p className="my-3">${quote}</p>
    <div class="author"><h3 className="font-black">${author}</h3></div>
      <div class="second-line">${secondLine}</div>
    <div class="centered-border" style="margin-top:30px;"></div>
  </div>
    ` */

    const theHtml = `
    <div className="simple-quote ${selectedColor}">
    <p>${quote}</p>
    <h6 className="">${author}</h6>
    <span>${secondLine}</span>
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
