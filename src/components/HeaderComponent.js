import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
const HeaderComponent=(props)=>{
    return (
      <div>
        <Row >
          <h3 className="fw-bold">{props.componentName}</h3>
        </Row>
        <Row className="mb-5">
          <Col md={6}>
            <h4 className="py-3">Component preview</h4>
            <img src={props.image}></img>
          </Col>
          <Col md={6}>
            <div>
              <h4 className="py-3">How to use the component</h4>
              <video className="w-100" width="720" controls>
                <source
                  src={props.video}
                  type="video/mov"
                />
                <source
                  src={props.video}
                  type="video/ogg"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </Col>
        </Row>
      </div>
    )

}
export default HeaderComponent;