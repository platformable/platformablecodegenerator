import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import SummaryBlockquoteComponent from "../components/summaryBlockquoteComponent"
import CopyToClipboardBtn from "../components/CopyToClipboardBtn"
import insetBox2Img from "../../static/previewThumbnails/insetBox2Thumbnail.png"
import BlogComponentsErrorMessage from "../components/blogComponentsErrorMessage"
import SEO from "../components/seo"

export default function InsetBox2() {
  const [fullContent, setFullContent] = useState(false)
  const [selectedColor, setSelectedColor] = useState("")
  const [insetBoxContent, setInsetBoxContent] = useState({
    title: "",
    subtitle: "",
    content: "",
  })

  const [preview, setPreview] = useState(false)

  const [errorMessage, setErrorMessage] = useState(false)

  useEffect(() => {
    addBorder()
  }, [])
  useEffect(() => {
    if (
      insetBoxContent.content === "" &&
      insetBoxContent.title === "" &&
      insetBoxContent.subtitle === ""
    ) {
      setPreview(false)
    }
  }, [insetBoxContent])
  const addBorder = () => {
    const allWrappers = document.querySelectorAll(".colors button")
    allWrappers.forEach(element => {
      element.addEventListener(
        "click",
        () => {
          const prevSelected = document.querySelectorAll(".colors button")
          prevSelected.forEach(selection => (selection.style.border = "0"))

          element.style.border = "5px solid #fff"
        },
        false
      )
    })
  }

  const handleClick = e => {
    e.preventDefault()
    let isContentEmpty = Object.values(insetBoxContent).some(
      items => items === ""
    )
    if (isContentEmpty || selectedColor === "") {
      setErrorMessage(true)
      setPreview(false)
    } else {
      setPreview(true)
      setErrorMessage(false)
    }
  }

  const theHtml = `  
    <div class="insetBox2 ${selectedColor}">
        <div class="insetBox2Top">
            <h3>${insetBoxContent.title || ""}</h3>
            <h4>${insetBoxContent.subtitle || ""}</h4>
        </div>
        <div class="insetBox2Bottom">
        ${insetBoxContent.content || ""}
        </div>
    </div>
    `

  const basicCode = `  
    <div class="insetBox2">
        <div class="insetBox2Top">
            <h3></h3>
            <h4></h4>
        </div>
        <div class="insetBox2Bottom">
        </div>
    </div>
    `

  const theCss = `
    /* INSET BOX  2 COMPONENT */

    .insetBox2Top {
      padding:20px;
    }
    
    .insetBox2Bottom {
      padding:20px;
    }
    .insetBox2Top h3,.insetBox2Top h4 {
      margin:none;
      line-height: 3px;
    }
  
  .insetBox2-box h3 {
    font-weight: bold;
  }
  
  .insetBox2-general-dark .insetBox2Top {
    background-color:var(--russian-violet-dark);
    color:white;
    border-top-left-radius:10px;
    border-top-right-radius:10px;
  }
  
  .insetBox2-general-dark .insetBox2Bottom {
    background-color:var(--russian-violet-light);
    color:var(--russian-violet-dark);
  
  }
  
  
  .insetBox2-bank-dark .insetBox2Top{
    background-color:var(--red-orange-dark);
      border-top-left-radius:10px;
    border-top-right-radius:10px;
  }
  
  .insetBox2-bank-dark .insetBox2Bottom{
    background-color:var(--red-orange-light);
   
  }
  

  .insetBox2-gov-dark .insetBox2Top{
    background-color:#632FAE;
     border-top-left-radius:10px;
    border-top-right-radius:10px;
    color:white;
  }
  
  .insetBox2-gov-dark .insetBox2Bottom{
  background-color:var(--og-light)
  }
  

  .insetBox2-health-dark .insetBox2Top{
    background-color:#0956FC;
       border-top-left-radius:10px;
    border-top-right-radius:10px;
    color:white;
  }
  
  .insetBox2-health-dark .insetBox2Bottom{
  background-color:var(--oh-light)
  }
  
  .insetBox2-sustain-dark .insetBox2Top {
  background-color:var(--os-dark);
       border-top-left-radius:10px;
    border-top-right-radius:10px;
  }
  .insetBox2-sustain-dark .insetBox2Bottom {
  background-color:var(--os-light);
  
  }`
  return (
    <Layout>
      <SEO title="Inset Box 2" />
      <Container className="my-5">
        <div className="row">
          <h3 className="fw-bold">Inset Box 2</h3>
        </div>
        <Row className="mb-5">
          <Col md={6}>
            <h4 className="py-3">Component preview</h4>
            <img src={insetBox2Img}></img>
          </Col>
          <Col md={6}>
            <div>
              <h4 className="py-3">How to use the component</h4>
              <video className="w-100" controls>
                <source
                  src="https://res.cloudinary.com/dsppwrq84/video/upload/v1629927283/insetBoxHowTo_cbgmj5.mov"
                  type="video/mov"
                />
                <source
                  src="https://res.cloudinary.com/dsppwrq84/video/upload/v1629927283/insetBoxHowTo_cbgmj5.mov"
                  type="video/ogg"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </Col>
        </Row>
        {/* end of div */}
        <Row>
          <Col md={6} id="left-side">
            <section id="colorButtons">
              <h4>Select color</h4>
              <div className="d-flex flex-column flex-md-row">
                <Col md={2} className="colors ">
                  <button
                    className="insetBox2-dark-oe colorBtn"
                    onClick={e => {
                      setSelectedColor("insetBox2-dark-oe")
                      setErrorMessage(false)
                    }}
                  ></button>
                </Col>
                <Col md={2} className="colors ">
                  <button
                    className="insetBox2-general-dark-btn colorBtn"
                    onClick={e => {
                      setSelectedColor("insetBox2-general-dark")
                      setErrorMessage(false)
                    }}
                  ></button>
                </Col>

                <Col md={2} className="colors ">
                  <button
                    className="insetBox2-bank-dark-btn colorBtn"
                    onClick={e => {
                      setSelectedColor("insetBox2-bank-dark")
                      setErrorMessage(false)
                    }}
                  ></button>
                </Col>

                <Col md={2} className="colors ">
                  <button
                    className="insetBox2-gov-dark-btn colorBtn"
                    onClick={e => {
                      setSelectedColor("insetBox2-gov-dark")
                      setErrorMessage(false)
                    }}
                  ></button>
                </Col>

                <Col md={2} className="colors ">
                  <button
                    className="insetBox2-health-dark-btn colorBtn"
                    onClick={e => {
                      setSelectedColor("insetBox2-health-dark")
                      setErrorMessage(false)
                    }}
                  ></button>
                </Col>

                <Col md={2} className="colors ">
                  <button
                    className="insetBox2-sustain-dark-btn colorBtn"
                    onClick={e => {
                      setSelectedColor("insetBox2-sustain-dark")
                      setErrorMessage(false)
                    }}
                  ></button>
                </Col>
              </div>
            </section>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  onChange={e => {
                    let isContentEmpty = Object.values(insetBoxContent).every(
                      items => items === ""
                    )
                    if (isContentEmpty) {
                      setPreview(false)
                    }
                    setInsetBoxContent({
                      ...insetBoxContent,
                      title: e.target.value,
                    })
                    setErrorMessage(false)
                  }}
                  className="mb-2"
                />
              </Form.Group>

              <Form.Group controlId="">
                <Form.Label>Subtitle:</Form.Label>
                <Form.Control
                  type="text"
                  onChange={e => {
                    setInsetBoxContent({
                      ...insetBoxContent,
                      subtitle: e.target.value,
                    })
                    setErrorMessage(false)
                  }}
                  className="mb-2"
                />
              </Form.Group>

              <Form.Group controlId="">
                <Form.Label>Content</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  onChange={e => {
                    setInsetBoxContent({
                      ...insetBoxContent,
                      content: e.target.value,
                    })

                    setErrorMessage(false)
                  }}
                  className="mb-2"
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                onClick={handleClick}
                className="my-5 btn-mainColor"
              >
                Get Code
              </Button>
            </Form>
          </Col>

          <Col md={6}>
            <h4>Your code & preview </h4>
            {preview && (
              <div className="d-flex justify-content-between">
                <h6 className="">Copy your code:</h6>
                <CopyToClipboardBtn theHtml={theHtml} />
              </div>
            )}

            <div id="theCode">
              {errorMessage ? (
                <BlogComponentsErrorMessage message="Please complete all the fields" />
              ) : null}
              {preview ? (
                <div className="">
                  <code
                    onClick={() => {
                      navigator.clipboard.writeText(theHtml)
                    }}
                  >
                    {/* Display the code */}
                    <pre>{theHtml}</pre>
                  </code>
                </div>
              ) : null}
            </div>
            {preview ? (
              <>
                <h6 className="fw-bold">Preview component</h6>
                <div
                  dangerouslySetInnerHTML={{ __html: theHtml }}
                  className={selectedColor}
                />
              </>
            ) : null}
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
