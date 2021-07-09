import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import InsetBlockquoteComponent from "../components/insetBlockquoteComponent"
import NoDataImg from "../images/nodata.svg"
import {OverlayTrigger, Tooltip} from 'react-bootstrap'

export default function InsetQuote1() {
  const [fullContent, setFullContent] = useState(false)
  const [selectedColor, setSelectedColor] = useState("")
  const [blockquoteContent, setBlockquoteContent] = useState({
    content: "",
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
    if (isContentEmpty) {
      setErrorMessage(true)
    } else {
      setFullContent(true)
      setErrorMessage(false)
    }
  }

  const theHtml = `  
    <div class="text-white ${selectedColor}">
<strong><i>${blockquoteContent.content}</i></strong>
</div>

    `
  return (
    <Layout>
      <Container className="my-5">
        <Row>
          <Col md={6} id="left-side">
            <section id="colorButtons">
              <h3 className="font-weight-bold">Inset Box</h3>
              <h4>Select color</h4>
              <Row>
                <Col md={2} className="colors ">
                  <button
                    className="inset-box-general-light colorBtn"
                    onClick={e => {
                      setSelectedColor("inset-box-general-light")
                    }}
                  ></button>
                </Col>

                <Col md={2} className="colors ">
                  <button
                    className="inset-box-bank-light colorBtn"
                    onClick={e => {
                      setSelectedColor("inset-box-bank-light")
                    }}
                  ></button>
                </Col>

                <Col md={2} className="colors ">
                  <button
                    className="inset-box-gov-light colorBtn"
                    onClick={e => {
                      setSelectedColor("inset-box-gov-light")
                    }}
                  ></button>
                </Col>

                <Col md={2} className="colors ">
                  <button
                    className="inset-box-health-light colorBtn"
                    onClick={e => {
                      setSelectedColor("inset-box-health-light")
                    }}
                  ></button>
                </Col>

                <Col md={2} className="colors ">
                  <button
                    className="inset-box-sustain-light colorBtn"
                    onClick={e => {
                      setSelectedColor("inset-box-sustain-light")
                    }}
                  ></button>
                </Col>
              </Row>
            </section>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Content:</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  onChange={e => {
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
                className="my-5"
              >
                Get Code
              </Button>
            </Form>
          </Col>
          <Col md={6} id="right-side">
            <h6 className="">Copy your code:</h6>
            <OverlayTrigger
              overlay={
                <Tooltip id="tooltip-disabled">Copy to Clipboard</Tooltip>
              }
            >
              <span className="d-inline-block">
                <div
                  className="badge badge-warning block"
                  role="button"
                  onClick={() => {
                    navigator.clipboard.writeText(theHtml)
                  }}
                >
                  <img src="https://img.icons8.com/small/16/000000/copy-2.png" />
                </div>
              </span>
            </OverlayTrigger>

            <div id="theCode">
              {errorMessage ? errorText : null}
              {fullContent ? (
                <InsetBlockquoteComponent
                  selectedColor={selectedColor}
                  content={blockquoteContent.content}
                />
              ) : null}
            </div>
          </Col>
        </Row>

        {fullContent ? (
          <Row>
            <Col md={12}>
              <h6 className="fw-bold">Preview component</h6>
              <div
                dangerouslySetInnerHTML={{ __html: theHtml }}
                className={selectedColor}
              />
            </Col>
          </Row>
        ) : null}
      </Container>
    </Layout>
  )
}
