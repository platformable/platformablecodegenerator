import React, { useState, useEffect } from "react"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import Layout from "../components/layout"
import PersonaImg from "../../static/previewThumbnails/personaThumbnail.png"
import CopyToClipboardBtn from "../components/CopyToClipboardBtn"
import SingleColorButton from '../components/SingleColorButton'
import HeaderComponent from '../components/HeaderComponent'
import BlogComponentsErrorMessage from "../components/blogComponentsErrorMessage"
import SEO from "../components/seo"
import colorFunction from "../components/colorsForComponents.js";
export default function Personas() {
  const [selectedCard, setSelectedCard] = useState("")
  const [errorMessage, setErrorMessage] = useState(false)
  const [cardContent, setCardContent] = useState({
    content: "",
    subtitle: "",
  })
  const { personaColors } = colorFunction();
  const [selectedColor, setSelectedColor] = useState("")
  const [preview, setPreview] = useState(false)


  useEffect(() => {
    addBorder()
  }, [selectedColor])

  useEffect(() => {
    addBorder()
  }, [])

  useEffect(() => {
    addBordertoColor()
  }, [])
  useEffect(() => {
    if (!cardContent.content && !cardContent.subtitle) {
      setPreview(false)
    }
  }, [cardContent])

  const addBordertoColor = () => {
    const allWrappers = document.querySelectorAll(".colors button")
    allWrappers.forEach(element => {
      element.addEventListener(
        "click",
        () => {
          const prevSelected = document.querySelectorAll(".colors button")
          prevSelected.forEach(selection => (selection.style.border = "0"))

          element.style.border = "5px solid #fff"
        },
        false
      )
    })
  }
  const personasList = [
    {
      name: "API tool providers and consultants",
      url:
        "https://res.cloudinary.com/platform1/image/upload/v1631892660/Persona_ICON_API_tool_providers_863909b617.png",
      color: "api-tools-provider",
    },
    {
      name: "Regulators",
      url:
        "https://res.cloudinary.com/platform1/image/upload/v1631892805/Persona_ICON_Regulator_ec603f6c92.png",
      color: "regulator",
    },
    {
      name: "Fintech Associations",
      url:
        "https://res.cloudinary.com/platform1/image/upload/v1631892453/Persona_Fintech_Aso_ICON_18125ac8c5.png",
      color: "fintech-associantions",
    },
    {
      name: "Banks",
      url:
        "https://res.cloudinary.com/platform1/image/upload/v1623688309/banks_5677bc5a64.png",
      color: "banks",
    },
    {
      name: "Fintech",
      url:
        "https://res.cloudinary.com/platform1/image/upload/v1623688314/fintechs_537b5f845c.png",
      color: "fintechs",
    },
    {
      name: "Financial inclusion advocates",
      url:
        "https://res.cloudinary.com/platform1/image/upload/v1623688309/Financial_Inclusion_39af4b9b50.png",
      color: "financial-inclusion",
    },
    {
      name: "Policy Lead",
      url:
        "https://res.cloudinary.com/platform1/image/upload/v1625052721/Personas_Policy_Lead_265913d654.png",
      color: "policy-lead",
    },
    {
      name: "Digital Government Lead",
      url:
        "https://res.cloudinary.com/platform1/image/upload/v1625052794/Personas_Digital_Gov_Lead_3e539d4909.png",
      color: "dg-lead",
    },
    {
      name: "Product Manager Lead",
      url:
        "https://res.cloudinary.com/platform1/image/upload/v1623688299/Policy_Leads_b1fad49ca4.png",
      color: "pm-lead",
    },
    {
      name: "API architects and developers",
      url:
        "https://res.cloudinary.com/platform1/image/upload/v1625052794/Personas_Developer_4903ab395f.png",
      color: "api-architects",
    },
    ,
    {
      name: "Greentech founder",
      url:
        "https://res.cloudinary.com/platform1/image/upload/v1641985128/Greentech_Founder_129f9c4118.png",
      color: "api-architects",
    },
    {
      name: "Open Banking-Open Finance or Innovation Lead at a Bank",
      url:
        "https://res.cloudinary.com/platform1/image/upload/v1641985128/Open_Banking_Open_Finance_or_Innovation_Lead_at_a_Bank_0dee65d746.png",
      color: "api-architects",
    },
    {
      name: "Fintech Platform Provider",
      url:
        "https://res.cloudinary.com/platform1/image/upload/v1641985128/Fintech_Platform_Provider_1b219421e9.png",
      color: "api-architects",
    },
    ,
    {
      name: "Financial inclusion advocate",
      url:
        "https://res.cloudinary.com/platform1/image/upload/v1641985124/Financial_inclusion_advocate_baf72b78d5.png",
      color: "api-architects",
    },
    {
      name: "Non-Goverment Organizations Persona",
      url:
        "https://res.cloudinary.com/platform1/image/upload/v1641985126/Non_Goverment_Organizations_Persona_5afd032ed0.png",
      color: "api-architects",
    },
    {
      name: "Equity Tech Persona",
      url:
        "https://res.cloudinary.com/platform1/image/upload/v1641985122/Equity_Tech_Persona_b6e8ea6139.png",
      color: "api-architects",
    },
    {
      name: "Data Governance Lead Persona",
      url:
        "https://res.cloudinary.com/platform1/image/upload/v1641985122/Data_Governance_Lead_Persona_62f7631c46.png",
      color: "api-architects",
    },
    {
      name: "Health Policy Lead Persona",
      url:
        "https://res.cloudinary.com/platform1/image/upload/v1641985126/Health_Policy_Lead_Persona_e74af75353.png",
      color: "api-architects",
    },
    {
      name: "Incubator Program Manager",
      url:
        "https://res.cloudinary.com/platform1/image/upload/v1641985125/Incubator_Program_Manager_d32de233eb.png",
      color: "api-architects",
    },
    {
      name: "Health Tech Persona",
      url:
        "https://res.cloudinary.com/platform1/image/upload/v1641985122/Health_Tech_Persona_35485a3162.png",
      color: "api-architects",
    },
  ]

  const addBorder = () => {
    const allWrappers = document.querySelectorAll(".persona-codegen-wrapper")
    allWrappers.forEach(element => {
      element.addEventListener(
        "click",
        () => {
          const prevSelected = document.querySelectorAll(
            ".persona-codegen-wrapper"
          )
          prevSelected.forEach(selection => (selection.style.border = "0"))

          element.style.border = "3px solid #1b014c"
        },
        false
      )
    })
  }
  const theHtml = `
<div class="main-personas ${selectedColor}">
    <div class="personas-top">
        <div class="personas-img-left">
            <img src=${selectedCard.url} alt="" className="align-self-center"/>
        </div>
    <div class="personas-text-left">
        <div class="personas-title"><h3>${selectedCard.name}</h3></div>
        <div class="personas-subtitle">${cardContent.subtitle}</div>
    </div>
    </div>
    <div class="personas-bottom-text">
        <p>${cardContent.content}</p>
    </div>
</div>
`
  const handleClick = e => {
    e.preventDefault()

    let isCardContentEmpty = Object.values(cardContent).some(
      items => items === ""
    )
    if (selectedCard === "" || isCardContentEmpty || selectedColor === "") {
      setErrorMessage(true)
    } else {
      setPreview(true)
      setErrorMessage(false)
    }
  }

  return (
    <Layout>
      <SEO title="Persona" />
      <Container className="my-5">
        <HeaderComponent componentName="Persona Card" image={PersonaImg} video={"https://res.cloudinary.com/dsppwrq84/video/upload/v1629927501/personaHowTo_w0vvuy.mov"} />
        <div className="row">
          <div className="col-md-12">
            <h4 className="mt-3">Select Persona</h4>
            <Row>
              {personasList.map((persona, index) => {
                return (
                  <Col
                    xs={6}
                    sm={4}
                    md={4}
                    lg={2}
                    className="persona-codegen-wrapper my-3  justify-content-center"
                    onClick={() => {
                      setErrorMessage(false)
                      setSelectedCard(persona)
                    }}
                  >
                    <Col
                      md={12}
                      className="rounded bg-light text-center p-2 d-flex flex-column justify-content-center items-center"
                    >
                      <div className=" d-flex  justify-content-center ">
                        <img
                          src={persona.url}
                          alt={persona.name}
                          className="align-self-center"
                        />
                      </div>
                      <h3 className="small-text my-2 font-weight-bold">
                        {persona.name}
                      </h3>
                    </Col>
                  </Col>
                )
              })}
            </Row>
            <Row className="g-5">
              <Col md={6} id="left-side">
                <section id="colorButtons">
                  <h4 className="px-0 mx-0 my-3">Select color</h4>
                  <div className="d-flex flex-column flex-md-row">
                    {personaColors.map((color, index) => <SingleColorButton key={index} colorClass={color.class} onSelectColor={() => {
                      setSelectedColor(color.color)
                      setErrorMessage(false)
                    }} />)}
                  </div>
                </section>
                <Col md={12}>
                  <Form.Group controlId="">
                    <Form.Label>Subtitle text</Form.Label>
                    <Form.Control
                      type="text"
                      onChange={e => {
                        setCardContent({
                          ...cardContent,
                          subtitle: e.target.value,
                        })
                      }}
                    />
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group controlId="">
                    <Form.Label>Quote Content</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={12}
                      onChange={e => {
                        setCardContent({
                          ...cardContent,
                          content: e.target.value,
                        })
                      }}
                    />
                  </Form.Group>
                </Col>
                <Button
                  variant="primary"
                  type="submit"
                  onClick={handleClick}
                  className="my-5 btn-mainColor"
                >
                  Create Persona
                </Button>
              </Col>
              <Col md={6} id="right-side">
                <h4 className="my-3">Your code & preview </h4>
                <Col md={12} className="my-5">
                  {errorMessage ? (
                    <BlogComponentsErrorMessage message="Please complete all the fields" />
                  ) : null}
                  <div className="d-flex justify-content-between">
                    {preview && (
                      <>
                        {" "}
                        <h6 className="">Copy your code:</h6>
                        <CopyToClipboardBtn theHtml={theHtml} />{" "}
                      </>
                    )}
                  </div>
                </Col>
                {preview ? (
                  <Row>
                    <Col md={12} className="">
                      <div dangerouslySetInnerHTML={{ __html: theHtml }} />
                    </Col>
                    <Col md={12}>
                      <code
                        onClick={() => {
                          navigator.clipboard.writeText(theHtml)
                        }}
                        aria-hidden="true"
                      >
                        <pre>{theHtml}</pre>
                      </code>
                    </Col>
                  </Row>
                ) : null}
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </Layout>
  )
}
