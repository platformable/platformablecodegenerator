import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import InsetBlockquoteComponent from "../components/insetBlockquoteComponent"
import insetBoxImg from "../../static/previewThumbnails/insetBoxThumbnail.png"
import CopyToClipboardBtn from "../components/CopyToClipboardBtn"
import PreviewCodeComponent from "../components/previewCodeComponent"
import BlogComponentsErrorMessage from "../components/blogComponentsErrorMessage"
import SEO from "../components/seo"

export default function InsetQuote1() {
  /*  const [fullContent, setFullContent] = useState(false) */
  const [selectedColor, setSelectedColor] = useState("")
  const [blockquoteContent, setBlockquoteContent] = useState({
    content: "",
  })

  const [preview, setPreview] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)
  const errorText = "Some data is missing"

  useEffect(() => {
    addBorder()
  }, [])

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
    let isContentEmpty = Object.values(blockquoteContent).some(
      items => items === ""
    )
    if (isContentEmpty || selectedColor === "") {
      setErrorMessage(true)
    } else {
      setPreview(true)
      setErrorMessage(false)
    }
  }

  const theHtml = `  
    <div class="text-white ${selectedColor}">
      <strong>
        <i>${blockquoteContent.content}</i>
      </strong>
    </div>

    `
  const basicCode = `
    <div class="text-white ${selectedColor}">
      <strong>
        <i>${blockquoteContent.content}</i>
      </strong>
    </div>
    `

  const theCss = `
/* INSET BOX */

.inset-box-general-light {
  background-color:var(--sunglow-dark);
  padding:5px 10px;
  border-radius:10px;
  margin:10px 0;
}
.inset-box-bank-light {
  background-color:#FBAC8F;
  padding:5px 10px;
  border-radius:10px;
  margin:10px 0;
}
.inset-box-gov-light {
  background-color:#D8C1FB;
  padding:5px 10px;
  border-radius:10px;
  margin:10px 0;
}
.inset-box-health-light {
  background-color:#87ACFC;
  padding:5px 10px;
  border-radius:10px;
  margin:10px 0;
}
.inset-box-sustain-light {
  background-color:#e3f9f2;
  padding:5px 10px;
  border-radius:10px;
  margin:10px 0;
}

.code-container  {
  color:black;
  font-size:12px;
  background-color:#f4f4f4;
  padding:10px;
  border-radius:10px;
  }
  
  `

  return (
    <Layout>
      <SEO title="Inset Box 1" />
      <Container className="my-5">
        <div>
          <h3 className="fw-bold">Inset Box</h3>
        </div>
        <Row className="mb-5">
          <Col md={6}>
            <h4 className="py-3">Component preview</h4>
            <img src={insetBoxImg}></img>
          </Col>
          <Col md={6}>
            <div>
              <h4 className="py-3">How to use the component</h4>
              <video className="w-100" width="720" controls>
                <source
                  src="https://res.cloudinary.com/dsppwrq84/video/upload/v1629927501/personaHowTo_w0vvuy.mov"
                  type="video/mov"
                />
                <source
                  src="https://res.cloudinary.com/dsppwrq84/video/upload/v1629927501/personaHowTo_w0vvuy.mov"
                  type="video/ogg"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={6} id="left-side">
            <section id="colorButtons">
              <h4>Select color</h4>
              <div className="d-flex flex-column flex-md-row">
                <Col md={2} className="colors ">
                  <button
                    className="inset-box-oe-light colorBtn"
                    onClick={e => {
                      setSelectedColor("inset-box-oe-light")
                      setErrorMessage(false)
                    }}
                  ></button>
                </Col>
                <Col md={2} className="colors ">
                  <button
                    className="inset-box-general-light colorBtn"
                    onClick={e => {
                      setSelectedColor("inset-box-general-light")
                      setErrorMessage(false)
                    }}
                  ></button>
                </Col>

                <Col md={2} className="colors ">
                  <button
                    className="inset-box-bank-light colorBtn"
                    onClick={e => {
                      setSelectedColor("inset-box-bank-light")
                      setErrorMessage(false)
                    }}
                  ></button>
                </Col>

                <Col md={2} className="colors ">
                  <button
                    className="inset-box-gov-light colorBtn"
                    onClick={e => {
                      setSelectedColor("inset-box-gov-light")
                      setErrorMessage(false)
                    }}
                  ></button>
                </Col>

                <Col md={2} className="colors ">
                  <button
                    className="inset-box-health-light colorBtn"
                    onClick={e => {
                      setSelectedColor("inset-box-health-light")
                      setErrorMessage(false)
                    }}
                  ></button>
                </Col>

                <Col md={2} className="colors ">
                  <button
                    className="inset-box-sustain-light colorBtn"
                    onClick={e => {
                      setSelectedColor("inset-box-sustain-light")
                      setErrorMessage(false)
                    }}
                  ></button>
                </Col>
              </div>
            </section>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Content:</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  onChange={e => {
                    if (e.target.value === "") {
                      setPreview(false)
                    }
                    setErrorMessage(false)
                    setBlockquoteContent({
                      ...blockquoteContent,
                      content: e.target.value,
                    })
                  }}
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

          <Col md={6} id="right-side">
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
                <InsetBlockquoteComponent
                  selectedColor={selectedColor}
                  content={blockquoteContent.content}
                />
              ) : null}
            </div>
            {preview ? (
              <>
                {" "}
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
