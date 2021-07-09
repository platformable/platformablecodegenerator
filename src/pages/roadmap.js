import React, { useState } from "react"
import Layout from "../components/layout"
import { Container, Row, Col, Form, Button, FormGroup } from "react-bootstrap"

export default function Roadmap() {
  const [form, setForm] = useState([])
  const [preview, setPreview] = useState(false)
  const [content, setContent] = useState("")
  const [theHtml,setTheHtml]=useState("")

  const html = `
<section id="timeline">
${form.map((item, index) => {
  return (
    <article>
      <div class="inner">
        <span class="date"> {index} </span>
        <h2 class="month">{index.title}</h2>
        <p>{index.content}</p>
      </div>
    </article>
  )
})}
</section>
`


  const addRow = e => {
    e.preventDefault()
    const inputsData = {
      title: "",
      content: "",
    }
    setForm(prevState => [...prevState, inputsData])
  }

  const onChange = (index, event) => {
    event.preventDefault()
    event.persist()

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

  const handleClick = async e => {
const allthehtml = await document.getElementById("timeline")


    setPreview(true)
  }

  return (
    <Layout>
      <Container>
        <Row>
          <Col md={12}>
            <h3 className="font-weight-bold">Roadmap</h3>
            <Button
              variant="primary"
              type="submit"
              onClick={addRow}
              className="my-5"
            >
              Add Row
            </Button>
          </Col>
        </Row>

        <Row className="row-container my-5">
          {form.map((item, index) => (
            <Col md={6}>
              <div className="d-flex justify-content-between">
                <h3 className="font-weight-bold">{`Road ${index + 1}`}</h3>

                <button
                  className="btn btn-warning justify-content-between"
                  onClick={e => handleRemoveField(e, index)}
                >
                  X
                </button>
              </div>

              <Col md={12}>
                <Form.Group controlId="">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    name="title"
                    value={item.title}
                    onChange={e => onChange(index, e)}
                  />
                </Form.Group>
              </Col>
              <Col md={12}>
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
              </Col>
            </Col>
          ))}
        </Row>

        <Row className="my-5">
          <Col>
            <Button
              variant="primary"
              type="submit"
              onClick={handleClick}
              className="my-5"
            >
              Create Roadmap
            </Button>
            {preview ? (
              <span className="d-inline-block p-2">
                <div
                  className="badge badge-warning block"
                  role="button"
                  onClick={() => {
                    const allTheHtml = document.getElementById("timeline").outerHTML
                    navigator.clipboard.writeText(allTheHtml)
                  }}
                >
                  <img
                    className="btn"
                    src="https://img.icons8.com/small/16/000000/copy-2.png"
                  />
                </div>
              </span>
            ) : null}
          </Col>
        </Row>

        <Row>
          <Col md={12}>
{/* {preview &&    <Col md={12} className="code-block">
                <code
          onClick={() => {
            navigator.clipboard.writeText(theHtml)
          }}
        >
          {theHtml}
        </code>
                </Col>} */}


            {preview ? (
              <>
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
                            <span class="month">{index+1}</span>
                          </span>
                          <h2>{item.title}</h2>
                          <p>
                            {item.content}
                          </p>
                        </div>
                      </article>
                    )
                  })}
                </section>
              </>
            ) : null}
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
