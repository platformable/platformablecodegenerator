
import React from 'react'

export default function blockquote1Component({quote,author,selectedColor}) {

    const theHtml = `  
    <blockquote class="blockquote1${selectedColor}">
    ${quote}
    <span>${author}</span>
   </blockquote>
    `
    return (
   <code>
       {theHtml}
   </code>
    )
}

