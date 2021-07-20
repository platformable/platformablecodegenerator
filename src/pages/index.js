import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container,Row,Col,Card,Button } from "react-bootstrap"

import insetBox from '../../static/previewThumbnails/insetBoxThumbnail.png'
import PersonaImg from '../../static/previewThumbnails/personaThumbnail.png'
import wBoxImg from '../../static/previewThumbnails/wBoxThumbnail.png'
import largeQuoteImg from '../../static/previewThumbnails/largeQuoteThumbnail.png'
import smallQuoteImg from '../../static/previewThumbnails/smallQuoteThumbnail.png'
import tableImg from '../../static/previewThumbnails/tableThumbnail.png'
import labsPostImg from '../../static/previewThumbnails/labsPostThumbnail.png'
import labsTextImg from '../../static/previewThumbnails/labsTextThumbnail.png'
import roadmapImg from '../../static/previewThumbnails/roadmapThumbnail.png'
import inlineIconImg from '../../static/previewThumbnails/inlineIconThumbnail.png'
import summaryBoxImg from '../../static/previewThumbnails/summaryBoxThumbnail.png'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="py-5 frontbanner">
      <div className="container">
        <div className="row d-flex align-items-center ">
          <div className="col-md-6 frontbanner-left">
            <h3 className="fs-1 fw-bold text-sm-start text-center">Blog Component Generator for Headless CMS</h3>
            <div className="bt-container flex justify-content-center text-sm-start text-center">
            <button className="btn btn-frontbanner-left mb-5 my-sm-2">Learn more</button>
            </div>
          </div>
          <div className="col-md-6 frontbanner-right flex justify-content-end">
          <StaticImage src="../../static/homepage-banner.png" alt="platformable codegenerator" />
          </div>
        </div>
      </div>
    </section>
    <Container>
      <h6 className="fw-bold mb-1 mt-5">Select html generator</h6>
      <hr />
      <Row className="main-blog-cards">
      <Col md={{ span: 3, offset: 0 }} className="mt-1 mb-4 ">
           <Card className="shadow">
          <Link to="/tabsTest"> <StaticImage src="../../static/previewThumbnails/inlineIconThumbnail.png" alt="platformable codegenerator" /></Link>
            <Card.Body>
            <Link to="/tabsTest"> <h6 className="fw-bold">Test Component</h6></Link>
            </Card.Body>
          </Card>
        </Col>
      <Col md={{ span: 3, offset: 0 }} className="mt-1 mb-4">
           <Card className="shadow">
          <Link to="/tabsTest"> <StaticImage src="../../static/previewThumbnails/inlineIconThumbnail.png" alt="platformable codegenerator" /></Link>
            <Card.Body>
            <Link to="/media"> <h6 className="fw-bold">Inline Icon</h6></Link>
            </Card.Body>
          </Card>
        </Col>
      <Col md={{ span: 3, offset: 0 }} className="mt-1 mb-4">
           <Card className="shadow">
          <Link to="/roadmap"> <StaticImage src="../../static/previewThumbnails/roadmapThumbnail.png" alt="platformable codegenerator" /></Link>
            <Card.Body>
            <Link to="/roadmap"><h6 className="fw-bold">Roadmap Component</h6></Link>
            </Card.Body>
          </Card>
        </Col>
      <Col md={{ span: 3, offset: 0 }} className="mt-1 mb-4">
           <Card className="shadow">
          <Link to="/labsBlogComponent"><StaticImage src="../../static/previewThumbnails/labsTextThumbnail.png" alt="platformable codegenerator" /></Link>
            <Card.Body>
            <Link to="/labsBlogComponent">  <h6 className="fw-bold">Labs Text</h6></Link>
            </Card.Body>
          </Card>
        </Col>
      <Col md={{ span: 3, offset: 0 }} className="mt-1 mb-4">
           <Card className="shadow">
          <Link to="/labsHeader"><StaticImage src="../../static/previewThumbnails/labsPostThumbnail.png" alt="platformable codegenerator" /></Link>

            <Card.Body>
            <Link to="/labsHeader"><h6 className="fw-bold">Labs Post Header</h6></Link>
            </Card.Body>
          </Card>
        </Col>
      <Col md={{ span: 3, offset: 0 }} className="mt-1 mb-4">
           <Card className="shadow">
          <Link to="/personas"><StaticImage src="../../static/previewThumbnails/personaThumbnail.png" alt="platformable codegenerator" /></Link>

            <Card.Body>
            <Link to="/personas"> <h6 className="fw-bold">Persona`s Card</h6></Link>
            </Card.Body>
          </Card>
        </Col>
      <Col md={{ span: 3, offset: 0 }} className="mt-1 mb-4">
           <Card className="shadow">
          <Link to="/table"><StaticImage src="../../static/previewThumbnails/tableThumbnail.png" alt="platformable codegenerator" /></Link>
            <Card.Body>
            <Link to="/table"><h6 className="fw-bold">Table</h6></Link>
            </Card.Body>
          </Card>
        </Col>
      <Col md={{ span: 3, offset: 0 }} className="mt-1 mb-4">
           <Card className="shadow">
          <Link to="/small-quote"><StaticImage src="../../static/previewThumbnails/smallQuoteThumbnail.png" alt="platformable codegenerator" /></Link>
            <Card.Body>
            <Link to="/small-quote"><h6 className="fw-bold">Small Quote</h6></Link>
            </Card.Body>
          </Card>
        </Col>
      <Col md={{ span: 3, offset: 0 }} className="mt-1 mb-4">
           <Card className="shadow">
          <Link to="/large-quote"><StaticImage src="../../static/previewThumbnails/largeQuoteThumbnail.png" alt="platformable codegenerator" /></Link>
            <Card.Body>
            <Link to="/large-quote"> <h6 className="fw-bold">Large Quote</h6></Link>
            </Card.Body>
          </Card>
        </Col>
      <Col md={{ span: 3, offset: 0 }} className="mt-1 mb-4">
           <Card className="shadow">
          <Link to="/w-box"><StaticImage src="../../static/previewThumbnails/wBoxThumbnail.png" alt="platformable codegenerator" /></Link>
            <Card.Body>
            <Link to="/w-box"><h6 className="fw-bold">W Box</h6></Link>
            </Card.Body>
          </Card>
        </Col>
      <Col md={{ span: 3, offset: 0 }} className="mt-1 mb-4">
           <Card className="shadow">
          <Link to="/summary-box"><StaticImage src="../../static/previewThumbnails/summaryBoxThumbnail.png" alt="platformable codegenerator" /></Link>
            <Card.Body>
            <Link to="/summary-box"> <h6 className="fw-bold">Summary Box</h6></Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={{ span: 3, offset: 0 }} className="mt-1 mb-4">
           <Card className="shadow">
          <Link to="/inset-box"><StaticImage src="../../static/previewThumbnails/summaryBoxThumbnail.png" alt="platformable codegenerator" /></Link>
            <Card.Body>
            <Link to="/inset-box"><h6 className="fw-bold">Inset Box</h6></Link>
            </Card.Body>
          </Card>
        </Col>
        
        {/* <Col md={{ span: 3, offset: 0 }} className="mt-1 mb-4">
           <Card className="shadow">
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
            <Card.Body>
              <h6>Pricing Table</h6>
              <Card.Text>
                Purple
              </Card.Text>
              <Link to="/pricingTable1"><Button  className="btn-mainColor">Create</Button></Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={{ span: 3, offset: 0 }} className="mt-1 mb-4">
           <Card className="shadow">
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
            <Card.Body>
              <h6>Simple Table</h6>
              <Card.Text>
                Multiple color options
              </Card.Text>
              <Link to="/pricingTable2"><Button  className="btn-mainColor">Create</Button></Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={{ span: 3, offset: 0 }} className="mt-1 mb-4">
           <Card className="shadow">
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
            <Card.Body>
              <h6>Persona Card 1</h6>
              <Card.Text>
                Horizontal Card
              </Card.Text>
              <Link to="/personaCard1"><Button  className="btn-mainColor">Create</Button></Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={{ span: 3, offset: 0 }} className="mt-1 mb-4">
           <Card className="shadow">
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
            <Card.Body>
              <h6>Persona Card 2</h6>
              <Card.Text>
                Vertical Card
              </Card.Text>
              <Link to="/personaCard2"><Button  className="btn-mainColor">Create</Button></Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={{ span: 3, offset: 0 }} className="mt-1 mb-4">
           <Card className="shadow">
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
            <Card.Body>
              <h6>Persona Card Top Img</h6>
              <Card.Text>
                Image on top
              </Card.Text>
              <Link to="/personaCard3"><Button  className="btn-mainColor">Create</Button></Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={{ span: 3, offset: 0 }} className="mt-1 mb-4">
           <Card className="shadow">
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
            <Card.Body>
              <h6>Blockquote 1</h6>
              <Card.Text>
                Simple blockquote 
              </Card.Text>
              <Link to="/blockquote1"><Button  className="btn-mainColor">Create</Button></Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={{ span: 3, offset: 0 }} className="mt-1 mb-4">
           <Card className="shadow">
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
            <Card.Body>
              <h6>Blockquote 2</h6>
              <Card.Text>
                3 Parragrah blockquote
              </Card.Text>
              <Link to="/blockquote2"><Button  className="btn-mainColor">Create</Button></Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={{ span: 3, offset: 0 }} className="mt-1 mb-4">
           <Card className="shadow">
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
            <Card.Body>
              <h6>Blockquote 3</h6>
              <Card.Text>
                Blockquote with image 
              </Card.Text>
              <Link to="/blockquote3"><Button  className="btn-mainColor">Create</Button></Link>
            </Card.Body>
          </Card>
        </Col> */}

       
      </Row>
    </Container>
  </Layout>
)

export default IndexPage
