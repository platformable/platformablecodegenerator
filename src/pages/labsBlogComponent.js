import React, {useState,useEffect} from 'react'
import Layout from '../components/layout'
import { Container, Row, Form, Button,Col } from 'react-bootstrap'

import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  loader: () => import('../components/RichEditorComponent'),
  loading: "Loading",
});

export default function LabsBlogComponent() {

    const [preview, updatePreview] = useState(false);
    const [content, updateContent] = useState("")
    const handleClick = ()=> {
        updatePreview(true)
    }

    const [globalWindow,setGlobalWindow]=useState(false)

    useEffect(()=>{
      if(typeof window !== "undefined") {
        setGlobalWindow(true)
    } 
    },[])

    const handleTest=(data) => {
      updateContent(data)
      }

    const html =`<div class="lab-text-img-component-container">
    <div class=" labs-text-img-component">
      <div class="labs-text-img-component">
        <img src="https://res.cloudinary.com/platform1/image/upload/v1623947770/Labs_c8c4b81e63.png" alt="">
      </div>
      <div class="labs-top-bar-posts-text">
    <h3>Challenge</h3>  </div>
    </div>
        <p>${content}</p>
      </div>`


    return (
     <Layout>
         <Container>
             <Row>
                 <h3 className="font-weight-bold mb-5">Labs Blog Text Component</h3>

                 <Col md={12}>

                {/*  */}
              <LoadableComponent handleTest={handleTest}/>
                 </Col>
             </Row>





             <Row>
                 <Col md="12">
                 <Button variant="primary" type="submit" onClick={handleClick} className="my-5">
                Create
              </Button>
                 </Col>
             </Row>

             <Row>
                 <Col md={12}>
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
                 </Col>
                
                {preview && 
                 <Row>
                   <Col md={12} className="code-block">
                   <code
          onClick={() => {
            navigator.clipboard.writeText(html)
          }}
        >
          {html}
        </code>
                   </Col>
                 </Row> }

                 <Row>
                <Col md={12}>
               
             {preview && <><div dangerouslySetInnerHTML={{ __html: html }}/></>}   
           
                </Col>
            </Row>
             </Row>
         </Container>

     </Layout>
    )
}
