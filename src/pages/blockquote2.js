import React, {useState,useEffect} from "react"
import Layout from "../components/layout"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import Blockquote2Component from '../components/blockquote2Component';
import NoDataImg from '../images/nodata.svg';

export default function BlockQuote2 () {
    const [fullContent,setFullContent] = useState(false);
    const [selectedColor,setSelectedColor] = useState('');
    const [blockquoteContent,setBlockquoteContent] = useState({
     author:'',
     topQuote:'',
     centerQuote:'',
     bottomQuote:''
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
              <h3 className="font-weight-bold">Blockquote 2</h3>
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

              <Form.Group controlId="">
                <Form.Label>Top quote</Form.Label>
                <Form.Control as="textarea" rows={4}  onChange={(e)=>{
                    setBlockquoteContent({...blockquoteContent,topQuote:e.target.value});
                }}/>
              </Form.Group>

              <Form.Group controlId="">
                <Form.Label>Center Quote</Form.Label>
                <Form.Control as="textarea" rows={4}  onChange={(e)=>{
                    setBlockquoteContent({...blockquoteContent,centerQuote:e.target.value});
                }}/>
              </Form.Group>


              <Form.Group controlId="">
                <Form.Label>Bottom Content</Form.Label>
                <Form.Control as="textarea" rows={4}  onChange={(e)=>{
                    setBlockquoteContent({...blockquoteContent,bottomQuote:e.target.value});
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
                <Blockquote2Component 
                selectedColor={selectedColor}
                topQuote={blockquoteContent.topQuote}
                author={blockquoteContent.author}
                centerQuote={blockquoteContent.centerQuote}
                bottomQuote={blockquoteContent.bottomQuote}

                /> : null  
                }
              
              </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
