import React, {useState} from 'react'
import {graphql,Link} from 'gatsby'
import Layout from '../components/layout'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import MediaModalPreview from '../components/mediaModalPreview'
import { StaticImage } from "gatsby-plugin-image"
import {OverlayTrigger, Tooltip} from 'react-bootstrap'



export default function Media({data}) {
  const [show, setShow] = useState(false);
  const [content,setContent]=useState({
    selectedImg:"",
    title:"",
    textContent:"",
    name:""
  })
  const [preview,setPreview]=useState(false)

  const html = `
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

    function getData(e){
 
      setContent({...content,selectedImg:e.target.currentSrc,name:e.target.alt})
      const allGalleryImg = document.querySelectorAll(".mediaGallerySelectedImg")
      allGalleryImg.forEach(item=> item.classList.remove("mediaGallerySelectedImg"))
      e.target.classList.add("mediaGallerySelectedImg")
    }
  const handleClick = () => {
    setPreview(true)
  }
    return (
        <Layout>
            <Container>
            <h3>Inline Icon</h3>
            <p>Select Image</p>
            <Button variant="" onClick={() => setShow(true)}>
            <img src="https://img.icons8.com/material-outlined/24/000000/image.png"/>     
            </Button>
            {content.selectedImg && (<p>Name: {content.name}</p>)}

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text"  onChange={(e) => {
                          setContent({...content,title:e.target.value});
                      
                        }}
                />
              </Form.Group>

              <Form.Group controlId="">
                <Form.Label>Content</Form.Label>
                <Form.Control as="textarea" rows={4} onChange={(e)=>{
                   setContent({...content,textContent:e.target.value});
                }}/>
              </Form.Group>

              <Button variant="primary" type="submit" onClick={handleClick} className="my-5">
                Get Code
              </Button>
          

            
          {show && <MediaModalPreview show={show} onHide={() => setShow(false)} data={data} getData={getData} className="mediaImg"/>}


                <Row>
                <Col md={12}>
                  {preview && <>
                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Copy to Clipboard</Tooltip>}>
  <span className="d-inline-block">
    {/* <Button disabled style={{ pointerEvents: 'none' }}>
      Disabled button
    </Button> */}
    <div
          className="badge badge-warning block"
          role="button"
          onClick={() => {
            navigator.clipboard.writeText(html)
          }}
        >
          <img src="https://img.icons8.com/small/16/000000/copy-2.png" />
        </div>
  </span>
</OverlayTrigger>
                  </>}
            {preview && <div dangerouslySetInnerHTML={{ __html: html }} />}
          </Col>
                </Row>

            </Container>
        </Layout>
    )
}


export const query  = graphql `
query Media {
    allStrapiMedia {
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