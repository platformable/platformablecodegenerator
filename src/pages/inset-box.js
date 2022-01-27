import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import InsetBlockquoteComponent from "../components/insetBlockquoteComponent"
import insetBoxImg from "../../static/previewThumbnails/insetBoxThumbnail.png"
import CopyToClipboardBtn from "../components/CopyToClipboardBtn"
import BlogComponentsErrorMessage from "../components/blogComponentsErrorMessage"
import HeaderComponent from '../components/HeaderComponent'
import SEO from "../components/seo"
import SingleColorButton from '../components/SingleColorButton'
import colorFunction from "../components/colorsForComponents.js";
export default function InsetQuote1() {
  const [selectedColor, setSelectedColor] = useState("")
  const [blockquoteContent, setBlockquoteContent] = useState({
    content: "",
  })
  const { insetBoxColors } = colorFunction();
  const [preview, setPreview] = useState(false)
  // const insetBoxColors = ["inset-box-oe-light", "inset-box-general-light", "inset-box-bank-light", "inset-box-gov-light", "inset-box-health-light", "inset-box-sustain-light"]

  const [errorMessage, setErrorMessage] = useState(false)
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
  return (
    <Layout>
      <SEO title="Inset Box 1" />
      <Container className="my-5">
        <HeaderComponent componentName="Inset Box" image={insetBoxImg} video="https://res.cloudinary.com/dsppwrq84/video/upload/v1629927501/personaHowTo_w0vvuy.mov" />
        <Row>
          <Col md={6} id="left-side">
            <section id="colorButtons">
              <h4>Select color</h4>
              <div className="d-flex flex-column flex-md-row">
                {insetBoxColors.map((color, index) => <SingleColorButton key={index} colorClass={color} onSelectColor={() => {
                  setSelectedColor(color)
                  setErrorMessage(false)
                }} />)}
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
