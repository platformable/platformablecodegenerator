import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import CopyToClipboardBtn from "../components/CopyToClipboardBtn"
import insetBox2Img from "../../static/previewThumbnails/insetBox2Thumbnail.png"
import BlogComponentsErrorMessage from "../components/blogComponentsErrorMessage"
import HeaderComponent from '../components/HeaderComponent'
import SEO from "../components/seo"
import SingleColorButton from '../components/SingleColorButton'
import colorFunction from "../components/colorsForComponents.js";
export default function InsetBox2() {
  const [selectedColor, setSelectedColor] = useState("")
  const [insetBoxContent, setInsetBoxContent] = useState({
    title: "",
    subtitle: "",
    content: "",
  })
  const { insetBox2Colors } = colorFunction();
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
  return (
    <Layout>
      <SEO title="Inset Box 2" />
      <Container className="my-5">
        <HeaderComponent componentName="Inset Box 2" image={insetBox2Img} video="https://res.cloudinary.com/dsppwrq84/video/upload/v1629927283/insetBoxHowTo_cbgmj5.mov" />
        <Row>
          <Col md={6} id="left-side">
            <section id="colorButtons">
              <h4>Select color</h4>
              <div className="d-flex flex-column flex-md-row">
                {insetBox2Colors.map((color, index) => <SingleColorButton key={index} colorClass={color.class} onSelectColor={() => {
                  setSelectedColor(color.color)
                  setErrorMessage(false)
                }} />)}
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
