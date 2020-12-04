import React from 'react'

export default function personaCard2Component({persona, title,imgUrl,content,selectedColor}) {

    const theHtml = `  
        <div class="persona-card1-container${selectedColor}-dark">
        <img src="${imgUrl}"/>
        <h3>${persona}</h3>
        <div class="persona-card1-text${selectedColor}-light">
        <h6>${title}</h6>
        ${content}
        </div>
        </div>
    `
    return (
   <code>
       {theHtml}
   </code>
    )
}

