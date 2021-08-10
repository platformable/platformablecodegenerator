import React, {useState,useEffect} from "react"
import Layout from "../components/layout"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import LargeQuoteComponent from '../components/LargeQuoteComponent';
import largeQuoteImg from '../../static/previewThumbnails/largeQuoteThumbnail.png'
import CopyToClipboardBtn from "../components/CopyToClipboardBtn"
import PreviewCodeComponent from "../components/previewCodeComponent"
import BlogComponentsErrorMessage from '../components/blogComponentsErrorMessage'
import SEO from "../components/seo";

export default function LargeQuote () {
 
    const [selectedColor,setSelectedColor] = useState('');
    const [quoteContent,setQuoteContent] = useState({
     quote:'',
     author:'',
     secondLine:''
    })
    const [preview, setPreview] = useState(false)
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
      let isContentEmpty = Object.values(quoteContent).some(items => items === '');
      if(isContentEmpty || selectedColor === "") {
          setErrorMessage(true)
      } else {
        setPreview(true)
          setErrorMessage(false)
      }
    }

    const basicCode=`
    <div class="large-quote ${selectedColor}">
      <p>${quoteContent.quote}</p>
      <div class="author"><h3 class="font-black">${quoteContent.author}</h3></div>
      <div class="second-line">${quoteContent.secondLine}</div>
    </div>`
    const theHtml = `  
    <div class="large-quote ${selectedColor}">
      <p>${quoteContent.quote}</p>
      <div class="author"><h3 class="font-black">${quoteContent.author}</h3></div>
      <div class="second-line">${quoteContent.secondLine}</div>
    </div>
      `

    const theCss= `
/* LARGE QUOTE */

.large-quote {
  margin:20px 0;
  padding:5px 10px;
}
.large-quote p {
  font-style:italic;
  margin:10px 0;
  color:var(--russian-violet-dark);
}

.large-quote .author,.large-quote .second-line {
  display:flex;
  justify-content:flex-end;
}

.large-quote .author {
font-weight:bold;
}

.dark-purple-btn {
  background-color: var(--russian-violet-dark);
}

.LargeQuote-general-dark-btn {
  background-color:var(--russian-violet-dark);

}
.LargeQuote-general-dark-bg {
  border-left:2px solid var(--russian-violet-dark);
  color:var(--russian-violet-dark);
}

.ob-dark-btn {
  background-color:var(--ob-dark)
}

.LargeQuote-ob-bg {
  border-left:2px solid var(--ob-dark);
  color:var(--russian-violet-dark);
}
.LargeQuote-ob-bg h3 {
  color:var(--ob-dark);
  font-weight: bold;
}

.og-dark-btn {
  background-color: var(--og-dark);
}

.LargeQuote-og-bg {
  border-left:2px solid var(--og-dark);
  color:var(--russian-violet-dark);
}
.LargeQuote-og-bg h3 {
  color:var(--og-dark);
  font-weight: bold;
}

.oh-dark-btn {
  background-color:var(--oh-dark)
}

.LargeQuote-oh-bg {
  border-left:2px solid var(--oh-dark);
  color:var(--russian-violet-dark);
}
.LargeQuote-oh-bg h3 {
  color:var(--oh-dark);
  font-weight: bold;
}

.os-dark-btn {
  background-color:var(--os-dark);
}

.LargeQuote-os-bg {
  border-left:2px solid var(--os-dark);
  color:var(--russian-violet-dark);
}
.LargeQuote-os-bg h3 {
  color:var(--os-dark);
  font-weight: bold;
}
`


  return (
    <Layout>
      <SEO title="Large quote"/>
      <Container className="my-5">
      <div className="row">
        <h3 className="fw-bold">Large Quote</h3>
          <p>Component Example</p>
          <PreviewCodeComponent basicCode={basicCode} theCss={theCss} img={largeQuoteImg}/>
        </div>
        <Row>
          <Col md={6} id="left-side">
              <section id="colorButtons">
                  <h4>Select color</h4>
              <Row>
                  <Col md={2} className="colors ">
                      <button className="dark-purple-btn colorBtn"
                  onClick={(e) => {
                    setSelectedColor('LargeQuote-general-dark-bg')
                    setPreview(false)
                    setErrorMessage(false)
                
                  }}
                  ></button></Col>
    
                  <Col md={2} className="colors ">
                      <button className="ob-dark-btn colorBtn"
                      onClick={(e) => {
                        setSelectedColor('LargeQuote-ob-bg')
                        setPreview(false)
                        setErrorMessage(false)
                    
                      }}
                      ></button></Col>
          
                  <Col md={2} className="colors ">
                      <button className="og-dark-btn colorBtn"
                      onClick={(e) => {
                        setSelectedColor('LargeQuote-og-bg')
                        setPreview(false)
                        setErrorMessage(false)
                      }}
                  ></button></Col>

                  <Col md={2} className="colors ">
                      <button className="oh-dark-btn colorBtn"
                      onClick={(e) => {
                        setSelectedColor('LargeQuote-oh-bg')
                    
                      }}>
                          </button></Col>
  
                  <Col md={2} className="colors ">
                      <button className="os-dark-btn colorBtn"
                      onClick={(e) => {
                        setSelectedColor('LargeQuote-os-bg')
                        setPreview(false)
                        setErrorMessage(false)
                      }}>
                          </button></Col>
      
                  
               
              </Row>
              </section>
            <Form>

              <Form.Group controlId="">
                <Form.Label>Quote:</Form.Label>
                <Form.Control as="textarea" rows={4}  onChange={(e)=>{
                    setQuoteContent({...quoteContent,quote:e.target.value});
                    setPreview(false)
                    setErrorMessage(false)
                }}/>
              </Form.Group>

              <Form.Group controlId="">
                <Form.Label>Author:</Form.Label>
                <Form.Control as="textarea" rows={4}  onChange={(e)=>{
                    setQuoteContent({...quoteContent,author:e.target.value});
                    setPreview(false)
                    setErrorMessage(false)
                }}/>
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Second Line</Form.Label>
                <Form.Control as="textarea" rows={4}  onChange={(e) => {
                          setQuoteContent({...quoteContent,secondLine:e.target.value});
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
            {preview && 
            <div className="d-flex justify-content-between"> 
            <h6 className="">Copy your code:</h6>
            <CopyToClipboardBtn theHtml={theHtml} />
          </div>
          }
          
              <div id="theCode">
              {errorMessage ? <BlogComponentsErrorMessage message="Please complete all the fields"/> : null}
                  {preview ? 
                <LargeQuoteComponent 
                selectedColor={selectedColor}
                quote={quoteContent.quote}
                author={quoteContent.author}
                secondLine={quoteContent.secondLine}

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
