import React from 'react'
import "./firsthpart.css"
import { Col, Row } from 'react-bootstrap'
import logo2 from "../../../../src/assets/logo2.png"
import images7 from "../../../../src/assets/images7.jpg"
import images8 from "../../../../src/assets/images8.jpg"
import images9 from "../../../../src/assets/images9.jpg"


const Firsthpart = () => {
  return (
    <section id='first'>
        <div className="container">
            <Row>
                <Col lg={{span:4, offset:4}}>
                <div className="one">
                    <img src={logo2} alt="" />
                    <h2>Our Services</h2>
                    <p>We have been providing great flooring solutions service.</p>

                </div>
                </Col>
            </Row>

            <Row>
                <Col lg={4}>
                <div className="two">
                    <img src={images7} alt="" />
                    <h4>Marketing Strategy</h4>
                    <p>Social Media has changed the way we interact & do business while creating</p>
                    <h5>Read more</h5>

                </div>
                </Col>
                <Col lg={4}>
                <div className="two">
                    <img src={images8} alt="" />
                    <h4>Social Marketing</h4>
                    <p>Social Media has changed the way we interact & do business while creating</p>
                    <h5>Read more</h5>

                </div>
                </Col>
                <Col lg={4}>
                <div className="two">
                    <img src={images9} alt="" />
                    <h4>Content Marketing</h4>
                    <p>Social Media has changed the way we interact & do business while creating</p>
                    <h5>Read more</h5>

                </div>
                </Col>
            </Row>
        </div>
    </section>
  )
}

export default Firsthpart
