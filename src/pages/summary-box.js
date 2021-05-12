import React, {useState} from "react"
import Layout from "../components/layout"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import SummaryBlockquoteComponent from '../components/summaryBlockquoteComponent';


export default function SummaryQuote () {
    const [fullContent,setFullContent] = useState(false);
    const [selectedColor,setSelectedColor] = useState('');
    const [blockquoteContent,setBlockquoteContent] = useState({
     whoShouldReadThis:'',
     whatAbout:'',
     whyImportant:'',

  
    })

    const [errorMessage, setErrorMessage] =useState(false);
    const errorText = 'Some data is missing'

   

    const handleClick=(e)=> {
        e.preventDefault();
        let isContentEmpty = Object.values(blockquoteContent).some(items => items === '');
        if(isContentEmpty) {
            setErrorMessage(true)
        } else {
            setFullContent(true)
            setErrorMessage(false)
        }
    }
  return (
    <Layout>
      <Container className="my-5">
        <Row>
          <Col md={6} id="left-side">
              <section id="colorButtons">
              <h3 className="font-weight-bold">Summary Box</h3>
                  <h4>Select color</h4>
              <Row>
                  <Col md={2} className="colors ">
                      <button className="summary-box-general-dark colorBtn"
                  onClick={(e) => {
                    setSelectedColor('summary-box-general-dark')
                
                  }}
                  ></button></Col>
    
                  <Col md={2} className="colors ">
                      <button className="summary-box-bank-dark colorBtn"
                      onClick={(e) => {
                        setSelectedColor('summary-box-bank-dark')
                    
                      }}
                      ></button></Col>
          
                  <Col md={2} className="colors ">
                      <button className="summary-box-gov-dark colorBtn"
                      onClick={(e) => {
                        setSelectedColor('summary-box-gov-dark')
                    
                      }}
                  ></button></Col>

                  <Col md={2} className="colors ">
                      <button className="summary-box-health-dark colorBtn"
                      onClick={(e) => {
                        setSelectedColor('summary-box-health-dark')
                    
                      }}>
                          </button></Col>
  
                  <Col md={2} className="colors ">
                      <button className="summary-box-sustain-dark colorBtn"
                      onClick={(e) => {
                        setSelectedColor('summary-box-sustain-dark')
                    
                      }}>
                          </button></Col>
      
                  
               
              </Row>
              </section>
            <Form>

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Who should read this:</Form.Label>
                <Form.Control as="textarea" rows={4}  onChange={(e) => {
                          setBlockquoteContent({...blockquoteContent,whoShouldReadThis:e.target.value});
                      
                        }}
                />
              </Form.Group>

              <Form.Group controlId="">
                <Form.Label>What it’s about:</Form.Label>
                <Form.Control as="textarea" rows={4}  onChange={(e)=>{
                    setBlockquoteContent({...blockquoteContent,whatAbout:e.target.value});
                }}/>
              </Form.Group>

              <Form.Group controlId="">
                <Form.Label>Why it’s important:</Form.Label>
                <Form.Control as="textarea" rows={4}  onChange={(e)=>{
                    setBlockquoteContent({...blockquoteContent,whyImportant:e.target.value});
                }}/>
              </Form.Group>
    

              <Button variant="primary" type="submit" onClick={handleClick}>
                Get Code
              </Button>
            </Form>
          </Col>
          <Col md={6} id="right-side">
              <h6 className="">Copy your code:</h6>
              <div id="theCode">
                  {errorMessage ? errorText : null}
                  {fullContent ? 
                <SummaryBlockquoteComponent 
                selectedColor={selectedColor}
                whoShouldReadThis={blockquoteContent.whoShouldReadThis}
                whatAbout={blockquoteContent.whatAbout}
                whyImportant={blockquoteContent.whyImportant}

                /> : null  
                }
              
              </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
