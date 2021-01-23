import React, {useState} from "react"
import Layout from "../components/layout"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import PricingTable1Compopnent from '../components/pricingTable1Component';
import NoDataImg from '../images/nodata.svg';

export default function PricingTable1() {
    const [fullContent,setFullContent] = useState(false);
    const [selectedColor,setSelectedColor] = useState('');
    const [pricingTableContent,setPricingTableContent] = useState({
        col1Heading:'',
        col1TopImg:'',
        col1Row1:'',
        col1Row2:'',
        col1Row3:'',
        col1Flag:'',
        col2Heading:'',
        col2TopImg:'',
        col2Row1:'',
        col2Row2:'',
        col2Row3:'',
        col2Flag:'',
        col3Heading:'',
        col3TopImg:'',
        col3Row1:'',
        col3Row2:'',
        col3Row3:'',
        col3Flag:'',
    })

    const [errorMessage, setErrorMessage] =useState(false);
    const errorText = 'Some data is missing'

   

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
              <h3 className="font-weight-bold">Pricing Table 1</h3>
                  <h4>Select heading color</h4>
              <Row>
                  <Col md={2} className="colors ">
                      <button className="russian-violet-dark colorBtn"
                  onClick={(e) => {
                    setSelectedColor('--russian-violet-dark')
                
                  }}
                  ></button></Col>
                  <Col md={2} className="colors ">
                      <button className="russian-violet-light colorBtn"
                       onClick={(e) => {
                        setSelectedColor('--russian-violet-light')
                    
                      }}
                      ></button></Col>
                  <Col md={2} className="colors ">
                      <button className="sunglow-dark colorBtn"
                      onClick={(e) => {
                        setSelectedColor('-sunglow-dark')
                    
                      }}
                      ></button></Col>
                  <Col md={2} className="colors ">
                      <button className="sunglow-light colorBtn"
                      onClick={(e) => {
                        setSelectedColor('-sunglow-light')
                    
                      }}
                  
                  ></button></Col>
                  <Col md={2} className="colors ">
                      <button className="red-orange-dark colorBtn"
                      onClick={(e) => {
                        setSelectedColor('-red-orange-dark')
                    
                      }}
                  ></button></Col>
                  <Col md={2} className="colors ">
                      <button className="red-orange-light colorBtn"
                      onClick={(e) => {
                        setSelectedColor('-red-orange-light')
                    
                      }}
                      
                      ></button></Col>
                  <Col md={2} className="colors ">
                      <button className="fluorecent-blue-dark colorBtn"
                      onClick={(e) => {
                        setSelectedColor('-fluorecent-blue-dark')
                    
                      }}>
                          </button></Col>
                  <Col md={2} className="colors ">
                      <button className="fluorecent-blue-light colorBtn"
                      onClick={(e) => {
                        setSelectedColor('-fluorecent-blue-light')
                    
                      }}>
                          </button></Col>
                  <Col md={2} className="colors ">
                      <button className="lavender-blue-dark colorBtn"
                      onClick={(e) => {
                        setSelectedColor('-lavender-blue-dark')
                    
                      }}>
                          </button></Col>
                  <Col md={2} className="colors ">
                      <button className="lavender-blue-light colorBtn"
                      onClick={(e) => {
                        setSelectedColor('-lavender-blue-light')
                    
                      }}>
                          </button></Col>
                  <Col md={2} className="colors ">
                      <button className="light-coral-dark colorBtn"
                      onClick={(e) => {
                        setSelectedColor('-light-coral-dark')
                    
                      }}>
                          </button></Col>
                  <Col md={2} className="colors ">
                      <button className="light-coral-light colorBtn"
                      onClick={(e) => {
                        setSelectedColor('-light-coral-light')
                    
                      }}>
                          </button></Col>
                  <Col md={2} className="colors ">
                      <button className="sea-green-dark colorBtn"
                      onClick={(e) => {
                        setSelectedColor('--sea-green-dark')
                    
                      }}>
                          </button></Col>
                  <Col md={2} className="colors ">
                      <button className="sea-green-light colorBtn"
                      onClick={(e) => {
                        setSelectedColor('--sea-green-light')
                    
                      }}>
                          </button></Col>
                  <Col md={2} className="colors ">
                      <button className="middle-blue-purple-dark colorBtn"
                      onClick={(e) => {
                        setSelectedColor('--middle-blue-purple-dark')
                    
                      }}>
                          </button></Col>
                  <Col md={2} className="colors ">
                      <button className="middle-blue-purple-light colorBtn"
                      onClick={(e) => {
                        setSelectedColor('--middle-blue-purple-light')
                    
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
                <Form.Label>Col1 top image url address</Form.Label>
                <Form.Control type="text"  onChange={(e) => {
                          setPricingTableContent({...pricingTableContent,col1TopImg:e.target.value});
                         
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
            
              <Form.Group controlId="">
                <Form.Label>Col1 bottom flag url address</Form.Label>
                <Form.Control type="text" onChange={(e) => {
                          setPricingTableContent({...pricingTableContent,col1Flag:e.target.value})
                         
                        }}
                />
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
                <Form.Label>2 top image url address</Form.Label>
                <Form.Control type="text"  onChange={(e) => {
                          setPricingTableContent({...pricingTableContent,col2TopImg:e.target.value})
                          
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
            
              <Form.Group controlId="">
                <Form.Label>Col2 bottom flag url address</Form.Label>
                <Form.Control type="text"  onChange={(e) => {
                           setPricingTableContent({...pricingTableContent,col2Flag:e.target.value})
                        }}
                />
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
                <Form.Label>Col3 top image url address</Form.Label>
                <Form.Control type="text"  onChange={(e) => {
                          setPricingTableContent({...pricingTableContent,col3TopImg:e.target.value})
                     
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
            
              <Form.Group controlId="">
                <Form.Label>Col3 bottom flag url address</Form.Label>
                <Form.Control type="text" placeholder="Enter persona" onChange={(e) => {
                          setPricingTableContent({...pricingTableContent,col3Flag:e.target.value})
                        }}
                />
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
                <PricingTable1Compopnent 
                selectedColor={selectedColor}
                col1Heading={pricingTableContent.col1Heading}
                col1TopImg={pricingTableContent.col1TopImg}
                col1Row1={pricingTableContent.col1Row1}
                col1Row2={pricingTableContent.col1Row2}
                col1Row3={pricingTableContent.col1Row3}
                col1Flag={pricingTableContent.col1Flag}
                col2Heading={pricingTableContent.col2Heading}
                col2TopImg={pricingTableContent.col2TopImg}
                col2Row1={pricingTableContent.col2Row1}
                col2Row2={pricingTableContent.col2Row2}
                col2Row3={pricingTableContent.col2Row3}
                col2Flag={pricingTableContent.col2Flag}
                col3Heading={pricingTableContent.col3Heading}
                col3TopImg={pricingTableContent.col3TopImg}
                col3Row1={pricingTableContent.col3Row1}
                col3Row2={pricingTableContent.col3Row2}
                col3Row3={pricingTableContent.col3Row3}
                col3Flag={pricingTableContent.col3Flag}
                
                /> : null  
                }
              
              </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
