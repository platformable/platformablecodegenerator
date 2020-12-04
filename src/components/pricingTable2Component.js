import React from 'react'

export default function pricingTable2Component({col1Heading,col2Heading,col3Heading,selectedColor,
    col1Row1,col1Row2,col1Row3,col2Row1,col2Row2,col2Row3,col3Row1,col3Row2,col3Row3
}) {

    const theHtml = `  
<div class="PricingTable2 PricingTable2--3cols PricingTable2--collapse">

 <div style="order:0;" class="PricingTable2-cell PricingTable2-cell--head${selectedColor}-dark table-top-left"><h3>${col1Heading}</h3></div>
 <div style="order:1;" class="PricingTable2-cell cell">${col1Row1}</div>
 <div style="order:2;" class="PricingTable2-cell cell cell-even${selectedColor}-light">${col1Row2}</div>
 <div style="order:3;" class="PricingTable2-cell cell PricingTable2-cell--foot ">${col1Row3}</div>



 <div style="order:0;" class="PricingTable2-cell PricingTable2-cell--head${selectedColor}-dark "><h3>${col2Heading}</h3></div>
 <div style="order:1;" class="PricingTable2-cell cell">${col2Row1}</div>
 <div style="order:2;" class="PricingTable2-cell cell cell-even${selectedColor}-light">${col2Row2}</div>
 <div style="order:3;" class="PricingTable2-cell cell PricingTable2-cell--foot ">${col2Row3}</div>


 <div style="order:0;" class="PricingTable2-cell PricingTable2-cell--head${selectedColor}-dark table-top-right"><h3>${col3Heading}</h3></div>
 <div style="order:1;" class="PricingTable2-cell cell">${col3Row1}</div>
 <div style="order:2;" class="PricingTable2-cell cell cell-even${selectedColor}-light">${col3Row2}</div>
 <div style="order:3;" class="PricingTable2-cell cell PricingTable2-cell--foot ">${col3Row3}</div>

</div>
    `
    return (
   <code>
       {theHtml}
   </code>
    )
}
