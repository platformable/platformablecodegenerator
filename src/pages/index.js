import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container,Row,Col,Card,Button } from "react-bootstrap"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <h3>Select html generator </h3>
      <Row>
      <Col md={{ span: 3, offset: 0 }} className="mt-1">
          <Card>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
            <Card.Body>
              <Card.Title>Inline Icon Component</Card.Title>
              <Card.Text>
                All options
              </Card.Text>
              <Link to="/media"><Button variant="primary" className="">Create</Button></Link>
            </Card.Body>
          </Card>
        </Col>
      <Col md={{ span: 3, offset: 0 }} className="mt-1">
          <Card>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
            <Card.Body>
              <Card.Title>Roadmap Component</Card.Title>
              <Card.Text>
                All options
              </Card.Text>
              <Link to="/roadmap"><Button variant="primary" className="">Create</Button></Link>
            </Card.Body>
          </Card>
        </Col>
      <Col md={{ span: 3, offset: 0 }} className="mt-1">
          <Card>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
            <Card.Body>
              <Card.Title>Labs Text Component</Card.Title>
              <Card.Text>
                All options
              </Card.Text>
              <Link to="/labsBlogComponent"><Button variant="primary" className="">Create</Button></Link>
            </Card.Body>
          </Card>
        </Col>
      <Col md={{ span: 3, offset: 0 }} className="mt-1">
          <Card>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
            <Card.Body>
              <Card.Title>Labs Post Header</Card.Title>
              <Card.Text>
                All options
              </Card.Text>
              <Link to="/labsHeader"><Button variant="primary" className="">Create</Button></Link>
            </Card.Body>
          </Card>
        </Col>
      <Col md={{ span: 3, offset: 0 }} className="mt-1">
          <Card>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
            <Card.Body>
              <Card.Title>Persona`s Card</Card.Title>
              <Card.Text>
                All options
              </Card.Text>
              <Link to="/personas"><Button variant="primary" className="">Create</Button></Link>
            </Card.Body>
          </Card>
        </Col>
      <Col md={{ span: 3, offset: 0 }} className="mt-1">
          <Card>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
            <Card.Body>
              <Card.Title>Table</Card.Title>
              <Card.Text>
                All options
              </Card.Text>
              <Link to="/table"><Button variant="primary" className="">Create</Button></Link>
            </Card.Body>
          </Card>
        </Col>
      <Col md={{ span: 3, offset: 0 }} className="mt-1">
          <Card>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
            <Card.Body>
              <Card.Title>Small Quote</Card.Title>
              <Card.Text>
                All options
              </Card.Text>
              <Link to="/small-quote"><Button variant="primary" className="">Create</Button></Link>
            </Card.Body>
          </Card>
        </Col>
      <Col md={{ span: 3, offset: 0 }} className="mt-1">
          <Card>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
            <Card.Body>
              <Card.Title>Large Quote</Card.Title>
              <Card.Text>
                All options
              </Card.Text>
              <Link to="/large-quote"><Button variant="primary" className="">Create</Button></Link>
            </Card.Body>
          </Card>
        </Col>
      <Col md={{ span: 3, offset: 0 }} className="mt-1">
          <Card>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
            <Card.Body>
              <Card.Title>W Box</Card.Title>
              <Card.Text>
                All options
              </Card.Text>
              <Link to="/w-box"><Button variant="primary" className="">Create</Button></Link>
            </Card.Body>
          </Card>
        </Col>
      <Col md={{ span: 3, offset: 0 }} className="mt-1">
          <Card>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
            <Card.Body>
              <Card.Title>Summary Box</Card.Title>
              <Card.Text>
                All options
              </Card.Text>
              <Link to="/summary-box"><Button variant="primary" className="">Create</Button></Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={{ span: 3, offset: 0 }} className="mt-1">
          <Card>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
            <Card.Body>
              <Card.Title>Inset Box</Card.Title>
              <Card.Text>
                All options
              </Card.Text>
              <Link to="/inset-box"><Button variant="primary" className="">Create</Button></Link>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={{ span: 3, offset: 0 }} className="mt-1">
          <Card>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
            <Card.Body>
              <Card.Title>Pricing Table</Card.Title>
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
              <Card.Title>Simple Table</Card.Title>
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
              <Card.Title>Persona Card 1</Card.Title>
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
              <Card.Title>Persona Card 2</Card.Title>
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
              <Card.Title>Persona Card Top Img</Card.Title>
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
              <Card.Title>Blockquote 1</Card.Title>
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
              <Card.Title>Blockquote 2</Card.Title>
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
              <Card.Title>Blockquote 3</Card.Title>
              <Card.Text>
                Blockquote with image 
              </Card.Text>
              <Link to="/blockquote3"><Button variant="primary" className="">Create</Button></Link>
            </Card.Body>
          </Card>
        </Col>

       
      </Row>
    </Container>
  </Layout>
)

export default IndexPage
