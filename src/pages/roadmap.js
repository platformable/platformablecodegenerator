import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import { Container, Row, Col, Form, Button, FormGroup } from "react-bootstrap"
import roadmapImg from "../../static/previewThumbnails/roadmapThumbnail.png"
import HeaderComponent from '../components/HeaderComponent'
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import BlogComponentsErrorMessage from "../components/blogComponentsErrorMessage"
import SEO from "../components/seo"
import Loadable from "react-loadable"

import SingleColorButton from '../components/SingleColorButton'
import colorFunction from "../components/colorsForComponents.js";
const { roadmapColors } = colorFunction();

const LoadableComponent = Loadable({
  loader: () => import("../components/roadmapRichEditorComponent"),
  loading: "Loading",
})

export default function Roadmap() {
  const [form, setForm] = useState([])
  const [preview, setPreview] = useState(false)
  const [newHtml, setNewHtml] = useState("")
  const [errorMessage, setErrorMessage] = useState(false)
  
  const [selectedColor, setSelectedColor] = useState("")
  
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
  
  
  const HandleRoadmapContent = (data,index) => {
    
    setForm(prev => {
      return prev.map((item, i) => {
        /* return item as it is if index  is different */
        if (i !== index) {
          return item
        }
        /* if index is the same edit content */
        return {
          ...item,
          content: data,
        }
      })
    })

  }

  const notify = () => {
    toast.success("Copied to Clipboard !", {
      position: toast.POSITION.TOP_RIGHT,
    })
  }
  useEffect(() => {
    if (form.length === 0) {
      setPreview(false)
    }

  }, [form])

  const addRow = e => {
    e.preventDefault()
    setErrorMessage(false)
    const inputsData = {
      title: "",
      content: "",
    }
    setForm(prevState => [...prevState, inputsData])
  }

  const onDataChange = (index, event,data) => {

    // setPreview(false)


    setForm(prev => {
      return prev.map((item, i) => {
        /* return item as it is if index  is different */
        if (i !== index) {
          return item
        }
        /* if index is the same edit content */
        return {
          ...item,
          [event.target.name]: event.target.value,
        }
      })
    })
  }

  const handleRemoveField = (e, index) => {
    e.preventDefault()
    setForm(prev => prev.filter(item => item !== prev[index]))
  }

  const handleClick = () => {
    if (form.length === 0) {
      setErrorMessage(true)
    } else {
      setPreview(true)
    }
  }

  useEffect(() => {
    if (preview) {
      setNewHtml(document.getElementById("timeline").outerHTML)
    }
  }, [preview, form])

  return (
    <Layout>
      <SEO title="Roadmap" />
      <Container className="my-5">
        <HeaderComponent componentName="Roadmap" image={roadmapImg} video={"https://res.cloudinary.com/dsppwrq84/video/upload/v1629927293/roadmapHowTo_zt2l2e.mov"} />
        <Row>
          <Col md={6}>

          <section id="colorButtons">
              <h4>Select color</h4>
              <div className="d-flex flex-column flex-md-row">
                {roadmapColors.map((color, index) => <SingleColorButton key={index} colorClass={color.class} onSelectColor={() => {
                  setSelectedColor(color.color)
                  setErrorMessage(false)
                }} />)}
              </div>
            </section>
            <Button
              variant="primary"
              type="submit"
              onClick={addRow}
              className="mb-5 btn-mainColor"
            >
              Add Row
            </Button>
            {form.map((item, index) => (
              <>
                <div className="d-flex justify-content-between my-3">
                  <h3 className="font-weight-bold">{`Road ${index + 1}`}</h3>
                  <button
                    className="btn btn-mainColor text-white justify-content-between"
                    onClick={e => handleRemoveField(e, index)}
                  >
                    X
                  </button>
                </div>

                <Form.Group controlId="">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    name="title"
                    value={item.title}
                    onChange={e => onDataChange(index, e)}
                  />
                </Form.Group>
                <div className="my-3">
                  <p>Content</p>
                <LoadableComponent
                handleRoadmapContent={HandleRoadmapContent}
                name="content"
                setPreview={setPreview}
                index={index}
                
                />
                </div>
              </>
            ))}

            <Row className="my-5">
              <Col>
                <Button
                  variant="primary"
                  type="submit"
                  onClick={handleClick}
                  className="my-2 btn-mainColor"
                >
                  Create Roadmap
                </Button>
              </Col>
            </Row>
          </Col>
          <Col md={6}>
            <h4 className="mb-5">Your code & preview </h4>
            <div className="row">
              <div className="d-flex justify-content-between">
                {errorMessage ? (
                  <BlogComponentsErrorMessage message="Please complete all the fields" />
                ) : null}

                {preview && (
                  <>
                    <h6 className="">Copy your code:</h6>
                    <div
                      className="badge badge-warning block btn-light rounded"
                      role="button"
                      onClick={() => {
                        notify()
                        const allTheHtml = document.getElementById("timeline")
                          .outerHTML
                        navigator.clipboard.writeText(allTheHtml)
                      }}
                    >
                      <img
                        className="btn"
                        src="https://img.icons8.com/small/16/000000/copy-2.png"
                      />
                    </div>
                  </>
                )}
              </div>
              <div className="">{preview && <pre>{newHtml}</pre>}</div>

              <div className="road-component-view">
                {preview ? (
                  <>
                    <h6 className="fw-bold">Preview component</h6>

                    <section id="timeline">
                      <div class="labs-road-text-img-component-container">
                      <div class="labs-road-top-bar-posts-header labs-road-text-img-component">
                        <div class="labs-road-top-bar-posts-header-img labs-road-text-img-component">
                          <img
                            src="https://res.cloudinary.com/platform1/image/upload/v1623947770/Labs_c8c4b81e63.png"
                            alt=""
                          />
                        </div>
                        <div class="labs-road-top-bar-posts-text">
                          <h3>Roadmap</h3>{" "}
                        </div>
                      </div>
                    </div>
                    
                      {form.map((item, index) => {
                        return (
                          <article>
                            <div class="inner">
                              <span class={`date ${selectedColor}`}>
                                <span class={`month `}>{index + 1}</span>
                              </span>
                              <h2>{item.title}</h2>
                              <div
                                dangerouslySetInnerHTML={{ __html: item.content }}
                              />
                            </div>
                          </article>
                        )
                      })}
                    </section>
                  </>
                ) : null}
              </div>
            </div>
          </Col>
        </Row>
        <ToastContainer />
      </Container>
    </Layout>
  )
}
