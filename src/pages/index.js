import React from "react"
import { Link } from "gatsby"

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
import BannerImg from '../../static/frontbanner.png'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="py-5 frontbanner">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <img src={BannerImg} />
          </div>
        </div>
      </div>
    </section>
    <Container>
      <h6 className="fw-bold my-5">Select html generator</h6>
      <Row>
      <Col md={{ span: 3, offset: 0 }} className="mt-1">
          <Card>
            <Card.Img variant="top" src={inlineIconImg} />
            <Card.Body>
              <h6 className="fw-bold">Test Component</h6>
              <Link to="/tabsTest"><Button variant="primary" className="">Create</Button></Link>
            </Card.Body>
          </Card>
        </Col>
      <Col md={{ span: 3, offset: 0 }} className="mt-1">
          <Card>
            <Card.Img variant="top" src={inlineIconImg} />
            <Card.Body>
              <h6 className="fw-bold">Inline Icon Component</h6>
              <Link to="/media"><Button variant="primary" className="">Create</Button></Link>
            </Card.Body>
          </Card>
        </Col>
      <Col md={{ span: 3, offset: 0 }} className="mt-1">
          <Card>
            <Card.Img variant="top" src={roadmapImg} />
            <Card.Body>
              <h6 className="fw-bold">Roadmap Component</h6>
              <Link to="/roadmap"><Button variant="primary" className="">Create</Button></Link>
            </Card.Body>
          </Card>
        </Col>
      <Col md={{ span: 3, offset: 0 }} className="mt-1">
          <Card>
            <Card.Img variant="top" src={labsTextImg} />
            <Card.Body>
              <h6 className="fw-bold">Labs Text Component</h6>
              <Link to="/labsBlogComponent"><Button variant="primary" className="">Create</Button></Link>
            </Card.Body>
          </Card>
        </Col>
      <Col md={{ span: 3, offset: 0 }} className="mt-1">
          <Card>
            <Card.Img variant="top" src={labsPostImg} />
            <Card.Body>
              <h6 className="fw-bold">Labs Post Header</h6>
              <Link to="/labsHeader"><Button variant="primary" className="">Create</Button></Link>
            </Card.Body>
          </Card>
        </Col>
      <Col md={{ span: 3, offset: 0 }} className="mt-1">
          <Card>
            <Card.Img variant="top" src={PersonaImg} />
            <Card.Body>
              <h6 className="fw-bold">Persona`s Card</h6>
              <Link to="/personas"><Button variant="primary" className="">Create</Button></Link>
            </Card.Body>
          </Card>
        </Col>
      <Col md={{ span: 3, offset: 0 }} className="mt-1">
          <Card>
            <Card.Img variant="top" src={tableImg} />
            <Card.Body>
              <h6 className="fw-bold">Table</h6>
              <Link to="/table"><Button variant="primary" className="">Create</Button></Link>
            </Card.Body>
          </Card>
        </Col>
      <Col md={{ span: 3, offset: 0 }} className="mt-1">
          <Card>
            <Card.Img variant="top" src={smallQuoteImg} />
            <Card.Body>
              <h6 className="fw-bold">Small Quote</h6>
              <Link to="/small-quote"><Button variant="primary" className="">Create</Button></Link>
            </Card.Body>
          </Card>
        </Col>
      <Col md={{ span: 3, offset: 0 }} className="mt-1">
          <Card>
            <Card.Img variant="top" src={largeQuoteImg} />
            <Card.Body>
              <h6 className="fw-bold">Large Quote</h6>
              <Link to="/large-quote"><Button variant="primary" className="">Create</Button></Link>
            </Card.Body>
          </Card>
        </Col>
      <Col md={{ span: 3, offset: 0 }} className="mt-1">
          <Card>
            <Card.Img variant="top" src={wBoxImg} />
            <Card.Body>
              <h6 className="fw-bold">W Box</h6>
              <Link to="/w-box"><Button variant="primary" className="">Create</Button></Link>
            </Card.Body>
          </Card>
        </Col>
      <Col md={{ span: 3, offset: 0 }} className="mt-1">
          <Card>
            <Card.Img variant="top" src={summaryBoxImg} />
            <Card.Body>
              <h6 className="fw-bold">Summary Box</h6>
              <Link to="/summary-box"><Button variant="primary" className="">Create</Button></Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={{ span: 3, offset: 0 }} className="mt-1">
          <Card>
            <Card.Img variant="top" src={insetBox} />
            <Card.Body>
              <h6 className="fw-bold">Inset Box</h6>
              <Link to="/inset-box"><Button variant="primary" className="">Create</Button></Link>
            </Card.Body>
          </Card>
        </Col>
        
        {/* <Col md={{ span: 3, offset: 0 }} className="mt-1">
          <Card>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
            <Card.Body>
              <h6>Pricing Table</h6>
              <Card.Text>
                Purple
              </Card.Text>
              <Link to="/pricingTable1"><Button variant="primary" className="">Create</Button></Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={{ span: 3, offset: 0 }} className="mt-1">
          <Card>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
            <Card.Body>
              <h6>Simple Table</h6>
              <Card.Text>
                Multiple color options
              </Card.Text>
              <Link to="/pricingTable2"><Button variant="primary" className="">Create</Button></Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={{ span: 3, offset: 0 }} className="mt-1">
          <Card>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
            <Card.Body>
              <h6>Persona Card 1</h6>
              <Card.Text>
                Horizontal Card
              </Card.Text>
              <Link to="/personaCard1"><Button variant="primary" className="">Create</Button></Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={{ span: 3, offset: 0 }} className="mt-1">
          <Card>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
            <Card.Body>
              <h6>Persona Card 2</h6>
              <Card.Text>
                Vertical Card
              </Card.Text>
              <Link to="/personaCard2"><Button variant="primary" className="">Create</Button></Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={{ span: 3, offset: 0 }} className="mt-1">
          <Card>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
            <Card.Body>
              <h6>Persona Card Top Img</h6>
              <Card.Text>
                Image on top
              </Card.Text>
              <Link to="/personaCard3"><Button variant="primary" className="">Create</Button></Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={{ span: 3, offset: 0 }} className="mt-1">
          <Card>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
            <Card.Body>
              <h6>Blockquote 1</h6>
              <Card.Text>
                Simple blockquote 
              </Card.Text>
              <Link to="/blockquote1"><Button variant="primary" className="">Create</Button></Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={{ span: 3, offset: 0 }} className="mt-1">
          <Card>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
            <Card.Body>
              <h6>Blockquote 2</h6>
              <Card.Text>
                3 Parragrah blockquote
              </Card.Text>
              <Link to="/blockquote2"><Button variant="primary" className="">Create</Button></Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={{ span: 3, offset: 0 }} className="mt-1">
          <Card>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
            <Card.Body>
              <h6>Blockquote 3</h6>
              <Card.Text>
                Blockquote with image 
              </Card.Text>
              <Link to="/blockquote3"><Button variant="primary" className="">Create</Button></Link>
            </Card.Body>
          </Card>
        </Col> */}

       
      </Row>
    </Container>
  </Layout>
)

export default IndexPage
