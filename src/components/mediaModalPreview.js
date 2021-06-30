import React, { useEffect, useState } from "react"
import { Modal, Button } from "react-bootstrap"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Pagination from "./pagination"

export default function MediaModalPreview({ show, onHide, data,setSelectedImg }) {
  const list = data.allStrapiMedia.edges
  console.log(list)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(12)
  

  const indexOfLastPost = currentPage * postsPerPage
  const indexofFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = list.slice(indexofFirstPost, indexOfLastPost)
  
  
  /* Change Page */
  const paginate = pageNumber => {
    setCurrentPage(pageNumber)
  }

  return (
    <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Media Gallery
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="">
          <div className="row">
            <button onClick={()=> {
             /*  setSelectedImg("pruebaImg")
              console.log(selectedImg) */
            }
              }>add media</button>
            {currentPosts.map((item, index) => (
              <div className="col-md-3" key={index}>
                <GatsbyImage image={getImage(item.node.localFile)} alt={item.node.name} className="mediaGalleryThumbnail my-2"/>
              </div>
            ))}
          </div>

          <Pagination postsPerPage={postsPerPage} TotalPosts={list.length} paginate={paginate} />

    
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}
