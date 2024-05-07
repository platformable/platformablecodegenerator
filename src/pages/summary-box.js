import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import SummaryBlockquoteComponent from "../components/summaryBlockquoteComponent"
import CopyToClipboardBtn from "../components/CopyToClipboardBtn"
import summaryBoxImg from "../../static/previewThumbnails/summaryBoxThumbnail.png"
import BlogComponentsErrorMessage from "../components/blogComponentsErrorMessage"
import SEO from "../components/seo"
import HeaderComponent from '../components/HeaderComponent'
import SingleColorButton from '../components/SingleColorButton'
import colorsForComponents from '../components/colorsForComponents'
export default function SummaryQuote() {
  const [selectedColor, setSelectedColor] = useState("")
  const [blockquoteContent, setBlockquoteContent] = useState({
    whoShouldReadThis: "",
    whatAbout: "",
    whyImportant: "",
  })

  const [preview, setPreview] = useState(false)

  const [errorMessage, setErrorMessage] = useState(false)
  const { summaryBoxColors } = colorsForComponents()

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
    <h3>Who should read this:</h3> <p>${blockquoteContent.whoShouldReadThis}</p>
    <h3>What it’s about:</h3> <p>${blockquoteContent.whatAbout}</p>
    <h3>Why it’s important:</h3> <p>${blockquoteContent.whyImportant}</p>
    </div>
    `
  return (
    <Layout>
      <SEO title="Summary Box" />
      <Container className="my-5">
        <HeaderComponent componentName="Summary Box" image={summaryBoxImg} video={"https://res.cloudinary.com/dsppwrq84/video/upload/v1629927501/personaHowTo_w0vvuy.mov"} />
        <Row>
          <Col md={6} id="left-side">
            <section id="colorButtons">
              <h4>Select color</h4>
              <div className="d-flex flex-column flex-md-row">
                {summaryBoxColors.map((color, index) => <SingleColorButton key={index} colorClass={color} onSelectColor={() => {
                  setSelectedColor(color)
                  setErrorMessage(false)
                }} />)}
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
      </Container>
    </Layout>
  )
}
