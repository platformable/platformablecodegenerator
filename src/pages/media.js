import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Container, Row, Col, Form } from "react-bootstrap"
import MediaModalPreview from "../components/mediaModalPreview"
import inlineIconImg from "../../static/previewThumbnails/inlineIconThumbnail.png"
import CopyToClipboardBtn from "../components/CopyToClipboardBtn"
import BlogComponentsErrorMessage from "../components/blogComponentsErrorMessage"
import HeaderComponent from '../components/HeaderComponent'
import SingleColorButton from '../components/SingleColorButton'
import colorFunction from "../components/colorsForComponents.js";
import SEO from "../components/seo"

export default function Media({ data }) {
  const [show, setShow] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)
  const [content, setContent] = useState({
    selectedImg: "",
    title: "",
    textContent: "",
    name: "",
  })
  const [selectedColor, setSelectedColor] = useState("")
  const [preview, setPreview] = useState(false)
  const { mediaColors } = colorFunction();


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

  const theHtml = `
<div class="inline-icon-container ${selectedColor}">
  <div class="inline-icon-top">
    <img src="${content.selectedImg}" alt="platformable">
    <h3 class="fw-bold">${content.title}</h3>
  </div>
  <div class="inline-icon-bottom my-5">
    <p>${content.textContent}</p>
  </div>
</div> 
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
        <HeaderComponent componentName="Inline icon"
          image={inlineIconImg}
          video={"https://res.cloudinary.com/dsppwrq84/video/upload/v1629927293/inlineIconHowTo_smwkxl.mov"} />
        {/* START HERE */}
        <Row>
          <Col md={6} id="left-side">
            <section id="colorButtons">
              <h4>Select color</h4>
              <div className="d-flex flex-column flex-md-row">
                {mediaColors.map((color, index) => <SingleColorButton key={index} colorClass={color.class} onSelectColor={() => {
                  setSelectedColor(color.color)
                  setErrorMessage(false)
                }} />)}
              </div>
            </section>
            <div>
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
          <Col md={6} id="right-side">
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
            <div className="row">
              <div className="col-md-12">
                {preview && (
                  <>
                    <h6 className="fw-bold">Preview component</h6>
                    <div dangerouslySetInnerHTML={{ __html: theHtml }} />
                  </>
                )}
              </div>
            </div>
          </Col>

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
        </Row>

        {/* THE PREVIEW */}
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query Media {
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
