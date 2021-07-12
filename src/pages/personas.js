import React,{useState,useEffect} from 'react'
import { Container,Row, Col, Form, Button } from 'react-bootstrap'
import Layout from '../components/layout'
import PersonaImg from '../../static/previewThumbnails/personaThumbnail.png'

export default function Personas() {

    const [persona,setPersona] = useState("")
    const [selectedCard,setSelectedCard]=useState({})
    const [error, setError]=useState(false)
    const [selectedColor,setSelectedColor]=useState("")
    const [cardContent,setCardContent]=useState({
        content:"",
        subtitle:""
    })
    const [preview,setPreview]=useState(false)

    useEffect(() => {
      addBorder()
    }, [])

    const personasList = [
        {
            name:"API tool providers and consultants",
            url:"https://res.cloudinary.com/platform1/image/upload/v1623688315/API_tool_providers_e30e05996d.png",
            color:"api-tools-provider"
        }
        ,
        {
            name:"Regulators",
            url:"https://res.cloudinary.com/platform1/image/upload/v1623688321/Persona_Regulator_5b7ec25523.png",
            color:"regulator"
        },
        {
            name:"Fintech Associations",
            url:"https://res.cloudinary.com/platform1/image/upload/v1623688323/Persona_Fintech_Association_e47b0d4384.png",
            color:"fintech-associantions"
        },
        {
            name:"Banks",
            url:"https://res.cloudinary.com/platform1/image/upload/v1623688309/banks_5677bc5a64.png",
            color:"banks"
        }
        ,{
            name:"Fintech",
            url:"https://res.cloudinary.com/platform1/image/upload/v1623688314/fintechs_537b5f845c.png",
            color:"fintechs"
        }
        ,{
            name:"Financial inclusion advocates",
            url:"https://res.cloudinary.com/platform1/image/upload/v1623688309/Financial_Inclusion_39af4b9b50.png",
            color:"financial-inclusion"
        }
        ,{
            name:"Policy Lead",
            url:"https://res.cloudinary.com/platform1/image/upload/v1625052721/Personas_Policy_Lead_265913d654.png",
            color:"policy-lead"
        }
        ,{
            name:"Digital Government Lead",
            url:"https://res.cloudinary.com/platform1/image/upload/v1625052794/Personas_Digital_Gov_Lead_3e539d4909.png",
            color:"dg-lead"
        }
        ,{
            name:"Product Manager Lead",
            url:"https://res.cloudinary.com/platform1/image/upload/v1623688299/Policy_Leads_b1fad49ca4.png",
            color:"pm-lead"
        }
        ,{
            name:"API architects and developers",
            url:"https://res.cloudinary.com/platform1/image/upload/v1625052794/Personas_Developer_4903ab395f.png",
            color:"api-architects"
        }
    ]

const addBorder =()=>{
    const allWrappers = document.querySelectorAll('.persona-codegen-wrapper');
    allWrappers.forEach((element)=> {
        element.addEventListener("click", ()=>{
            const prevSelected = document.querySelectorAll(".persona-codegen-wrapper")
            prevSelected.forEach(selection=> selection.style.border="0")
            
            element.style.border="3px solid #1b014c";

        }, false);
    })
}


const html = `
<div class="main-personas ${selectedCard.color}">
<div class="personas-top">
    <div class="personas-img-left">
        <img src=${selectedCard.url} alt="" className="align-self-center"/>
    </div>
    <div class="personas-text-left">
        <div class="personas-title"><h3>${selectedCard.name}</h3></div>
        <div class="personas-subtitle">${cardContent.subtitle}
        </div>
    </div>
</div>
<div class="personas-bottom-text">
    <p>${cardContent.content}</p>
</div>
</div>
`

const handleClick=(persona)=>{
if(persona !=="") {
    setPreview(true)
}
{
    setError(true)
}

}



    return (
        <Layout>
            <Container>
            <div className="row">
        <h3 className="fw-bold">Persona`s Card</h3>
          <p>Example component</p>
          <div className="component-example mt-2 mb-5 d-flex justify-center align-center">
            <div className="component-example-img">
              <img src={PersonaImg} alt="" className="img-thumbnail" />
            </div>
          </div>
        </div>
            <h4 className="">Select Persona</h4>
            <Row>
                    {personasList.map((persona,index)=>{
                        return (
                            <Col md={2} className="persona-codegen-wrapper my-3 " onClick={()=>{setSelectedCard(persona)}}>
                                <Col md={12} className="rounded bg-light text-center p-2 d-flex flex-column justify-content-center items-center">
                               <div className=" d-flex  justify-content-center "> <img src={persona.url} alt={persona.name} className="align-self-center"/></div>
                        <h3 className="small-text my-2 font-weight-bold">{persona.name}</h3>
                        </Col>
                        </Col>
                        )
                    })}
                
            </Row>

            <Row>
            <Col md={12}>
                <Form.Group controlId="">
                <Form.Label>Subtitle text</Form.Label>
                <Form.Control type="text" onChange={(e)=>{
                     setPreview(false)
                    setCardContent({...cardContent,subtitle:e.target.value});
                }}/>
              </Form.Group>
                </Col>
                <Col md={12}>
                <Form.Group controlId="">
                <Form.Label>Quote Content</Form.Label>
                <Form.Control as="textarea" rows={12}  onChange={(e)=>{
                    setPreview(false)
                    setCardContent({...cardContent,content:e.target.value});
                }}/>
              </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col>
                <Button variant="primary" type="submit" onClick={handleClick} className="my-5">
                Create Persona
              </Button>
              {preview ? <span className="d-inline-block p-2">
  
  <div
        className="badge badge-warning block"
        role="button"
        onClick={() => {
          navigator.clipboard.writeText(html)
        }}
      >
        <img className="btn" src="https://img.icons8.com/small/16/000000/copy-2.png" />
      </div>

</span>: null}
                </Col>
            </Row>

{preview ?
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
                <Col md={12}>
               
                <div dangerouslySetInnerHTML={{ __html: html }}/>
           
                </Col>
            </Row>

:null}

            </Container>
        </Layout>
    )
}
