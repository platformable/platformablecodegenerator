import React, {useState,useEffect} from 'react'
import {graphql,Link} from 'gatsby'
import Layout from '../components/layout'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import MediaModalPreview from '../components/mediaModalPreview'
import { StaticImage } from "gatsby-plugin-image"
import {OverlayTrigger, Tooltip} from 'react-bootstrap'
import inlineIconImg from '../../static/previewThumbnails/inlineIconThumbnail.png'
import CopyToClipboardBtn from "../components/CopyToClipboardBtn"
import PreviewCodeComponent from "../components/previewCodeComponent"
import BlogComponentsErrorMessage from '../components/blogComponentsErrorMessage'
import SEO from '../components/seo'


export default function Media({data}) {
  const [show, setShow] = useState(false);
  const [errorMessage, setErrorMessage] =useState(false);
  const [border,setBorder]=useState("")
  const [content,setContent]=useState({
    selectedImg:"",
    title:"",
    textContent:"",
    name:""
  })
  const [selectedColor,setSelectedColor] = useState('');

  const [preview,setPreview]=useState(false)

  useEffect(() => {
    addBorder()
},[])

  const addBorder =()=>{
    const allWrappers = document.querySelectorAll('.colors button');
    allWrappers.forEach((element)=> {
        element.addEventListener("click", ()=>{
            const prevSelected = document.querySelectorAll(".colors button")
            prevSelected.forEach(selection=> selection.style.border="0")
            
            element.style.border="5px solid #fff";

        }, false);
    })
}

  const basicCode = `
<div class="inline-icon-container">
  <div class="inline-icon-top">
    <img src="${content.selectedImg}" alt="platformable">
    <h3 class="fw-bold">${content.title}</h3>
  </div>
  <div class="inline-icon-bottom my-5">
    <p>${content.textContent}</p>
  </div>
</div> 
`
 
 
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

const theCss = `
/* INLINE ICON */
.inline-icon-container  {
margin:30px 0;
padding:20px ;
border-bottom:2px solid #632faf;
}

.inline-icon-container img {
max-width: 125px;
}

.inline-icon-top {
display:flex;
align-items:center;
gap:10px;
}
`

    function getData(e){
 
      setContent({...content,selectedImg:e.target.currentSrc,name:e.target.alt})
      const allGalleryImg = document.querySelectorAll(".mediaGallerySelectedImg")
      allGalleryImg.forEach(item=> item.classList.remove("mediaGallerySelectedImg"))
      e.target.classList.add("mediaGallerySelectedImg")
    }
    
    const handleClick=(e)=> {
      e.preventDefault();
      let isContentEmpty = Object.values(content).some(items => items === '');
      if(isContentEmpty ) {
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
            <h3 className="fw-bold">Inline icon</h3>
            <p>Example component</p>
            <PreviewCodeComponent
              basicCode={basicCode}
              theCss={theCss}
              img={inlineIconImg}
              videoUrl="https://res.cloudinary.com/dsppwrq84/video/upload/v1629927293/inlineIconHowTo_smwkxl.mov"
            />
          </div>

          {/* START HERE */}
          <Row>
            <Col md={6} id="left-side">
              <section id="colorButtons">
                <h4>Select color</h4>
                <Row>
                  <Col md={2} className="colors ">
                    <button
                      className="inline-icon-general-dark-btn colorBtn"
                      onClick={e => {
                        setSelectedColor("inline-icon-general-dark")
                        setPreview(false)
                        setErrorMessage(false)
                      }}
                    ></button>
                  </Col>

                  <Col md={2} className="colors ">
                    <button
                      className="inline-icon-bank-dark-btn colorBtn"
                      onClick={e => {
                        setSelectedColor("inline-icon-ob-dark")
                        setPreview(false)
                        setErrorMessage(false)
                      }}
                    ></button>
                  </Col>

                  <Col md={2} className="colors ">
                    <button
                      className="inline-icon-gov-dark-btn colorBtn"
                      onClick={e => {
                        setSelectedColor("inline-icon-og-dark")
                        setPreview(false)
                        setErrorMessage(false)
                      }}
                    ></button>
                  </Col>

                  <Col md={2} className="colors ">
                    <button
                      className="inline-icon-health-dark-btn colorBtn"
                      onClick={e => {
                        setSelectedColor("inline-icon-oh-dark")
                        setPreview(false)
                        setErrorMessage(false)
                      }}
                    ></button>
                  </Col>

                  <Col md={2} className="colors ">
                    <button
                      className="inline-icon-sustain-dark-btn colorBtn"
                      onClick={e => {
                        setSelectedColor("inline-icon-os-dark")
                        setPreview(false)
                        setErrorMessage(false)
                      }}
                    ></button>
                  </Col>
                </Row>
              </section>
            </Col>
            <Col md={6}></Col>
          </Row>
          <div className="row">
            <div className="col-md-6">
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
            <div className="col-md-6">
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
            </div>
          </div>

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

          {/* THE PREVIEW */}
          <div className="row">
            <div className="col-md-12">
              {preview && <div dangerouslySetInnerHTML={{ __html: theHtml }} />}
            </div>
          </div>
        </Container>
      </Layout>
    )
}


export const query  = graphql `
query Media {
    allStrapiMedia(filter: {name: {regex: "/ICON /i"}}) {
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