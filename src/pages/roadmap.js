import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import { Container, Row, Col, Form, Button, FormGroup } from "react-bootstrap"
import roadmapImg from "../../static/previewThumbnails/roadmapThumbnail.png"
import CopyToClipboardBtn from "../components/CopyToClipboardBtn"

import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import PreviewCodeComponent from "../components/previewCodeComponent"
import BlogComponentsErrorMessage from "../components/blogComponentsErrorMessage"
import SEO from "../components/seo"

export default function Roadmap() {
  const [form, setForm] = useState([])
  const [preview, setPreview] = useState(false)
  const [newHtml, setNewHtml] = useState("")
  const [errorMessage, setErrorMessage] = useState(false)

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
  const basicCode = `
<section id="timeline">
    <article>
      <div class="inner">
        <span class="date">{index}</span>
        <h2 class="month">{index.title}</h2>
        <p>{index.content}</p>
      </div>
    </article>
</section>
`

  const html = `
<section id="timeline">
${form.map((item, index) => {
  return (
    <article>
      <div class="inner">
        <span class="date">{index || ""}</span>
        <h2 class="month">{index.title || ""}</h2>
        <p>{index.content || ""}</p>
      </div>
    </article>
  )
})}
</section>
`

  const theCss = `
/* ROADMAP */

section#timeline {
width: 90%;
margin: 20px auto;
position: relative;
}

section#timeline article:before {
content: '';
display: block;
position: absolute;
left: -7px;
top: 0;
margin: 0 0 0 0px;
width: 2px;
height: 100%;
background: #a80075;
}


section#timeline article:last-child:before {
background: none;
}

section#timeline article {
width: 100%;
margin: 0 0 0px 0;
position: relative;
}


section#timeline article:after {
content: '';
display: block;
clear: both;
}

section#timeline article div.inner {
width: 90%;
float: left;
margin: 0 0 0 0;
border-radius: 6px;
}

section#timeline article div.inner span.date {
display: block;
width: 50px;
height: 50px;
padding: 12px;
position: absolute;
top: 0;
left: 0%;
margin: -3px 0 0 -32px;
border-radius: 100%;
font-size: 10px;
font-weight: 900;
text-transform: uppercase;
background: #fff;
color: rgba(0,0,0,0.9);
border: 2px solid #a80075;
text-align: center;
}



section#timeline article div.inner span.date span {
display: block;
text-align: center;
}
section#timeline article div.inner span.date span.day {
font-size: 10px;
}
section#timeline article div.inner span.date span.month {
font-size: 14px;
}
section#timeline article div.inner span.date span.year {
font-size: 10px;
}
section#timeline article div.inner h2 {
padding: 15px;
margin: 0;
font-weight:bold;
font-size: 20px;

position: relative;
}

section#timeline article div.inner p {
padding: 15px;
margin: 0;
font-size: 14px;


border-radius: 0 0 6px 6px;
}
section#timeline article div.inner {
margin-left:40px;
margin-top:-5px
}


.labs-road-text-img-component {
display:flex;
padding:10px 0;
gap:10px;
align-items:center;
border-radius:10px;
}

.labs-road-text-img-component img {
flex-grow:1;
max-width:95px;
}

.labs-road-top-bar-posts-text h3 {
position:relative;
top:15px;
font-weight:bold;

}


@media (max-width:690px) {
.labs-road-text-img-component {
flex-wrap:wrap;
}

.labs-road-text-img-component {
display:flex;
justify-content:center;

}
}
`

  const addRow = e => {
    e.preventDefault()
    setErrorMessage(false)
    const inputsData = {
      title: "",
      content: "",
    }
    setForm(prevState => [...prevState, inputsData])
  }

  const onChange = (index, event) => {
    event.preventDefault()
    event.persist()
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
  }, [preview])

  return (
    <Layout>
      <SEO title="Roadmap" />
      <Container className="my-5">
        <div className="row">
          <h3 className="fw-bold">Roadmap</h3>
        </div>
        <Row className="mb-5">
          <Col md={6}>
            <h4 className="py-3">Component preview</h4>
            <img src={roadmapImg}></img>
          </Col>
          <Col md={6}>
            <div>
              <h4 className="py-3">How to use the component</h4>
              <video className="w-100" controls>
                <source
                  src="https://res.cloudinary.com/dsppwrq84/video/upload/v1629927293/roadmapHowTo_zt2l2e.mov"
                  type="video/mov"
                />
                <source
                  src="https://res.cloudinary.com/dsppwrq84/video/upload/v1629927293/roadmapHowTo_zt2l2e.mov"
                  type="video/ogg"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </Col>
        </Row>

        {/* <PreviewCodeComponent basicCode={basicCode} theCss={theCss} img={roadmapImg} videoUrl="https://res.cloudinary.com/dsppwrq84/video/upload/v1629927293/roadmapHowTo_zt2l2e.mov"/> */}

        <Row>
          <Col md={6}>
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
                    onChange={e => onChange(index, e)}
                  />
                </Form.Group>
                <Form.Group controlId="">
                  <Form.Label>Content</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={6}
                    value={item.content}
                    name="content"
                    onChange={e => onChange(index, e)}
                  />
                </Form.Group>
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
                    <section id="timeline">
                      {form.map((item, index) => {
                        return (
                          <article>
                            <div class="inner">
                              <span class="date">
                                <span class="month">{index + 1}</span>
                              </span>
                              <h2>{item.title}</h2>
                              <p>{item.content}</p>
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
