import React from 'react'
import "./fivethpart.css"
import { Col, Row } from 'react-bootstrap'
import logo2 from "../../../../src/assets/logo2.png"
import images25 from "../../../../src/assets/images25.jpg"
import images26 from "../../../../src/assets/images26.jpg"
import images27 from "../../../../src/assets/images27.jpg"
import images28 from "../../../../src/assets/images28.jpg"
import images29 from "../../../../src/assets/images29.jpg"
import images30 from "../../../../src/assets/images30.jpg"
import images31 from "../../../../src/assets/images31.jpg"
import images32 from "../../../../src/assets/images32.jpg"
import images33 from "../../../../src/assets/images33.jpg"

const Fivethpart = () => {
  return (
    <section id='fiveth'>
        <div className="container">
            <Row>
                <Col lg={12}>
                <div className="ten">
                    <img src={logo2} alt="" />
                    <h2>Pirates of the Caribbean</h2>
                    <p>All the Famous characters are revealed of Pirates of the Caribbean Movies</p>

                </div>
                </Col>
            </Row>

            <Row>
                <Col lg={3}>
                <div className="eleven">
                    <img src={images25} alt="" />
                </div>
                </Col>
                <Col lg={6}>
                <div className="eleven">
                    <img src={images26} alt="" />
                </div>
                </Col>

                <Col lg={3}>
                <div className="eleven">
                    <img src={images27} alt="" />
                </div>
                </Col>
                <Col lg={3}>
                <div className="eleven">
                    <img src={images28} alt="" />
                </div>
                </Col>
                <Col lg={6}>
                <div className="eleven">
                    <img src={images29} alt="" />
                </div>
                </Col>
                <Col lg={3}>
                <div className="eleven">
                    <img src={images30} alt="" />
                </div>
                </Col>
                <Col lg={3}>
                <div className="eleven">
                    <img src={images31} alt="" />
                </div>
                </Col>
                <Col lg={6}>
                <div className="eleven">
                    <img src={images32} alt="" />
                </div>
                </Col>
                <Col lg={3}>
                <div className="eleven">
                    <img src={images33} alt="" />
                </div>
                </Col>
                

            
            </Row>
        </div>
    </section>
  )
}

export default Fivethpart
