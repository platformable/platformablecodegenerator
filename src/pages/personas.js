import React,{useState,useEffect} from 'react'
import { Container,Row, Col, Form, Button } from 'react-bootstrap'
import Layout from '../components/layout'
import PersonaImg from '../../static/previewThumbnails/personaThumbnail.png'
import CopyToClipboardBtn from "../components/CopyToClipboardBtn"
import PreviewCodeComponent from "../components/previewCodeComponent"


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

const basicCode = `
<div class="main-personas">
    <div class="personas-top">
        <div class="personas-img-left">
            <img src="" alt="" className="align-self-center"/>
        </div>
    <div class="personas-text-left">
        <div class="personas-title"><h3></h3></div>
        <div class="personas-subtitle"></div>
    </div>
    </div>
    <div class="personas-bottom-text">
        <p></p>
    </div>
</div>
`

const theHtml = `
<div class="main-personas ${selectedCard.color}">
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

const theCss =`
/* // PERSONA´S CARD // */

.main-personas {
  margin:20px 0;
  max-width:800px;
  margin: 20px auto;  
}

.personas-top {
  display:flex;
  color:white;
  align-items: center;
  border-top-left-radius:10px;
  border-top-right-radius:10px;
  padding:20px 0;
}

.personas-top img {
  max-width:80px;
  height:80px;
  position:relative;
  left:-30px;
  border-radius:60%;
  padding:10px;
}

.personas-top h3 {
  font-weight: bold;
  position:relative;

}

.personas-subtitle {
position:relative;

}

.personas-bottom-text {
  padding:20px;
  border-bottom-left-radius:10px;
  border-bottom-right-radius:10px;
}

.api-tools-provider .personas-top, .regulator .personas-top ,.api-architects .personas-top{
  background-color:#FFD23F;
  color:white;

}
.api-tools-provider .personas-bottom-text, .api-tools-provider .personas-top img,
.regulator .personas-bottom-text, .regulator .personas-top img,.api-architects .personas-bottom-text ,.api-architects .personas-top img
{
  background-color:#FFE590;
}

.fintech-associantions .personas-top,.banks .personas-top,.fintechs .personas-top,.financial-inclusion .personas-top {
  background-color:#FB5012;
  color:white;
}

.fintech-associantions .personas-top img,.banks .personas-top img,.fintechs .personas-top img,.financial-inclusion .personas-top img,
.fintech-associantions .personas-bottom-text,.banks .personas-bottom-text,.fintechs .personas-bottom-text,.financial-inclusion .personas-bottom-text 
{
  background-color:var(--red-orange-light);
  color:var(--russian-violet-dark)
}


.policy-lead .personas-top,.dg-lead .personas-top,.pm-lead .personas-top {
  background-color:var(--og-dark);
  color:white;
}

.policy-lead .personas-top img,.dg-lead .personas-top img,.pm-lead .personas-top img,
.policy-lead .personas-bottom-text,.dg-lead .personas-bottom-text,.pm-lead .personas-bottom-text 
{
  background-color:#D8C1FB;
  color:var(--russian-violet-dark)
}
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
            <Container className="my-5">
            <div className="row">
            <h3 className="fw-bold">Persona´s Card</h3>
              <p>Component Example</p>

          <PreviewCodeComponent basicCode={basicCode} theCss={theCss} img={PersonaImg}/>
          
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

            <Row className="">
                <Col md={6}>
                <Button variant="primary" type="submit" onClick={handleClick} className="my-5 btn-mainColor">
                Create Persona
              </Button>
             
                </Col>
                <Col md={6} className="my-5">
                <div className="d-flex justify-content-between"> 
            <h6 className="">Copy your code:</h6>          
            {preview && <CopyToClipboardBtn theHtml={theHtml} /> }
          </div>
                </Col>
            </Row>

{preview ?
            <Row>
                <Col md={6} className="">
                <div dangerouslySetInnerHTML={{ __html: theHtml }}/>
                </Col>
                <Col md={6}>
                <code
          onClick={() => {
            navigator.clipboard.writeText(theHtml)
          }}
        >
          <pre>{theHtml}</pre>
        </code>
               
                
           
                </Col>
            </Row>

:null}

            </Container>
        </Layout>
    )
}
