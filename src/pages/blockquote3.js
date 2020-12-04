import React, {useState} from "react"
import Layout from "../components/layout"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import Blockquote3Component from '../components/blockquote3Component';
import NoDataImg from '../images/nodata.svg';

export default function BlockQuote1 () {
    const [fullContent,setFullContent] = useState(false);
    const [selectedColor,setSelectedColor] = useState('');
    const [blockquoteContent,setBlockquoteContent] = useState({
     author:'',
     imgUrl:'',
     quote:'',

  
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
              <h3 className="font-weight-bold">Blockquote 3</h3>
                  <h4>Select color</h4>
              <Row>
                  <Col md={2} className="colors ">
                      <button className="russian-violet-dark colorBtn"
                  onClick={(e) => {
                    setSelectedColor('--russian-violet')
                
                  }}
                  ></button></Col>
    
                  <Col md={2} className="colors ">
                      <button className="sunglow-dark colorBtn"
                      onClick={(e) => {
                        setSelectedColor('--sunglow')
                    
                      }}
                      ></button></Col>
          
                  <Col md={2} className="colors ">
                      <button className="red-orange-dark colorBtn"
                      onClick={(e) => {
                        setSelectedColor('--red-orange')
                    
                      }}
                  ></button></Col>

                  <Col md={2} className="colors ">
                      <button className="fluorecent-blue-dark colorBtn"
                      onClick={(e) => {
                        setSelectedColor('--fluorecent-blue')
                    
                      }}>
                          </button></Col>
  
                  <Col md={2} className="colors ">
                      <button className="lavender-blue-dark colorBtn"
                      onClick={(e) => {
                        setSelectedColor('--lavender-blue')
                    
                      }}>
                          </button></Col>
      
                  <Col md={2} className="colors ">
                      <button className="light-coral-dark colorBtn"
                      onClick={(e) => {
                        setSelectedColor('--light-coral')
                    
                      }}>
                          </button></Col>
             
                  <Col md={2} className="colors ">
                      <button className="sea-green-dark colorBtn"
                      onClick={(e) => {
                        setSelectedColor('--sea-green')
                    
                      }}>
                          </button></Col>
            
                  <Col md={2} className="colors ">
                      <button className="middle-blue-purple-dark colorBtn"
                      onClick={(e) => {
                        setSelectedColor('--middle-blue-purple')
                    
                      }}>
                          </button></Col>
               
              </Row>
              </section>
            <Form>

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Author</Form.Label>
                <Form.Control type="text"  onChange={(e) => {
                          setBlockquoteContent({...blockquoteContent,author:e.target.value});
                      
                        }}
                />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Image url</Form.Label>
                <Form.Control type="text"  onChange={(e) => {
                          setBlockquoteContent({...blockquoteContent,imgUrl:e.target.value});
                      
                        }}
                />
              </Form.Group>

              <Form.Group controlId="">
                <Form.Label>Quote Content</Form.Label>
                <Form.Control as="textarea" rows={4}  onChange={(e)=>{
                    setBlockquoteContent({...blockquoteContent,quote:e.target.value});
                }}/>
              </Form.Group>
    

              <Button variant="primary" type="submit" onClick={handleClick}>
                Get Code
              </Button>
            </Form>
          </Col>
          <Col md={6} id="right-side">
              <h6 className="">Your html code:</h6>
              <div id="theCode">
                  {errorMessage ? errorText : null}
                  {fullContent ? 
                <Blockquote3Component 
                selectedColor={selectedColor}
                imgUrl={blockquoteContent.imgUrl}
                author={blockquoteContent.author}
                quote={blockquoteContent.quote}

                /> : null  
                }
              
              </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
