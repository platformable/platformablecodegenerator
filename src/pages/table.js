import React, { useState,useEffect } from "react"
import Layout from "../components/layout"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import DynamicTableComponent from "../components/dynamicTableComponent"

import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  loader: () => import('../components/RichEditorComponent'),
  loading: "Loading",
});

export default function Table() {
  const [fullContent, setFullContent] = useState(false)
  const [selectedColor, setSelectedColor] = useState("")
  const [content, setContent] = useState("");
  const [globalWindow,setGlobalWindow]=useState(false)

  useEffect(() => {
    addBorder()
},[])

const addBorder =()=>{
  const allWrappers = document.querySelectorAll('.colors button');
  allWrappers.forEach((element)=> {
      element.addEventListener("click", ()=>{
          const prevSelected = document.querySelectorAll(".colors button")
          prevSelected.forEach(selection=> selection.style.border="0")
          
          element.style.border="5px solid #fff";

      }, false);
  })
}


  useEffect(()=>{
    if(typeof window !== "undefined") {
      setGlobalWindow(true)
  } 
  },[])


  const [preview,setPreview]=useState(false);



  const [inputsTitle,setInputsTitle]=useState({
      heading:false,
      rows:false
  })

  const [errorMessage, setErrorMessage] = useState(false)
  const errorText = "Some data is missing"

const handleTest=(data) => {
setContent(data)
}


  const handleClick = e => {
    e.preventDefault()
    setPreview(true)
    const newContent= content.replace(`<figure class="table">`,`<figure class="${selectedColor}">`)
    setContent(newContent)
  }
 
  return (
    <Layout>
      <Container className="my-5">
        <Row>
          <Col md={12} id="left-side">
            <section id="colorButtons">
              <h3 className="font-weight-bold">Dynamic Table</h3>
              <h4>Select color</h4>
              <Row>
                <Col md={2} className="colors ">
                  <button
                    className="dynamicTable-general-dark colorBtn"
                    onClick={e => {
                 
                      setPreview(false)
                      if(content){
                        setSelectedColor("dynamicTable")
                        const newContent= content.replace(/".*">/, `"dynamicTable">`)
                        setContent(newContent)
                      } else { 
                        setSelectedColor("dynamicTable")
                      }
                   
                    }}
                  ></button>
                </Col>

                <Col md={2} className="colors ">
                  <button
                    className="dynamicTable-bank-dark colorBtn"
                    onClick={e => {
                      setPreview(false)
                      if(content){
                        setSelectedColor("dynamicTable-ob")
                        const newContent= content.replace(/".*">/, `"dynamicTable-ob">`)
                        setContent(newContent)
                      } else { 
                        setSelectedColor("dynamicTable-ob")
                      }
              
                    }}
                  ></button>
                </Col>

                <Col md={2} className="colors ">
                  <button
                    className="dynamicTable-gov-dark colorBtn"
                    onClick={e => {
                      setPreview(false)
                      if(content){
                        setSelectedColor("dynamicTable-og")
                        const newContent= content.replace(/".*">/, `"dynamicTable-og">`)
                        setContent(newContent)
                      } else { 
                        setSelectedColor("dynamicTable-og")
                      }
              
                    }}
                  ></button>
                </Col>

                <Col md={2} className="colors ">
                  <button
                    className="dynamicTable-health-dark colorBtn"
                    onClick={e => {
                      setPreview(false)
                      if(content){
                        setSelectedColor("dynamicTable-oh")
                        const newContent= content.replace(/".*">/, `"dynamicTable-oh">`)
                        setContent(newContent)
                      } else { 
                        setSelectedColor("dynamicTable-oh")
                      }
               
                    }}
                  ></button>
                </Col>

                <Col md={2} className="colors ">
                  <button
                    className="dynamicTable-sustain-dark colorBtn"
                    onClick={e => {     
                      setPreview(false)
                      if(content){
                        setSelectedColor("dynamicTable-os")
                        const newContent= content.replace(/".*">/, `"dynamicTable-os">`)
                        setContent(newContent)
                      } else { 
                        setSelectedColor("dynamicTable-os")
                      }
                    }}
                  ></button>
                </Col>
              </Row>
            </section>

            {/* {globalWindow ?
            <CKEditor
                      fontColor="black"
                    editor={ ClassicEditor }
                    data="<p>Create your table here, remember to set first row as Header Row</p>"
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        setContent(data)
                        setPreview(false)
                    } }
             
                /> : <p>An error ocurred, please come back later</p>} */}

    <LoadableComponent handleTest={handleTest}/>

            <Button variant="primary" type="submit" onClick={handleClick} className="my-5">
                Create Table
              </Button>
              {" "}
            {preview ? <span className="d-inline-block p-2">
  
    <div
          className="badge badge-warning block"
          role="button"
          onClick={() => {
            navigator.clipboard.writeText(content)
          }}
        >
          <img className="btn" src="https://img.icons8.com/small/16/000000/copy-2.png" />
        </div>

  </span>: null}


           {preview ? <div dangerouslySetInnerHTML={{ __html: content }}/> : null}   

          </Col>

      


        </Row>
      </Container>
    </Layout>
  )
}
