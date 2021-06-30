export const html = `
<section id="timeline">
${form.map((item,index)=>{(
<article>
    <div class="inner">
      <span> {index} </span>
      <h2>{index.title}</h2>
      <p>{index.content}</p>
    </div>
  </article>
)})
  }
</section>
`