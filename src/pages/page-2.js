import React, {useState} from  'react'
import {Modal, Button} from 'react-bootstrap'
import ModalPreview from '../components/modalPreview'

function CallModalx({theHtml}) {
  const [show, setShow] = useState(false);
 

  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
        Custom Width Modal
      </Button>
      {show && <ModalPreview show={show} onHide={() => setShow(false)} html={theHtml}/>}
    </>
  );
}

export default CallModalx;

