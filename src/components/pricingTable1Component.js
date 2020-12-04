import React from 'react'

export default function pricingTable1Component({col1Heading,col2Heading,col3Heading,selectedColor,
    col1Row1,col1Row2,col1Row3,col2Row1,col2Row2,col2Row3,col3Row1,col3Row2,col3Row3,
    col1Flag,col2Flag,col3Flag,col1TopImg,col2TopImg,col3TopImg,
}) {

    const theHtml = `
    <div class="Rtable Rtable--3cols Rtable--collapse">
            
    <div style="order:0;" class="Rtable-cell Rtable-cell--head${selectedColor}"><h3>${col1Heading}</h3></div>
    <div style="order:1;" class="Rtable-cell"><img src="${col1TopImg}"/></div>
    <div style="order:2;" class="Rtable-cell">${col1Row1}</div>
    <div style="order:3;" class="Rtable-cell ">${col1Row2}</div>
    <div style="order:4;" class="Rtable-cell ">${col1Row3}</div>
    <div style="order:5;" class="Rtable-cell Rtable-cell--foot"><img class="flag-icon" src="${col1Flag}"/></div>

    <div style="order:0;" class="Rtable-cell Rtable-cell--head${selectedColor}""><h3>${col2Heading}</h3></div>
    <div style="order:1;" class="Rtable-cell"><img src="${col2TopImg}"/></div>
    <div style="order:2;" class="Rtable-cell">${col2Row1}</div>
    <div style="order:3;" class="Rtable-cell ">${col2Row2}</div>
    <div style="order:4;" class="Rtable-cell ">${col2Row3}</div>
    <div style="order:5;" class="Rtable-cell Rtable-cell--foot"><img class="flag-icon" src="${col2Flag}"/></div>

    <div style="order:0;" class="Rtable-cell Rtable-cell--head${selectedColor}""><h3>${col3Heading}</h3></div>
    <div style="order:1;" class="Rtable-cell"><img src="${col3TopImg}"/></div>
    <div style="order:2;" class="Rtable-cell">${col3Row1}</div>
    <div style="order:3;" class="Rtable-cell ">${col3Row2}</div>
    <div style="order:4;" class="Rtable-cell ">${col3Row3}</div>
    <div style="order:5;" class="Rtable-cell Rtable-cell--foot"><img class="flag-icon" src="${col3Flag}"/></div>

</div>
    
    `
    return (
   <code>
       {theHtml}
   </code>
    )
}
