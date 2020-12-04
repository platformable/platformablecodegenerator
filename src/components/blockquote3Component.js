
import React from 'react'

export default function blockquote3Component({quote,author,imgUrl,selectedColor}) {

    const theHtml = `  
    <div class="blockquote3">
    <div class="blockquoteContainer${selectedColor}">
      <div class="quoteImg">
          <img src="${imgUrl}" alt="Avatar" class="image">
          <div class="overlay">
            <div class="icon">“</div>
          </div>
      </div>
      <div class="quoteText">${quote}
      <span>${author}</span>
       </div>  
      </div>
  </div>
    `
    return (
   <code>
       {theHtml}
   </code>
    )
}

