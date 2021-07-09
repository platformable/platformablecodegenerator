import React, {useState,useEffect} from "react"
import Layout from "../components/layout"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import WBoxComponent from '../components/wBoxComponent';


export default function WBox () {
    const [fullContent,setFullContent] = useState(false);
    const [selectedColor,setSelectedColor] = useState('');
    const [wContent,setwContent] = useState({
     specialNote:'',
     whatAbout:'',
     whyImportant:'',

  
    })

    const [errorMessage, setErrorMessage] =useState(false);
    const errorText = 'Some data is missing'

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

    const handleClick=(e)=> {
        e.preventDefault();
        let isContentEmpty = Object.values(wContent).some(items => items === '');
        if(isContentEmpty) {
            setErrorMessage(true)
        } else {
            setFullContent(true)
            setErrorMessage(false)
        }
    }


    const theHtml = `  
    <div class="w-box ${selectedColor}">
    <h4 class="whatIsItAbout font-black">Whats is it about</h4>
    <p>${wContent.whatAbout}</p>
  
  <h4 class="whatIsItAbout font-black">Whats is it about</h4>
    <p>${wContent.whyImportant}</p>
  
    <h4 class="whatIsItAbout font-black">Whats is it about</h4>
    <p>${wContent.specialNote}</p>
  
  
  </div>
  
      `


  return (
    <Layout>
      <Container className="my-5">
        <Row>
          <Col md={6} id="left-side">
              <section id="colorButtons">
              <h3 className="font-weight-bold">W Box</h3>
                  <h4>Select color</h4>
              <Row>
                  <Col md={2} className="colors ">
                      <button className="w-box-general-dark-btn colorBtn"
                  onClick={(e) => {
                    setSelectedColor('w-box-general-dark-bg')
                
                  }}
                  ></button></Col>
    
                  <Col md={2} className="colors ">
                      <button className="w-box-ob-dark-btn colorBtn"
                      onClick={(e) => {
                        setSelectedColor('w-box-ob-bg')
                    
                      }}
                      ></button></Col>
          
                  <Col md={2} className="colors ">
                      <button className="w-box-og-dark-btn colorBtn"
                      onClick={(e) => {
                        setSelectedColor('w-box-og-bg')
                    
                      }}
                  ></button></Col>

                  <Col md={2} className="colors ">
                      <button className="w-box-oh-dark-btn colorBtn"
                      onClick={(e) => {
                        setSelectedColor('w-box-oh-bg')
                    
                      }}>
                          </button></Col>
  
                  <Col md={2} className="colors ">
                      <button className="w-box-os-dark-btn colorBtn"
                      onClick={(e) => {
                        setSelectedColor('w-box-os-bg')
                    
                      }}>
                          </button></Col>
      
                  
               
              </Row>
              </section>
            <Form>

              <Form.Group controlId="">
                <Form.Label>What it’s about:</Form.Label>
                <Form.Control as="textarea" rows={4}  onChange={(e)=>{
                    setwContent({...wContent,whatAbout:e.target.value});
                }}/>
              </Form.Group>

              <Form.Group controlId="">
                <Form.Label>Why it’s important:</Form.Label>
                <Form.Control as="textarea" rows={4}  onChange={(e)=>{
                    setwContent({...wContent,whyImportant:e.target.value});
                }}/>
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Special Note:</Form.Label>
                <Form.Control as="textarea" rows={4}  onChange={(e) => {
                          setwContent({...wContent,specialNote:e.target.value});
                      
                        }}
                />
              </Form.Group>
    

              <Button variant="primary" type="submit" onClick={handleClick} className="my-5">
                Get Code
              </Button>
            </Form>
          </Col>
          <Col md={6} id="right-side">
              <h6 className="">Copy your code:</h6>
              <div id="theCode">
                  {errorMessage ? errorText : null}
                  {fullContent ? 
                <WBoxComponent 
                selectedColor={selectedColor}
                specialNote={wContent.specialNote}
                whatAbout={wContent.whatAbout}
                whyImportant={wContent.whyImportant}
                /> : null  
                }
              
              </div>
          </Col>
        </Row>


        {fullContent ? (
          <Row>
            <Col md={12}>
              <h6 className="fw-bold">Preview component</h6>
              <div
                dangerouslySetInnerHTML={{ __html: theHtml }}
                className={selectedColor}
              />
            </Col>
          </Row>
        ) : null}
      </Container>
    </Layout>
  )
}
