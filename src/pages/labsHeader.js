import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import labsPostHeader from "../../static/previewThumbnails/labsPostThumbnail.png"
import BlogComponentsErrorMessage from "../components/blogComponentsErrorMessage"
import CopyToClipboardBtn from "../components/CopyToClipboardBtn"
import HeaderComponent from '../components/HeaderComponent'
import Loadable from "react-loadable"
import SEO from "../components/seo"


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
  useEffect(() => {
    if (content.content === "") {
      setPreview(false)
    }
  }, [content])
  const html = `
    <div class="labs-top-bar-posts-header">
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
  return (
    <Layout>
      <SEO title="Labs Header" />
      <Container className="my-5">
        <HeaderComponent componentName="Platformable Labs Post Header" image={labsPostHeader} video={"https://res.cloudinary.com/dsppwrq84/video/upload/v1629927501/personaHowTo_w0vvuy.mov"}/>
        <Row>
          <Col md={6} id="left-side">
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
