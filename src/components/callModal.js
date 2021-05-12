import React, {useState} from  'react'
import {Modal, Button} from 'react-bootstrap'
import ModalPreview from '../components/modalPreview'

function CallModal({theHtml,selectedColor}) {
  const [show, setShow] = useState(false);
 

  return (
    <>
      <Button variant="" onClick={() => setShow(true)}>
      <img src="https://img.icons8.com/plumpy/24/000000/preview-pane.png"/>
      </Button>
      {show && <ModalPreview show={show} onHide={() => setShow(false)} theHtml={theHtml} selectedColor={selectedColor}/>}
    </>
  );
}

export default CallModal;

