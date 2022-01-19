import React, { useState, useEffect } from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { Container, Row, Col, Button, Form } from "react-bootstrap"
import MediaModalPreview from "../components/mediaModalPreview"
import { StaticImage } from "gatsby-plugin-image"
import { OverlayTrigger, Tooltip } from "react-bootstrap"
import inlineIconImg from "../../static/previewThumbnails/shadedInlineThumbnail.png"
import CopyToClipboardBtn from "../components/CopyToClipboardBtn"
import PreviewCodeComponent from "../components/previewCodeComponent"
import BlogComponentsErrorMessage from "../components/blogComponentsErrorMessage"
import SEO from "../components/seo"

export default function ShadedInlineIcon({ data }) {
  const [show, setShow] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)
  const [border, setBorder] = useState("")
  const [content, setContent] = useState({
    selectedImg: "",
    title: "",
    textContent: "",
    name: "",
  })
  const [selectedColor, setSelectedColor] = useState("")

  const [preview, setPreview] = useState(false)

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

  const basicCode = `
<div class="shaded-inline-icon-container ${selectedColor}">
  <div class="shaded-inline-icon-top">
    <img src="${content.selectedImg}" alt="platformable">
    <h3 class="fw-bold">${content.title}</h3>
  </div>
  <div class="shaded-inline-icon-bottom my-5">
    <p>${content.textContent}</p>
  </div>
</div> 
`

  const theHtml = `
<div class="shaded-inline-icon-container ${selectedColor}">
  <div class="shaded-inline-icon-top">
    <img src="${content.selectedImg}" alt="platformable">
    <h3 class="fw-bold">${content.title}</h3>
  </div>
  <div class="shaded-inline-icon-bottom my-5">
    <p>${content.textContent}</p>
  </div>
</div> 
`

  const theCss = `
/* SHADED INLINE ICON */
.shaded-inline-icon-container  {
  margin:30px 0;
  padding:20px ;

}

.shaded-inline-icon-container img {
  max-width: 125px;
}

.shaded-inline-icon-top {
  display:flex;
  align-items:center;
  gap:10px;
}

.shaded-inline-bg-ob {
  background-color:var(--ob-light);
    border-bottom:4px solid var(--ob-dark);
    border-top-left-radius:20px;
  border-top-right-radius:20px;
}

.shaded-inline-bg-ob h3{
color:var(--ob-dark)
}

.shaded-inline-bg-og {
  background-color:var(--og-light);
    border-bottom:4px solid var(--og-dark);
    border-top-left-radius:20px;
  border-top-right-radius:20px;
}

.shaded-inline-bg-og h3{
color:var(--og-dark)
}

.shaded-inline-bg-oh {
  background-color:var(--oh-light);
    border-bottom:4px solid var(--oh-dark);
    border-top-left-radius:20px;
  border-top-right-radius:20px;
}
.shaded-inline-bg-oh h3{
color:var(--oh-dark)
}

.shaded-inline-bg-os {
  background-color:var(--os-light);
    border-bottom:4px solid var(--os-dark);
    border-top-left-radius:20px;
  border-top-right-radius:20px;
}

.shaded-inline-bg-os h3{
color:var(--os-dark)
}

.shaded-inline-icon-general-dark-btn  {
  background-color:var(--russian-violet-dark);
}


.shaded-inline-icon-bank-dark-btn{
  background-color:var(--red-orange-dark);
}



.shaded-inline-icon-gov-dark-btn {
  background-color:#632FAE;
}


.shaded-inline-icon-health-dark-btn {
  background-color:var(--oh-dark);
}



.shaded-inline-icon-sustain-dark-btn {
  background-color:var(--os-dark);
}

`

  function getData(e) {
    setContent({
      ...content,
      selectedImg: e.target.currentSrc,
      name: e.target.alt,
    })
    const allGalleryImg = document.querySelectorAll(".mediaGallerySelectedImg")
    allGalleryImg.forEach(item =>
      item.classList.remove("mediaGallerySelectedImg")
    )
    e.target.classList.add("mediaGallerySelectedImg")
  }

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
  return (
    <Layout>
      <SEO title="Inline icon" />
      <Container className="my-5">
        <div className="row">
          <h3 className="fw-bold">Shaded Inline icon</h3>
        </div>
        <Row className="mb-5">
          <Col md={6}>
            <h4 className="py-3">Component preview</h4>
            <img src={inlineIconImg}></img>
          </Col>
          <Col md={6}>
            <div>
              <h4 className="py-3">How to use the component</h4>
              <video className="w-100" controls>
                <source
                  src="https://res.cloudinary.com/dsppwrq84/video/upload/v1629927292/shadedIconHowTo_exsw1k.mov"
                  type="video/mov"
                />
                <source
                  src="https://res.cloudinary.com/dsppwrq84/video/upload/v1629927292/shadedIconHowTo_exsw1k.mov"
                  type="video/ogg"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </Col>
        </Row>

        {/* START HERE */}
        <Row>
          <Col md={6} id="left-side">
            <section id="colorButtons">
              <h4>Select color</h4>
              <div className="d-flex flex-column flex-md-row">
                <Col md={2} className="colors ">
                  <button
                    className="inline-icon-oe-dark-btn colorBtn"
                    onClick={e => {
                      setSelectedColor("shaded-inline-bg-oe")
                      setErrorMessage(false)
                    }}
                  ></button>
                </Col>
                <Col md={2} className="colors ">
                  <button
                    className="inline-icon-general-dark-btn colorBtn"
                    onClick={e => {
                      setSelectedColor("shaded-inline-icon-general-dark")
                      setErrorMessage(false)
                    }}
                  ></button>
                </Col>

                <Col md={2} className="colors ">
                  <button
                    className="inline-icon-bank-dark-btn colorBtn"
                    onClick={e => {
                      setSelectedColor("shaded-inline-bg-ob")
                      setErrorMessage(false)
                    }}
                  ></button>
                </Col>

                <Col md={2} className="colors ">
                  <button
                    className="inline-icon-gov-dark-btn colorBtn"
                    onClick={e => {
                      setSelectedColor("shaded-inline-bg-og")
                      setErrorMessage(false)
                    }}
                  ></button>
                </Col>

                <Col md={2} className="colors ">
                  <button
                    className="inline-icon-health-dark-btn colorBtn"
                    onClick={e => {
                      setSelectedColor("shaded-inline-bg-oh")
                      setErrorMessage(false)
                    }}
                  ></button>
                </Col>

                <Col md={2} className="colors ">
                  <button
                    className="inline-icon-sustain-dark-btn colorBtn"
                    onClick={e => {
                      setSelectedColor("shaded-inline-bg-os")
                      setErrorMessage(false)
                    }}
                  ></button>
                </Col>
              </div>
            </section>
            <div className="">
              <p>Select an image:</p>
              <button
                className="btn bg-light rounded mb-3"
                onClick={() => setShow(true)}
              >
                <img src="https://img.icons8.com/material-outlined/24/000000/image.png" />
              </button>
              {content.selectedImg && <p>Name: {content.name}</p>}

              <Form.Group controlId="formBasicEmail" className="my-2">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  onChange={e => {
                    setContent({ ...content, title: e.target.value })
                  }}
                />
              </Form.Group>

              <Form.Group controlId="" className="my-2">
                <Form.Label>Content</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  onChange={e => {
                    setContent({ ...content, textContent: e.target.value })
                  }}
                />
              </Form.Group>

              <button
                type="submit"
                onClick={handleClick}
                className="my-5 btn btn-mainColor text-white"
              >
                Get Code
              </button>
            </div>
          </Col>
          <Col md={6}>
            <h4>Your code & preview </h4>

            {errorMessage ? (
              <BlogComponentsErrorMessage message="Please complete all the fields" />
            ) : null}
            {preview && (
              <>
                <div className="d-flex justify-content-between">
                  <h6 className="">Copy your code:</h6>
                  <CopyToClipboardBtn theHtml={theHtml} />
                </div>
              </>
            )}
            {preview && (
              <>
                <pre
                  onClick={() => {
                    navigator.clipboard.writeText(theHtml)
                  }}
                >
                  {theHtml}
                </pre>
              </>
            )}

            <div className="col-md-12">
              {preview && (
                <>
                  <h6 className="fw-bold">Preview component</h6>

                  <div dangerouslySetInnerHTML={{ __html: theHtml }} />
                </>
              )}
            </div>
          </Col>
        </Row>

        {/* ENDS HERE  */}

        {/* DISPLAY gallery Img */}
        {show && (
          <MediaModalPreview
            show={show}
            onHide={() => setShow(false)}
            data={data}
            getData={getData}
            className="mediaImg"
          />
        )}
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query ShadedInlineIcon {
    allStrapiMedia(filter: { name: { regex: "/ICON /i" } }) {
      edges {
        node {
          name
          localFile {
            childImageSharp {
              gatsbyImageData(layout: FIXED, placeholder: BLURRED)
            }
          }
        }
      }
      pageInfo {
        itemCount
        hasNextPage
        pageCount
        currentPage
        perPage
        totalCount
        hasPreviousPage
      }
    }
  }
`
