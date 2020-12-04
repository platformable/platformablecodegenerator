import React from 'react'

export default function personaCard1Component({persona, title,imgUrl,content,selectedColor}) {

    const theHtml = `  
    <div class="persona-cardContainer${selectedColor}-light">
    <div class="persona-cardGrid">
    <div class="persona-card persona-card-card1${selectedColor}-dark ">
    <div class="card1-persona-container">
    <img src="${imgUrl}" />
    <h3>${persona}</h3>
    </div>
    </div>
    <div class="persona-card persona-card-card2${selectedColor}-light">
    <h3>${title}</h3>
    ${content}
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
