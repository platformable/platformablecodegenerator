import React,{useState} from "react"
import Layout from "../components/layout"
import { Container, Row, Col, Form, Button, FormGroup } from "react-bootstrap"

export default function Roadmap() {

    const [roadMapContent,setRoadMapContent] = useState([])
    const [preview,setPreview]= useState(false)


const handleTitle =(e)=> {

    console.log("road title/ subject: s", e.target.value)
}

const handleContent = (e)=> {
    console.log("handleContent")
    console.log("road content: ", e.target.value)
}


  const addRow = () => {
    const rowContainer = document.querySelector('.row-container')

    const nodo = document.querySelector("#pruebaNodo")

    /* 1.- Create the elements */

    /* CARD CONTAINER */
    const cardContainer = document.createElement('div')
    cardContainer.classList.add('col-md-6', 'card-container')

    /* FORM GROUP */
    const formGroup = document.createElement('div')
    formGroup.classList.add('form-group')
    
    const label = document.createElement('LABEL')
    label.classList.add('form-label','font-weight-bold')
    label.innerText="Roadmap"

    const input = document.createElement('INPUT')
    input.setAttribute('type', 'text')
    input.setAttribute('placeholder', 'Title')
    input.classList.add('form-control','my-1','roadInputTitle')
    /* input.addEventListener('change',function(e) {
        const perritos = {
            name:e.target.value
        }
        setRoadMapContent([...roadMapContent,perritos])
    }) */

    const textarea = document.createElement('TEXTAREA')
    textarea.setAttribute('rows', '6')
    textarea.setAttribute('placeholder', 'Text Content')
    textarea.classList.add('form-control','my-1','roadTextareaContent')
  /*   textarea.addEventListener('change',function(e){
        const perritos = {
            content:e.target.value
        }
        setRoadMapContent([...roadMapContent,perritos])
    }) */

    /* 2.- Append Elements */

    cardContainer.appendChild(formGroup)
    formGroup.append(label,input,textarea)

    rowContainer.appendChild(cardContainer)
    

    


  }


  const handleClick = async (e) => {

  


   const inputs = Array.from(document.querySelectorAll('.roadInputTitle'))
   const content = Array.from(document.querySelectorAll('.roadTextareaContent'))

/*     const inputValues = await inputs.map((element)=>values.title=element.value)
    const contentValues = await content.map((element)=>values.title=element.value)
    console.log(inputValues)
    console.log(contentValues) */
  
/*    const x = await inputs.map((element)=> values.title=element.value)
   const y = await content.map((element)=>values.content=element.value) */

    inputs.forEach(input => {
        const val = []
        const values = {}
        values.title=input.value
        content.map((element)=>values.content=element.value)
       val.push(values)
        console.log(val)
    })




   

  }
  return (
    <Layout>
      <Container>
        <Row>
          <h3>Roadmap</h3>
          <Col md={12}>
            <Button
              variant="primary"
              type="submit"
              onClick={addRow}
              className="my-5"
            >
              Add Row
            </Button>
          </Col>
        </Row>

        <Row className="row-container my-5">

        </Row>

        <Row className="my-5">
                <Col>
                <Button variant="primary" type="submit" onClick={handleClick} className="my-5">
                Create Persona
              </Button>
              {preview ? <span className="d-inline-block p-2">
  
  <div
        className="badge badge-warning block"
        role="button"
        onClick={() => {
         /*  navigator.clipboard.writeText(html) */
        }}
      >
        <img className="btn" src="https://img.icons8.com/small/16/000000/copy-2.png" />
      </div>

</span>: null}
                </Col>
            </Row>
      </Container>
    </Layout>
  )
}
