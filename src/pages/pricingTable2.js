import React, {useState,useEffect} from "react"
import Layout from "../components/layout"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import PricingTable2Compopnent from '../components/pricingTable2Component';
import NoDataImg from '../images/nodata.svg';

export default function PricingTable2() {
    const [fullContent,setFullContent] = useState(false);
    const [selectedColor,setSelectedColor] = useState('');
    const [pricingTableContent,setPricingTableContent] = useState({
        col1Heading:'',
        col1Row1:'',
        col1Row2:'',
        col1Row3:'',
        col2Heading:'',
        col2Row1:'',
        col2Row2:'',
        col2Row3:'',
        col3Heading:'',
        col3Row1:'',
        col3Row2:'',
        col3Row3:''
  
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
        let isContentEmpty = Object.values(pricingTableContent).some(items => items === '');
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
              <h3 className="font-weight-bold">Pricing Table 2</h3>
                  <h4>Select heading color</h4>
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
                <Form.Label>Col1 Heading</Form.Label>
                <Form.Control type="text"  onChange={(e) => {
                          setPricingTableContent({...pricingTableContent,col1Heading:e.target.value});
                      
                        }}
                />
              </Form.Group>


              <Form.Group controlId="">
                <Form.Label>Col1 Row 1</Form.Label>
                <Form.Control as="textarea" rows={4} onChange={(e)=>{
                    setPricingTableContent({...pricingTableContent,col1Row1:e.target.value})
                }}/>
              </Form.Group>

              <Form.Group controlId="">
                <Form.Label>Col1 Row 2</Form.Label>
                <Form.Control as="textarea" rows={4} onChange={(e)=>{
                    setPricingTableContent({...pricingTableContent,col1Row2:e.target.value})
                }}/>
              </Form.Group>
              <Form.Group controlId="">
                <Form.Label>Col1 Row 3</Form.Label>
                <Form.Control as="textarea" rows={4} onChange={(e)=>{
                   setPricingTableContent({...pricingTableContent,col1Row3:e.target.value})
                }}/>
              </Form.Group>
        

              {/* COLUMN2 */}

              <Form.Group controlId="" className="mt-5">
                <Form.Label>Col2 Heading</Form.Label>
                <Form.Control type="text"  onChange={(e) => {
                         setPricingTableContent({...pricingTableContent,col2Heading:e.target.value})
                     
                        }}
                />
              </Form.Group>

              <Form.Group controlId="">
                <Form.Label>Col2 Row 1</Form.Label>
                <Form.Control as="textarea" rows={4} onChange={(e)=>{
                   setPricingTableContent({...pricingTableContent,col2Row1:e.target.value})
                }}/>
              </Form.Group>

              <Form.Group controlId="">
                <Form.Label>Col2 Row 2</Form.Label>
                <Form.Control as="textarea" rows={4} onChange={(e)=>{
                     setPricingTableContent({...pricingTableContent,col2Row2:e.target.value})
                }}/>
              </Form.Group>
              <Form.Group controlId="">
                <Form.Label>Col2 Row 3</Form.Label>
                <Form.Control as="textarea" rows={4} onChange={(e)=>{
                     setPricingTableContent({...pricingTableContent,col2Row3:e.target.value})
                }}/>
              </Form.Group>
            

              {/* COLUMN 3 */}


              <Form.Group controlId="" className="mt-5">
                <Form.Label>Col3 Heading</Form.Label>
                <Form.Control type="text"  onChange={(e) => {
                           setPricingTableContent({...pricingTableContent,col3Heading:e.target.value})
                         
                        }}
                />
              </Form.Group>

              <Form.Group controlId="">
                <Form.Label>Col3 Row 1</Form.Label>
                <Form.Control as="textarea" rows={4} onChange={(e)=>{
                    setPricingTableContent({...pricingTableContent,col3Row1:e.target.value})
                }}/>
              </Form.Group>

              <Form.Group controlId="">
                <Form.Label>Col3 Row 2</Form.Label>
                <Form.Control as="textarea" rows={4} onChange={(e)=>{
                    setPricingTableContent({...pricingTableContent,col3Row2:e.target.value})
                }}/>
              </Form.Group>
              <Form.Group controlId="">
                <Form.Label>Col3 Row 3</Form.Label>
                <Form.Control as="textarea" rows={4} onChange={(e)=>{
                    setPricingTableContent({...pricingTableContent,col3Row3:e.target.value})
                }}/>
              </Form.Group>
            

              <Button variant="primary" type="submit" onClick={handleClick}>
                Submit
              </Button>
            </Form>
          </Col>
          <Col md={6} id="right-side">
              <h6 className="text-center">Your html code:</h6>
              <div id="theCode">
                  {errorMessage ? errorText : null}
                  {fullContent ? 
                <PricingTable2Compopnent 
                selectedColor={selectedColor}
                col1Heading={pricingTableContent.col1Heading}
                col1Row1={pricingTableContent.col1Row1}
                col1Row2={pricingTableContent.col1Row2}
                col1Row3={pricingTableContent.col1Row3}
                col2Heading={pricingTableContent.col2Heading}
                col2Row1={pricingTableContent.col2Row1}
                col2Row2={pricingTableContent.col2Row2}
                col2Row3={pricingTableContent.col2Row3}
                col3Heading={pricingTableContent.col3Heading}
                col3Row1={pricingTableContent.col3Row1}
                col3Row2={pricingTableContent.col3Row2}
                col3Row3={pricingTableContent.col3Row3}     
                
                /> : null  
                }
              
              </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
