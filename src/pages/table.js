import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import tableImg from "../../static/previewThumbnails/tableThumbnail.png"
import Loadable from "react-loadable"
import SEO from "../components/seo"
import BlogComponentsErrorMessage from "../components/blogComponentsErrorMessage"
import CopyToClipboardBtn from "../components/CopyToClipboardBtn"

const LoadableComponent = Loadable({
  loader: () => import("../components/RichEditorComponent"),
  loading: "Loading",
})

export default function Table() {
  const [fullContent, setFullContent] = useState(false)
  const [selectedColor, setSelectedColor] = useState("")
  const [content, setContent] = useState("")
  const [globalWindow, setGlobalWindow] = useState(false)

  useEffect(() => {
    addBorder()
  }, [])
  useEffect(() => {
    if (content === "") {
      setPreview(false)
    }
  }, [content])

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
    if (typeof window !== "undefined") {
      setGlobalWindow(true)
    }
  }, [])

  const [preview, setPreview] = useState(false)

  const [inputsTitle, setInputsTitle] = useState({
    heading: false,
    rows: false,
  })

  const [errorMessage, setErrorMessage] = useState(false)
  const errorText = "Some data is missing"

  const handleLabsBlogContent = data => {
    setErrorMessage(false)
    // setPreview(false)
    setContent(
      data.replace(
        `<figure class="table">`,
        `<figure class="${selectedColor}">`
      )
    )
  }

  const handleClick = e => {
    e.preventDefault()
    if (!selectedColor || !content) {
      setErrorMessage(true)
    } else {
      setPreview(true)
      const newContent = content.replace(
        `<figure class="table">`,
        `<figure class="${selectedColor}">`
      )
      setContent(newContent)
    }
  }

  return (
    <Layout>
      <SEO title="Table" />
      <Container className="my-5">
        <div className="row">
          <h3 className="fw-bold">Table Component</h3>
        </div>
        <Row className="mb-5">
          <Col md={6}>
            <h4 className="py-3">Component preview</h4>
            <img src={tableImg}></img>
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
              <h4 className="my-3">Select color</h4>
              <div className="d-flex flex-column flex-md-row">
                <Col md={2} className="colors ">
                  <button
                    className="dynamicTable-oe-dark colorBtn"
                    onClick={e => {
                      if (content) {
                        setSelectedColor("dynamicTable-oe")
                        const newContent = content.replace(
                          /".*">/,
                          `"dynamicTable-oe">`
                        )
                        setContent(newContent)
                      } else {
                        setSelectedColor("dynamicTable-oe")
                      }
                    }}
                  ></button>
                </Col>
                <Col md={2} className="colors ">
                  <button
                    className="dynamicTable-general-dark colorBtn"
                    onClick={e => {
                      if (content) {
                        setSelectedColor("dynamicTable")
                        const newContent = content.replace(
                          /".*">/,
                          `"dynamicTable">`
                        )
                        setContent(newContent)
                      } else {
                        setSelectedColor("dynamicTable")
                      }
                    }}
                  ></button>
                </Col>

                <Col md={2} className="colors ">
                  <button
                    className="dynamicTable-bank-dark colorBtn"
                    onClick={e => {
                      if (content) {
                        setSelectedColor("dynamicTable-ob")
                        const newContent = content.replace(
                          /".*">/,
                          `"dynamicTable-ob">`
                        )
                        setContent(newContent)
                      } else {
                        setSelectedColor("dynamicTable-ob")
                      }
                    }}
                  ></button>
                </Col>

                <Col md={2} className="colors ">
                  <button
                    className="dynamicTable-gov-dark colorBtn"
                    onClick={e => {
                      if (content) {
                        setSelectedColor("dynamicTable-og")
                        const newContent = content.replace(
                          /".*">/,
                          `"dynamicTable-og">`
                        )
                        setContent(newContent)
                      } else {
                        setSelectedColor("dynamicTable-og")
                      }
                    }}
                  ></button>
                </Col>

                <Col md={2} className="colors ">
                  <button
                    className="dynamicTable-health-dark colorBtn"
                    onClick={e => {
                      if (content) {
                        setSelectedColor("dynamicTable-oh")
                        const newContent = content.replace(
                          /".*">/,
                          `"dynamicTable-oh">`
                        )
                        setContent(newContent)
                      } else {
                        setSelectedColor("dynamicTable-oh")
                      }
                    }}
                  ></button>
                </Col>

                <Col md={2} className="colors ">
                  <button
                    className="dynamicTable-sustain-dark colorBtn"
                    onClick={e => {
                      if (content) {
                        setSelectedColor("dynamicTable-os")
                        const newContent = content.replace(
                          /".*">/,
                          `"dynamicTable-os">`
                        )
                        setContent(newContent)
                      } else {
                        setSelectedColor("dynamicTable-os")
                      }
                    }}
                  ></button>
                </Col>
              </div>
            </section>
            <LoadableComponent
              handleLabsBlogContent={handleLabsBlogContent}
              setPreview={setPreview}
            />
            <Button
              variant="primary"
              type="submit"
              onClick={handleClick}
              className="my-5"
            >
              Create Table
            </Button>{" "}
          </Col>
          <Col md={6}>
            <h4 className="my-3">Your code & preview </h4>
            {errorMessage ? (
              <BlogComponentsErrorMessage message="Please complete all the fields" />
            ) : null}

            <div className="d-flex justify-content-between">
              {preview && (
                <>
                  {" "}
                  <h6 className="">Copy your code:</h6>
                  <CopyToClipboardBtn theHtml={content} />{" "}
                </>
              )}
            </div>
            {preview ? (
              <Row>
                <Col md={12}>
                  <code
                    onClick={() => {
                      navigator.clipboard.writeText(content)
                    }}
                    aria-hidden="true"
                  >
                    <pre>{content}</pre>
                  </code>
                </Col>
                <Col md={12} className="">
                  <h6 className="fw-bold">Preview component</h6>
                  <div dangerouslySetInnerHTML={{ __html: content }} />
                </Col>
              </Row>
            ) : null}
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
