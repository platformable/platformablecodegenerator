import React, {useState,useEffect} from "react"
import Layout from "../components/layout"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import SummaryBlockquoteComponent from '../components/summaryBlockquoteComponent';
import CopyToClipboardBtn from "../components/CopyToClipboardBtn"
import summaryBoxImg from '../../static/previewThumbnails/summaryBoxThumbnail.png'

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

    const theHtml = `  
    <div class="summary-box text-white ${selectedColor}">
    <h3>Who should read this:</h3> ${blockquoteContent.whoShouldReadThis} <br><br>
    <h3>What it’s about:</h3> ${blockquoteContent.whatAbout}<br><br>
    <h3>Why it’s important:</h3> ${blockquoteContent.whyImportant}<br>
    </div>
    `

    const basicCode = `  
    <div class="summary-box text-white">
    <h3>Who should read this:</h3><br><br>
    <h3>What it’s about:</h3><br><br>
    <h3>Why it’s important:</h3><br>
    </div>
    `

    const theCss =`
/* SUMMARY BOX COMPONENT */

.summary-box h3 {
  font-weight: bold;
}
.summary-box-general-dark {
  background-color:var(--russian-violet-dark);
  padding:20px;
  border-radius: 10px;
}
.summary-box-bank-dark {
  background-color:var(--red-orange-dark);
  padding:20px;
  border-radius: 10px;
}
.summary-box-gov-dark {
  background-color:#632FAE;
  padding:20px;
  border-radius: 10px;
}
.summary-box-health-dark {
  background-color:#0956FC;
  padding:20px;
  border-radius: 10px;
}
.summary-box-sustain-dark {
  border-radius: 10px;
  background-color:#0CE6A3;
  padding:20px;
}
    `
  return (
    <Layout>
      <Container className="my-5">
      <div className="row">
        <h3 className="fw-bold">Summary Box</h3>
          <p>Component Example</p>

            {/* The ul represent the tabs */}
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#home"
                type="button"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                Preview
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                HTML
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#css"
                type="button"
                role="tab"
                aria-controls="css"
                aria-selected="false"
              >
                CSS
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#howto"
                type="button"
                role="tab"
                aria-controls="css"
                aria-selected="false"
              >
                How to
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <div className="component-example mt-2 mb-5 d-flex justify-center align-center">
                <div className="component-example-img">
                  <img src={summaryBoxImg} alt="" className="img-thumbnail" />
                </div>
              </div>
            </div>

            <div
              class="tab-pane fade"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <pre>{basicCode}</pre>
            </div>
            <div
              class="tab-pane fade"
              id="css"
              role="tabpanel"
              aria-labelledby="css-tab"
            >
              <pre>{theCss}</pre>
            </div>
            <div
              class="tab-pane fade"
              id="howto"
              role="tabpanel"
              aria-labelledby="css-tab"
            >
                <div className="howTo d-flex justify-content-center align-items-center py-5 bg-light my-5 rounded">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/zd0_S_FPzKg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </div>
            
          </div>

       
        </div> 
        {/* end of div */}
        <Row>
          <Col md={6} id="left-side">
              <section id="colorButtons">
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
    

              <Button variant="primary" type="submit" onClick={handleClick} className="my-5 btn-mainColor">
                Get Code
              </Button>
            </Form>
          </Col>

          <Col md={6} id="right-side">
              <div className="d-flex justify-content-between"> 
            <h6 className="">Copy your code:</h6>
            <CopyToClipboardBtn theHtml={theHtml} />
          </div>
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
