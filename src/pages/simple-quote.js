import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import SmallQuoteComponent from "../components/smallQuoteComponent"
import smallQuoteImg from "../../static/previewThumbnails/smallQuoteThumbnail.png"
import CopyToClipboardBtn from "../components/CopyToClipboardBtn"
import SingleColorButton from '../components/SingleColorButton'
import HeaderComponent from '../components/HeaderComponent'
import BlogComponentsErrorMessage from "../components/blogComponentsErrorMessage"
import colorFunction from "../components/colorsForComponents.js";
import colorsForComponents from '../components/colorsForComponents'
import SEO from "../components/seo"

export default function SimpleQuote() {
  const [selectedColor, setSelectedColor] = useState("")
  const [quoteContent, setQuoteContent] = useState({
    quote: "",
    author: "",
    secondLine: "",
  })
  const { quoteColors } = colorFunction();
  const { summaryBoxColors } = colorsForComponents()

  const [errorMessage, setErrorMessage] = useState(false)
  const [preview, setPreview] = useState(false)

  useEffect(() => {
    addBorder()
  }, [])

  useEffect(() => {
    addBordertoColor()
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
  const addBordertoColor = () => {
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
 /*  const theHtml = `  
    <div className="smallQuote ${selectedColor}">
      <div className="centered-border" style="margin-bottom:30px;"></div>
      <p className="my-3">${quoteContent.quote}</p>
      <div className="author"><h3 className="font-black">${quoteContent.author}</h3></div>
      <div className="second-line">${quoteContent.secondLine}</div>
      <div className="centered-border" style="margin-top:30px;"></div>
    </div>
      ` */

      const theHtml = `
      <div className="simple-quote ${selectedColor}">
      <p>${quoteContent.quote}</p>
      <h6 className=" fw-bold">${quoteContent.author}</h6>
      <span>${quoteContent.secondLine}</span>
    </div>
      `
  return (
    <Layout>
      <SEO title="Small quote" />
      <Container className="my-5">
        <HeaderComponent componentName="Simple Quote" image={smallQuoteImg} video={"https://res.cloudinary.com/dsppwrq84/video/upload/v1629927291/smallQuoteHowTo_ag2pnc.mov"} />
        <Row>
          <Col md={6} id="left-side">
            <section id="colorButtons">
              <h4 className="my-3">Select color</h4>
              <div className="d-flex flex-column flex-md-row">
                {quoteColors.map((color, index) => <SingleColorButton key={index} colorClass={color.class} onSelectColor={() => {
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
            <h4 className="my-3">Your code & preview </h4>
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
                <SmallQuoteComponent
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
