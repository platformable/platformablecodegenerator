import React, { useState } from "react"
import Layout from "../components/layout"
import { Container, Row, Col, Form } from "react-bootstrap"
import SEO from "../components/seo"

const LabsHeader = () => {
  const [preview, UpdatePreview] = useState(true)
  const html = `
    <div class="labs-top-bar-posts-header">
  <div class="labs-top-bar-posts-header-img">
    <img src="https://res.cloudinary.com/platform1/image/upload/v1623947770/Labs_c8c4b81e63.png" alt="">
  </div>
  <div class="labs-top-bar-posts-text">
    <h5 className="font-weight-bold text-black text-center flex justify-center bg-primary">This post is part of the "<strong>Open Banking Model</strong>" Platformable Labs Project</h5>
  </div>
</div>
    `
  return (
    <Layout>
      <SEO title="Labs Header"/>
      <Container>
        <Row>
          <h3 className="my-5  fw-bold">Platformable Labs Post Header</h3>

          <Col md={12}>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </Col>

          {preview ? (
            <span className="d-inline-block p-2">
              <div
                className="badge badge-warning block"
                role="button"
                onClick={() => {
                  navigator.clipboard.writeText(html)
                }}
              >
                <img
                  className="btn"
                  src="https://img.icons8.com/small/16/000000/copy-2.png"
                />
              </div>
            </span>
          ) : null}
        </Row>
      </Container>
    </Layout>
  )
}

export default LabsHeader
