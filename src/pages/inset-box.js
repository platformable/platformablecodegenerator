import React, {useState} from "react"
import Layout from "../components/layout"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import InsetBlockquoteComponent from '../components/insetBlockquoteComponent';
import NoDataImg from '../images/nodata.svg';

export default function InsetQuote1 () {
    const [fullContent,setFullContent] = useState(false);
    const [selectedColor,setSelectedColor] = useState('');
    const [blockquoteContent,setBlockquoteContent] = useState({
     content:'',

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
              <h3 className="font-weight-bold">Inset Box</h3>
                  <h4>Select color</h4>
              <Row>
                  <Col md={2} className="colors ">
                      <button className="inset-box-general-light colorBtn"
                  onClick={(e) => {
                    setSelectedColor('inset-box-general-light')
                
                  }}
                  ></button></Col>
    
                  <Col md={2} className="colors ">
                      <button className="inset-box-bank-light colorBtn"
                      onClick={(e) => {
                        setSelectedColor('inset-box-bank-light')
                    
                      }}
                      ></button></Col>
          
                  <Col md={2} className="colors ">
                      <button className="inset-box-gov-light colorBtn"
                      onClick={(e) => {
                        setSelectedColor('inset-box-gov-light')
                    
                      }}
                  ></button></Col>

                  <Col md={2} className="colors ">
                      <button className="inset-box-health-light colorBtn"
                      onClick={(e) => {
                        setSelectedColor('inset-box-health-light')
                    
                      }}>
                          </button></Col>
  
                  <Col md={2} className="colors ">
                      <button className="inset-box-sustain-light colorBtn"
                      onClick={(e) => {
                        setSelectedColor('inset-box-sustain-light')
                    
                      }}>
                          </button></Col>
      
                  
               
              </Row>
              </section>
            <Form>

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Content:</Form.Label>
                <Form.Control as="textarea" rows={4}  onChange={(e) => {
                          setBlockquoteContent({...blockquoteContent,content:e.target.value});
                      
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
                <InsetBlockquoteComponent 
                selectedColor={selectedColor}
                content={blockquoteContent.content}

                /> : null  
                }
              
              </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}


