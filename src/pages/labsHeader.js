import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import labsPostHeader from "../../static/previewThumbnails/labsPostThumbnail.png"
import BlogComponentsErrorMessage from "../components/blogComponentsErrorMessage"
import CopyToClipboardBtn from "../components/CopyToClipboardBtn"
import HeaderComponent from '../components/HeaderComponent'
import Loadable from "react-loadable"
import SEO from "../components/seo"

import SingleColorButton from '../components/SingleColorButton'
import colorFunction from "../components/colorsForComponents.js";
const { lasbColors } = colorFunction();

const LoadableComponent = Loadable({
  loader: () => import("../components/RichEditorComponent"),
  loading: "Loading",
})

const LabsHeader = () => {
  const [preview, setPreview] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)
  const [content, setContent] = useState({
    content: "",
  })
  const [selectedColor, setSelectedColor] = useState("")
  useEffect(() => {
    if (content.content === "") {
      setPreview(false)
    }
  }, [content])

  console.log("selectedcolor", selectedColor)
  const html = `
    <div class="labs-top-bar-posts-header ${selectedColor}">
      <div class="labs-top-bar-posts-header-img">
      <img src="https://res.cloudinary.com/platform1/image/upload/v1623947770/Labs_c8c4b81e63.png" alt="">
      </div>
      <div class="labs-top-bar-posts-text">
        <h5 className="font-weight-bold text-white text-center flex justify-center bg-primary">${content.content}</h5>
      </div>
    </div>
    `
  const handleClick = e => {
    e.preventDefault()
    let isContentEmpty = Object.values(content).some(items => items === "")
    if (isContentEmpty) {
      setErrorMessage(true)
    } else {
      setPreview(true)
      setErrorMessage(false)
    }
  }

  const handleLabsBlogContent = data => {
    setErrorMessage(false)
    setContent({...content,content:data})
  }



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

  useEffect(() => {
    addBorder()
  }, [])


  return (
    <Layout>
      <SEO title="Labs Header" />
      <Container className="my-5">
        <HeaderComponent componentName="Platformable Labs Post Header" image={labsPostHeader} video={"https://res.cloudinary.com/dsppwrq84/video/upload/v1629927501/personaHowTo_w0vvuy.mov"}/>
        <Row>
          <Col md={6} id="left-side">

          <section id="colorButtons">
              <h4>Select color</h4>
              <div className="d-flex flex-column flex-md-row">
                {lasbColors.map((color, index) => <SingleColorButton key={index} colorClass={color.class} onSelectColor={() => {
                  setSelectedColor(color.color)
                  setErrorMessage(false)
                }} />)}
              </div>
            </section>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Content:</Form.Label>
                {/* <Form.Control
                  as="textarea"
                  rows={4}
                  onChange={e => {
                    setErrorMessage(false)
                    setContent({
                      ...content,
                      content: e.target.value,
                    })
                  }}
                /> */}
                <LoadableComponent
              handleLabsBlogContent={handleLabsBlogContent}
              setPreview={setPreview}
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
            <div id="theCode">
              {errorMessage ? (
                <BlogComponentsErrorMessage message="Please complete all the fields" />
              ) : null}
            </div>
            {preview && (
              <div className="d-flex justify-content-between">
                <h6 className="">Copy your code:</h6>
                <CopyToClipboardBtn theHtml={html} />
              </div>
            )}
            {preview ? (
              <div className="">
                <code
                  onClick={() => {
                    navigator.clipboard.writeText(html)
                  }}
                >
                  <pre>{html}</pre>
                </code>
              </div>
            ) : null}

            {preview ? (
              <>
                {" "}
                <h6 className="fw-bold">Preview component</h6>
                <div dangerouslySetInnerHTML={{ __html: html }} />
              </>
            ) : null}
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default LabsHeader
