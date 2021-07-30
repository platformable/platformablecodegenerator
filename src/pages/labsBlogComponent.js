import React, {useState,useEffect} from 'react'
import Layout from '../components/layout'
import { Container, Row, Form, Button,Col } from 'react-bootstrap'
import labsTextImg from '../../static/previewThumbnails/labsTextThumbnail.png'
import Loadable from 'react-loadable';
import CopyToClipboardBtn from "../components/CopyToClipboardBtn"
import PreviewCodeComponent from "../components/previewCodeComponent"
import BlogComponentsErrorMessage from '../components/blogComponentsErrorMessage'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoadableComponent = Loadable({
  loader: () => import('../components/RichEditorComponent'),
  loading: "Loading",
});

export default function LabsBlogComponent() {
  const [errorMessage, setErrorMessage] =useState(false);
    const [preview, setPreview] = useState(false);
    const [content, updateContent] = useState("")


    const handleClick = ()=> {
      console.log("content",content)
    if(content === ""){
      setErrorMessage(true)
    } else{ 
      setPreview(true)
    }
    }

    const [globalWindow,setGlobalWindow]=useState(false)

    useEffect(()=>{
      if(typeof window !== "undefined") {
        setGlobalWindow(true)
    } 
    },[])

    const handleLabsBlogContent=(data) => {
      setErrorMessage(false)
      setPreview(false)
      updateContent(data)
      }

      const notify = () => {
        toast.success("Copied to Clipboard !", {
          position: toast.POSITION.TOP_RIGHT
        });
      };

      function handleCopy (){
        notify()
        navigator.clipboard.writeText(theHtml)

      }

      const basicCode =`
      <div class="lab-text-img-component-container">
              <div class=" labs-text-img-component">
                <div class="labs-text-img-component">
                  <img
                    src="https://res.cloudinary.com/platform1/image/upload/v1623947770/Labs_c8c4b81e63.png"
                    alt=""
                  />
                </div>
                <div class="labs-top-bar-posts-text">
                  <h3>Challenge</h3>{" "}
                </div>
              </div>
              <p>${content}</p>
        </div>
      `
    
      const theHtml =`
    <div class="lab-text-img-component-container">
            <div class=" labs-text-img-component">
              <div class="labs-text-img-component">
                <img
                  src="https://res.cloudinary.com/platform1/image/upload/v1623947770/Labs_c8c4b81e63.png"
                  alt=""
                />
              </div>
              <div class="labs-top-bar-posts-text">
                <h3>Challenge</h3>
              </div>
            </div>
            <p>${content}</p>
      </div>
    `
    const theCss = `
/* LABS BLOG COMPONENT */

.labs-text-img-component {
display:flex;
padding:10px 0;
gap:10px;
align-items: center;
border-radius:10px;
}

.labs-text-img-component img {
flex-grow:1;
max-width:95px;
}

.lab-text-img-component {
flex-grow:3;

}

.lab-text-img-component-container {
border-bottom:2px solid #a80075;
padding-bottom:20px;
}

@media (max-width:690px) {
.labs-text-img-component {
flex-wrap:wrap;
}

.labs-text-img-component {
display:flex;
justify-content:center;

}
}
    `



    return (
      <Layout>
        <Container className="my-5">
          <div className="row">
            <h3 className="fw-bold">Labs Blog Text Component</h3>
            <p>Example component</p>
            <PreviewCodeComponent basicCode={basicCode} theCss={theCss} img={labsTextImg}/>
          </div>
          <Row>
            <Col md={12}>
              {/*  */}
              <LoadableComponent handleLabsBlogContent={handleLabsBlogContent} setPreview={setPreview}/>
            </Col>
          </Row>

          

          <Row>
            <Col md="12">
              <Button
                variant="primary"
                type="submit"
                onClick={handleClick}
                className="my-5 btn-mainColor"
              >
                Create
              </Button>
            </Col>
          </Row>

          <Row>
            <Col md={12}>
            {errorMessage ? <BlogComponentsErrorMessage message="Please complete all the fields"/> : null}
              {preview ? (
                  <div className="d-flex justify-content-between"> 

    
                  <h6 className="">Copy your code:</h6>          
                  {preview &&    <div>
                  <div type="button" className="btn btn-light rounded " data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
                    <span className="d-inline-block">
                        <div
                          className="badge badge-warning block"
                          role="button"
                          onClick={handleCopy}
                        >
                          <img src="https://img.icons8.com/small/16/000000/copy-2.png" />
                        </div>
                        <ToastContainer />
                      </span>
                    </div>
                   </div> }
                 </div>
              ) : null}
            </Col>

            {preview && (
              <Row>
                <Col md={6}>
                {preview && (
                  <>
                    <div dangerouslySetInnerHTML={{ __html: theHtml }} />
                  </>
                )}
              </Col>
                <Col md={6} className="">
                  <code
                    onClick={() => {
                      navigator.clipboard.writeText(theHtml)
                    }}
                  >
                    <pre>{theHtml}</pre>
                  </code>
                </Col>
              </Row>
            )}
          </Row>
        </Container>
      </Layout>
    )
}
