import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import LargeQuoteComponent from "../components/LargeQuoteComponent"
import largeQuoteImg from "../../static/previewThumbnails/largeQuoteThumbnail.png"
import CopyToClipboardBtn from "../components/CopyToClipboardBtn"
import BlogComponentsErrorMessage from "../components/blogComponentsErrorMessage"
import HeaderComponent from '../components/HeaderComponent'
import SingleColorButton from '../components/SingleColorButton'
import colorFunction from "../components/colorsForComponents.js";
import SEO from "../components/seo"

export default function LargeQuote() {
  const [selectedColor, setSelectedColor] = useState("")
  const [quoteContent, setQuoteContent] = useState({
    quote: "",
    author: "",
    secondLine: "",
  })
  const { largeQuoteColors } = colorFunction();

  const [preview, setPreview] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)
  useEffect(() => {
    addBorder()
  }, [])
  useEffect(() => {
    if (
      !quoteContent.quote &&
      !quoteContent.author &&
      !quoteContent.secondLine
    ) {
      setPreview(false)
    }
  }, [quoteContent])
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
    let isContentEmpty = Object.values(quoteContent).some(items => items === "")
    if (isContentEmpty || selectedColor === "") {
      setErrorMessage(true)
    } else {
      setPreview(true)
      setErrorMessage(false)
    }
  }

  const theHtml = `  
    <div class="large-quote ${selectedColor}">
      <p>${quoteContent.quote}</p>
      <div class="author"><h3 class="font-black">${quoteContent.author}</h3></div>
      <div class="second-line"><p>${quoteContent.secondLine}</p></div>
    </div>
      `
  return (
    <Layout>
      <SEO title="Large quote" />
      <Container className="my-5">
        <HeaderComponent componentName="Large Quote" image={largeQuoteImg} video={"https://res.cloudinary.com/dsppwrq84/video/upload/v1629927304/LargeQuoteHowTo_il1o7r.mov"} />
        <Row>
          <Col md={6} id="left-side">
            <section id="colorButtons">
              <h4>Select color</h4>
              <div className="d-flex flex-column flex-md-row">
                {largeQuoteColors.map((color, index) => <SingleColorButton key={index} colorClass={color.class} onSelectColor={() => {
                  setSelectedColor(color.color)
                  setErrorMessage(false)
                }} />)}
              </div>
            </section>
            <Form>
              <Form.Group controlId="">
                <Form.Label>Quote:</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  onChange={e => {
                    setQuoteContent({ ...quoteContent, quote: e.target.value })
                    setErrorMessage(false)
                  }}
                />
              </Form.Group>

              <Form.Group controlId="">
                <Form.Label>Author:</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  onChange={e => {
                    setQuoteContent({ ...quoteContent, author: e.target.value })
                    setErrorMessage(false)
                  }}
                />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Second Line</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  onChange={e => {
                    setQuoteContent({
                      ...quoteContent,
                      secondLine: e.target.value,
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
            <h4 className="">Component preview</h4>

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
                <LargeQuoteComponent
                  selectedColor={selectedColor}
                  quote={quoteContent.quote}
                  author={quoteContent.author}
                  secondLine={quoteContent.secondLine}
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
