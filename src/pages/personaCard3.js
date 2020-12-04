import React, {useState} from "react"
import Layout from "../components/layout"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import PersonaCard3Component from '../components/PersonaCard3Component';
import NoDataImg from '../images/nodata.svg';

export default function PersonaCard3 () {
    const [fullContent,setFullContent] = useState(false);
    const [selectedColor,setSelectedColor] = useState('');
    const [personaCardContent,setPersonaCardContent] = useState({
     persona:'',
     imgUrl:'',
     title:'',
     content:''
  
    })

    const [errorMessage, setErrorMessage] =useState(false);
    const errorText = 'Some data is missing'

   

    const handleClick=(e)=> {
        e.preventDefault();
        let isContentEmpty = Object.values(personaCardContent).some(items => items === '');
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
              <h3 className="font-weight-bold">Persona Card Top Image</h3>
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
                <Form.Label>Persona</Form.Label>
                <Form.Control type="text"  onChange={(e) => {
                          setPersonaCardContent({...personaCardContent,persona:e.target.value});
                      
                        }}
                />
              </Form.Group>

              <Form.Group controlId="">
                <Form.Label>Image Url</Form.Label>
                <Form.Control type="text" onChange={(e)=>{
                    setPersonaCardContent({...personaCardContent,imgUrl:e.target.value});
                }}/>
              </Form.Group>

              <Form.Group controlId="">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" onChange={(e)=>{
                    setPersonaCardContent({...personaCardContent,title:e.target.value});
                }}/>
              </Form.Group>
              <Form.Group controlId="">
                <Form.Label>Content</Form.Label>
                <Form.Control as="textarea" rows={4} onChange={(e)=>{
                   setPersonaCardContent({...personaCardContent,content:e.target.value});
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
                <PersonaCard3Component 
                selectedColor={selectedColor}
                persona={personaCardContent.persona}
                title={personaCardContent.title}
                imgUrl={personaCardContent.imgUrl}
                content={personaCardContent.content}
                /> : null  
                }
              
              </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
