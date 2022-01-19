import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import SummaryBlockquoteComponent from "../components/summaryBlockquoteComponent"
import CopyToClipboardBtn from "../components/CopyToClipboardBtn"
import summaryBoxImg from "../../static/previewThumbnails/summaryBoxThumbnail.png"
import BlogComponentsErrorMessage from "../components/blogComponentsErrorMessage"
import SEO from "../components/seo"
import ColorsButtons from "../components/colorsButtons"

export default function SummaryQuote() {
  const [fullContent, setFullContent] = useState(false)
  const [selectedColor, setSelectedColor] = useState("")
  const [blockquoteContent, setBlockquoteContent] = useState({
    whoShouldReadThis: "",
    whatAbout: "",
    whyImportant: "",
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
    <div class="summary-box text-white ${selectedColor}">
    <h3>Who should read this:</h3> ${blockquoteContent.whoShouldReadThis} <br><br>
    <h3>What it’s about:</h3> ${blockquoteContent.whatAbout}<br><br>
    <h3>Why it’s important:</h3> ${blockquoteContent.whyImportant}<br>
    </div>
    `

  const basicCode = `  
    <div class="summary-box text-white ${selectedColor}">
    <h3>Who should read this:</h3> ${blockquoteContent.whoShouldReadThis} <br><br>
    <h3>What it’s about:</h3> ${blockquoteContent.whatAbout}<br><br>
    <h3>Why it’s important:</h3> ${blockquoteContent.whyImportant}<br>
    </div>
    `

  const theCss = `
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
      <SEO title="Summary Box" />
      <Container className="my-5">
        <div>
          <h3 className="fw-bold">Summary Box</h3>
        </div>
        <Row className="mb-5">
          <Col md={6}>
            <h4 className="py-3">Component preview</h4>
            <img src={summaryBoxImg}></img>
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
                    className="summary-box-oe-dark colorBtn"
                    onClick={e => {
                      setSelectedColor("summary-box-oe-dark")
                      setErrorMessage(false)
                    }}
                  ></button>
                </Col>
                <Col md={2} className="colors ">
                  <button
                    className="summary-box-general-dark colorBtn"
                    onClick={e => {
                      setSelectedColor("summary-box-general-dark")
                      setErrorMessage(false)
                    }}
                  ></button>
                </Col>

                <Col md={2} className="colors ">
                  <button
                    className="summary-box-bank-dark colorBtn"
                    onClick={e => {
                      setSelectedColor("summary-box-bank-dark")
                      setErrorMessage(false)
                    }}
                  ></button>
                </Col>

                <Col md={2} className="colors ">
                  <button
                    className="summary-box-gov-dark colorBtn"
                    onClick={e => {
                      setSelectedColor("summary-box-gov-dark")
                      setErrorMessage(false)
                    }}
                  ></button>
                </Col>

                <Col md={2} className="colors ">
                  <button
                    className="summary-box-health-dark colorBtn"
                    onClick={e => {
                      setSelectedColor("summary-box-health-dark")
                      setErrorMessage(false)
                    }}
                  ></button>
                </Col>

                <Col md={2} className="colors ">
                  <button
                    className="summary-box-sustain-dark colorBtn"
                    onClick={e => {
                      setSelectedColor("summary-box-sustain-dark")
                      setErrorMessage(false)
                    }}
                  ></button>
                </Col>
              </div>
            </section>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Who should read this:</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  onChange={e => {
                    setBlockquoteContent({
                      ...blockquoteContent,
                      whoShouldReadThis: e.target.value,
                    })
                    setErrorMessage(false)
                  }}
                />
              </Form.Group>

              <Form.Group controlId="">
                <Form.Label>What it’s about:</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  onChange={e => {
                    setBlockquoteContent({
                      ...blockquoteContent,
                      whatAbout: e.target.value,
                    })
                    setErrorMessage(false)
                  }}
                />
              </Form.Group>

              <Form.Group controlId="">
                <Form.Label>Why it’s important:</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  onChange={e => {
                    setBlockquoteContent({
                      ...blockquoteContent,
                      whyImportant: e.target.value,
                    })
                    setErrorMessage(false)
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
                <SummaryBlockquoteComponent
                  selectedColor={selectedColor}
                  whoShouldReadThis={blockquoteContent.whoShouldReadThis}
                  whatAbout={blockquoteContent.whatAbout}
                  whyImportant={blockquoteContent.whyImportant}
                />
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

        {/* {preview ? (
          <Row>
            <Col md={6}>
              <h6 className="fw-bold">Preview component</h6>
              <div
                dangerouslySetInnerHTML={{ __html: theHtml }}
                className={selectedColor}
              />
            </Col>
          </Row>
        ) : null} */}
      </Container>
    </Layout>
  )
}
