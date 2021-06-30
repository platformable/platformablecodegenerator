import React, {useState} from  'react'
import {Modal, Button} from 'react-bootstrap'
import MediaModalPreview from '../components/mediaModalPreview'

function CallMediaModal({data,setSelectedImg}) {
  const [show, setShow] = useState(false);
 

  return (
    <>
      <Button variant="" onClick={() => setShow(true)}>
      <img src="https://img.icons8.com/plumpy/24/000000/preview-pane.png"/>
      </Button>
      {show && <MediaModalPreview show={show} onHide={() => setShow(false)} data={data} setSelectedImg={setSelectedImg}/>}
    </>
  );
}

export default CallMediaModal;

