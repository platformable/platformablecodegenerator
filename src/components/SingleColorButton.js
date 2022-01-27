import React, { useState, useEffect } from "react"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
const SingleColorButton = (props) => {
    const handleClick = (e) => {
        props.onSelectColor()
    }
    return (
        <Col md={2} className="colors ">
            <button
                className={`${props.colorClass} colorBtn`}
                onClick={handleClick}>
            </button>
        </Col>)
}
export default SingleColorButton