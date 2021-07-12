import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import InsetBlockquoteComponent from "../components/insetBlockquoteComponent"

import { OverlayTrigger, Tooltip } from "react-bootstrap"
import insetBoxImg from "../../static/previewThumbnails/insetBoxThumbnail.png"

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

  const basicCode = `
  <div class="summary-box text-white ${selectedColor}">
  <h3 class="">Who should read this:</h3> ${blockquoteContent.whoShouldReadThis} <br><br>
  <h3 class="">What it’s about:</h3> ${blockquoteContent.whatAbout}<br><br>
  <h3 class="">Why it’s important:</h3> ${blockquoteContent.whyImportant}<br>
  </div>
    `

    const theCss= `
    /* SUMMARY BOX COMPONENT */

    .summary-box h3 {
        font-weight: bold;
      }
      .summary-box-general-dark {
        background-color:var(--russian-violet-dark);
        padding:20px;
        border-radius: 10px;
      }
      .summary-box-bank-dark {
        background-color:var(--red-orange-dark);
        padding:20px;
        border-radius: 10px;
      }
      .summary-box-gov-dark {
        background-color:#632FAE;
        padding:20px;
        border-radius: 10px;
      }
      .summary-box-health-dark {
        background-color:#0956FC;
        padding:20px;
        border-radius: 10px;
      }
      .summary-box-sustain-dark {
        border-radius: 10px;
        background-color:#0CE6A3;
        padding:20px;
      }`
  return (
    <Layout>
      <Container className="my-5">
        <div className="row">
          <h3 className="fw-bold">Inset Box</h3>
          <p>Component Example</p>

          {/* CHANGE THIS TO A COMPONENT */}
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#home"
                type="button"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                Preview
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                HTML
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#css"
                type="button"
                role="tab"
                aria-controls="css"
                aria-selected="false"
              >
                CSS
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#howto"
                type="button"
                role="tab"
                aria-controls="css"
                aria-selected="false"
              >
                How to
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <div className="component-example mt-2 mb-5 d-flex justify-center align-center">
                <div className="component-example-img">
                  <img src={insetBoxImg} alt="" className="img-thumbnail" />
                </div>
              </div>
            </div>

            <div
              class="tab-pane fade"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <pre>{basicCode}</pre>
            </div>
            <div
              class="tab-pane fade"
              id="css"
              role="tabpanel"
              aria-labelledby="css-tab"
            >
              <pre>{theCss}</pre>
            </div>
            <div
              class="tab-pane fade"
              id="howto"
              role="tabpanel"
              aria-labelledby="css-tab"
            >
                <div className="howTo d-flex justify-content-center align-items-center py-5 bg-light my-5 rounded">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/zd0_S_FPzKg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </div>
            
          </div>
        </div>

        {/* CHANGE THIS TO A COMPONENT */}

        <Row>
          <Col md={6} id="left-side">
            <section id="colorButtons">
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
