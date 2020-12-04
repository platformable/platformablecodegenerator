
import React from 'react'

export default function blockquote2Component({topQuote,author,centerQuote,bottomQuote,selectedColor}) {

    const theHtml = `  
    <div class="blockquote2">
    <blockquote class="blockquote2-toptext${selectedColor} ">
    ${topQuote}
    </blockquote>
   
    <blockquote class="blockquote2-middletext${selectedColor} ">
    ${centerQuote}
    </blockquote>
   
    <blockquote class="blockquote2-bottomtext${selectedColor} ">
    ${bottomQuote}
    <footer>${author}</footer>
    </blockquote>
    </div>
    `
    return (
   <code>
       {theHtml}
   </code>
    )
}

