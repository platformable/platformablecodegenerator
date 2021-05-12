import React from 'react'
import {Modal, Button} from 'react-bootstrap'
export default function ModalPreview({show, onHide,theHtml, selectedColor}) {
    return (
        <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header >
        <Modal.Title id="contained-modal-title-vcenter">
          Element Preview
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div
        dangerouslySetInnerHTML={{ __html: theHtml }}
        className={`text-white shadow-sm px-3 py-3 rounded ${selectedColor}`}
      />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    )
}
