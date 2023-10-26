import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import { Container, Row, Button, Col } from "react-bootstrap"
import labsTextImg from "../../static/previewThumbnails/labsTextThumbnail.png"
import Loadable from "react-loadable"
import HeaderComponent from '../components/HeaderComponent'
import BlogComponentsErrorMessage from "../components/blogComponentsErrorMessage"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import SEO from "../components/seo"

import SingleColorButton from '../components/SingleColorButton'
import colorFunction from "../components/colorsForComponents.js";
const { lasbColors } = colorFunction();

const LoadableComponent = Loadable({
  loader: () => import("../components/RichEditorComponent"),
  loading: "Loading",
})
export default function LabsBlogComponent() {
  const [errorMessage, setErrorMessage] = useState(false)
  const [preview, setPreview] = useState(false)
  const [content, updateContent] = useState("")
  const [selectedColor, setSelectedColor] = useState("")

  useEffect(() => {
    if (content === "") {
      setPreview(false)
    }
  }, [content])

  
  const handleClick = () => {
    if (content === "") {
      setErrorMessage(true)
    } else {
      setPreview(true)
    }
  }

  const [globalWindow, setGlobalWindow] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      setGlobalWindow(true)
    }
  }, [])

  const handleLabsBlogContent = data => {
    setErrorMessage(false)
    updateContent(data)
  }

  const notify = () => {
    toast.success("Copied to Clipboard !", {
      position: toast.POSITION.TOP_RIGHT,
    })
  }

  function handleCopy() {
    notify()
    navigator.clipboard.writeText(theHtml)
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
  const theHtml = `
    <div class="lab-text-img-component-container ${selectedColor}-border-bottom">
            <div class=" labs-text-img-component">
              <div class="labs-text-img-component">
                <img
                  src="https://res.cloudinary.com/platform1/image/upload/v1623947770/Labs_c8c4b81e63.png"
                  alt=""
                />
              </div>
              <div class="labs-top-bar-posts-text">
                <h3>Challenge</h3>
              </div>
            </div>
            <p>${content}</p>
      </div>
    `
  return (
    <Layout>
      <SEO title="Labs blog component" />
      <Container className="my-5">
        <HeaderComponent componentName="Labs Blog Text Component" image={labsTextImg} video="https://res.cloudinary.com/dsppwrq84/video/upload/v1629927274/labsTextHowTo_veytds.mov" />
        <Row>
          <Col md={6}>
          <section id="colorButtons">
              <h4>Select color</h4>
              <div className="d-flex flex-column flex-md-row">
                {lasbColors.map((color, index) => <SingleColorButton key={index} colorClass={color.class} onSelectColor={() => {
                  setSelectedColor(color.color)
                  setErrorMessage(false)
                }} />)}
              </div>
            </section>
            <h4>Enter the content </h4>
            <LoadableComponent
              handleLabsBlogContent={handleLabsBlogContent}
              setPreview={setPreview}
            />
            <Button
              variant="primary"
              type="submit"
              onClick={handleClick}
              className="my-5 btn-mainColor"
            >
              Create
            </Button>
          </Col>
          <Col md={6}>
            <h4>Your code & preview </h4>
            {errorMessage ? (
              <BlogComponentsErrorMessage message="Please complete all the fields" />
            ) : null}
            {preview ? (
              <div className="d-flex justify-content-between">
                <h6 className="">Copy your code:</h6>
                {preview && (
                  <div>
                    <div
                      type="button"
                      className="btn btn-light rounded "
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Tooltip on top"
                    >
                      <span className="d-inline-block">
                        <div
                          className="badge badge-warning block"
                          role="button"
                          onClick={handleCopy}
                        >
                          <img src="https://img.icons8.com/small/16/000000/copy-2.png" />
                        </div>
                        <ToastContainer />
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ) : null}

            {preview && (
              <Row>
                <code
                  onClick={() => {
                    navigator.clipboard.writeText(theHtml)
                  }}
                >
                  <pre>{theHtml}</pre>
                </code>
                {preview && (
                  <>
                    <h6 className="fw-bold">Preview component</h6>
                    <div dangerouslySetInnerHTML={{ __html: theHtml }} />
                  </>
                )}
              </Row>
            )}
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
