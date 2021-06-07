import React, {useState} from "react"
import Layout from "../components/layout"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import SmallQuoteComponent from '../components/smallQuoteComponent';


export default function SmallQuote () {
    const [fullContent,setFullContent] = useState(false);
    const [selectedColor,setSelectedColor] = useState('');
    const [quoteContent,setQuoteContent] = useState({
     quote:'',
     author:'',
     secondLine:''
    })

    const [errorMessage, setErrorMessage] =useState(false);
    const errorText = 'Some data is missing'

   

    const handleClick=(e)=> {
        e.preventDefault();
        let isContentEmpty = Object.values(quoteContent).some(items => items === '');
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
              <h3 className="font-weight-bold">Small Quote</h3>
                  <h4>Select color</h4>
              <Row>
                  <Col md={2} className="colors ">
                      <button className="dark-purple-btn colorBtn"
                  onClick={(e) => {
                    setSelectedColor('smallQuote-general-dark-bg')
                
                  }}
                  ></button></Col>
    
                  <Col md={2} className="colors ">
                      <button className="ob-dark-btn colorBtn"
                      onClick={(e) => {
                        setSelectedColor('smallQuote-ob-bg')
                    
                      }}
                      ></button></Col>
          
                  <Col md={2} className="colors ">
                      <button className="og-dark-btn colorBtn"
                      onClick={(e) => {
                        setSelectedColor('smallQuote-og-bg')
                    
                      }}
                  ></button></Col>

                  <Col md={2} className="colors ">
                      <button className="oh-dark-btn colorBtn"
                      onClick={(e) => {
                        setSelectedColor('smallQuote-oh-bg')
                    
                      }}>
                          </button></Col>
  
                  <Col md={2} className="colors ">
                      <button className="os-dark-btn colorBtn"
                      onClick={(e) => {
                        setSelectedColor('smallQuote-os-bg')
                    
                      }}>
                          </button></Col>
      
                  
               
              </Row>
              </section>
            <Form>

              <Form.Group controlId="">
                <Form.Label>Quote:</Form.Label>
                <Form.Control as="textarea" rows={4}  onChange={(e)=>{
                    setQuoteContent({...quoteContent,quote:e.target.value});
                }}/>
              </Form.Group>

              <Form.Group controlId="">
                <Form.Label>Author:</Form.Label>
                <Form.Control as="textarea" rows={4}  onChange={(e)=>{
                    setQuoteContent({...quoteContent,author:e.target.value});
                }}/>
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Second Line</Form.Label>
                <Form.Control as="textarea" rows={4}  onChange={(e) => {
                          setQuoteContent({...quoteContent,secondLine:e.target.value});
                      
                        }}
                />
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
                <SmallQuoteComponent 
                selectedColor={selectedColor}
                quote={quoteContent.quote}
                author={quoteContent.author}
                secondLine={quoteContent.secondLine}

                /> : null  
                }
              
              </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
