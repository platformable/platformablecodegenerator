import React, {useState,useEffect} from "react"
import Layout from "../components/layout"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import WBoxComponent from '../components/wBoxComponent';
import wBoxImg from '../../static/previewThumbnails/wBoxThumbnail.png'
import PreviewCodeComponent from "../components/previewCodeComponent"
import CopyToClipboardBtn from "../components/CopyToClipboardBtn"
import BlogComponentsErrorMessage from '../components/blogComponentsErrorMessage'



export default function WBox () {

    const [selectedColor,setSelectedColor] = useState('');
    const [wContent,setwContent] = useState({
     specialNote:'',
     whatAbout:'',
     whyImportant:'',

  
    })
    const [preview, setPreview] = useState(false)
    const [errorMessage, setErrorMessage] =useState(false);


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
      if(isContentEmpty || selectedColor === "") {
          setErrorMessage(true)
      } else {
        setPreview(true)
          setErrorMessage(false)
      }
    }

    const basicCode = `
    <div class="w-box ${selectedColor}">
      <h4 class="whatIsItAbout font-black">What it’s about</h4>
      <p>${wContent.whatAbout}</p>
      <h4 class="whatIsItAbout font-black">Why it’s important</h4>
      <p>${wContent.whyImportant}</p>
      <h4 class="whatIsItAbout font-black">Special Note</h4>
      <p>${wContent.specialNote}</p>
    </div>
    `
    const theHtml = `  
    <div class="w-box ${selectedColor}">
      <h4 class="whatIsItAbout font-black">What it’s about</h4>
      <p>${wContent.whatAbout}</p>
      <h4 class="whatIsItAbout font-black">Why it’s important</h4>
      <p>${wContent.whyImportant}</p>
      <h4 class="whatIsItAbout font-black">Special Note</h4>
      <p>${wContent.specialNote}</p>
    </div>
      `

      const theCss=`
/* WBOX */

.w-box {
padding:30px;
border-radius: 10px;
}

.w-box p {
  margin:20px 0;
}


.w-box-general-dark-btn {
  background-color:var(--russian-violet-dark);

}
.w-box-general-dark-bg {
  color:var(--russian-violet-dark);
  background-color:var(--russian-violet-light);

}
.w-box-general-dark-bg h4 {
  background-color:var(--russian-violet-dark);
  color:white;
  display:inline;
  padding:3px 10px;
  margin-bottom:10px !important;
  font-weight: bold;
}

.w-box-ob-dark-btn {
  background-color:var(--red-orange-dark);
}
.w-box-ob-bg {
  background-color:var(--red-orange-light);
  color:var(--russian-violet-dark);
}

.w-box-ob-bg h4 {
  background-color:var(--red-orange-dark);
  color:white;
  display:inline;
  padding:3px 10px;
  margin-bottom:10px !important;
  font-weight: bold;
}

.w-box-og-dark-btn {
  background-color:var(--og-dark);
}
.w-box-og-bg {
  background-color:var(--og-light);
  color:var(--russian-violet-dark);
}

.w-box-og-bg h4 {
  background-color:var(--og-dark);
  color:white;
  display:inline;
  padding:3px 10px;
  margin-bottom:10px !important;
  font-weight: bold;
}

.w-box-oh-dark-btn {
  background-color:var(--oh-dark);
}
.w-box-oh-bg {
  background-color:var(--oh-light);
  color:var(--russian-violet-dark);
}

.w-box-oh-bg h4 {
  background-color:var(--oh-dark);
  color:white;
  display:inline;
  padding:3px 10px;
  font-weight: bold;
  margin-bottom:10px !important;
}

.w-box-os-dark-btn {
  background-color:var(--os-dark);
}
.w-box-os-bg {
  background-color:var(--os-light);
  color:var(--russian-violet-dark);
}

.w-box-os-bg h4 {
  background-color:var(--os-dark);
  color:white;
  display:inline;
  padding:3px 10px;
  font-weight: bold;
  margin-bottom:10px !important;
}
      `


  return (
    <Layout>
      <Container className="my-5">
      <div className="row">
        <h3 className="fw-bold">W Box</h3>
          <p>Example Component </p>
          <PreviewCodeComponent basicCode={basicCode} theCss={theCss} img={wBoxImg}/>
        </div>
        <Row>
          <Col md={6} id="left-side">
              <section id="colorButtons">
                  <h4>Select color</h4>
              <Row>
                  <Col md={2} className="colors ">
                      <button className="w-box-general-dark-btn colorBtn"
                  onClick={(e) => {
                    setSelectedColor('w-box-general-dark-bg')
                    setPreview(false)
                        setErrorMessage(false)
                
                  }}
                  ></button></Col>
    
                  <Col md={2} className="colors ">
                      <button className="w-box-ob-dark-btn colorBtn"
                      onClick={(e) => {
                        setSelectedColor('w-box-ob-bg')
                        setPreview(false)
                        setErrorMessage(false)
                    
                      }}
                      ></button></Col>
          
                  <Col md={2} className="colors ">
                      <button className="w-box-og-dark-btn colorBtn"
                      onClick={(e) => {
                        setSelectedColor('w-box-og-bg')
                        setPreview(false)
                        setErrorMessage(false)
                      }}
                  ></button></Col>

                  <Col md={2} className="colors ">
                      <button className="w-box-oh-dark-btn colorBtn"
                      onClick={(e) => {
                        setSelectedColor('w-box-oh-bg')
                        setPreview(false)
                        setErrorMessage(false)
                    
                      }}>
                          </button></Col>
  
                  <Col md={2} className="colors ">
                      <button className="w-box-os-dark-btn colorBtn"
                      onClick={(e) => {
                        setSelectedColor('w-box-os-bg')
                        setPreview(false)
                        setErrorMessage(false)
                    
                      }}>
                          </button></Col>
      
                  
               
              </Row>
              </section>
            <Form>

              <Form.Group controlId="">
                <Form.Label>What it’s about:</Form.Label>
                <Form.Control as="textarea" rows={4}  onChange={(e)=>{
                    setwContent({...wContent,whatAbout:e.target.value});
                    setPreview(false)
                    setErrorMessage(false)
                }}/>
              </Form.Group>

              <Form.Group controlId="">
                <Form.Label>Why it’s important:</Form.Label>
                <Form.Control as="textarea" rows={4}  onChange={(e)=>{
                    setwContent({...wContent,whyImportant:e.target.value});
                    setPreview(false)
                    setErrorMessage(false)
                }}/>
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Special Note:</Form.Label>
                <Form.Control as="textarea" rows={4}  onChange={(e) => {
                          setwContent({...wContent,specialNote:e.target.value});
                          setPreview(false)
                          setErrorMessage(false)
                        }}
                />
              </Form.Group>
    

              <Button variant="primary" type="submit" onClick={handleClick} className="my-5 btn-mainColor">
                Get Code
              </Button>
            </Form>
          </Col>
          <Col md={6} id="right-side">
       {preview && <div className="d-flex justify-content-between"> 
            <h6 className="">Copy your code:</h6>
            <CopyToClipboardBtn theHtml={theHtml} />
          </div> }  

              <div id="theCode">
                  {errorMessage ? <BlogComponentsErrorMessage message="Please complete all the fields"/> : null}
                  {preview ? 
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


        {preview ? (
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
