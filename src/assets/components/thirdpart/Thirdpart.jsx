import React from 'react'
import "./thirdpart.css"
import { Col, Row } from 'react-bootstrap'
import logo2 from "../../../../src/assets/logo2.png"
import images12 from "../../../../src/assets/images12.jpg"
import images13 from "../../../../src/assets/images13.jpg"
import images14 from "../../../../src/assets/images14.jpg"
import images15 from "../../../../src/assets/images15.jpg"
import images16 from "../../../../src/assets/images16.jpg"
import images17 from "../../../../src/assets/images17.jpg"
import images18 from "../../../../src/assets/images18.jpg"
import images19 from "../../../../src/assets/images19.jpg"
import images20 from "../../../../src/assets/images20.jpg"

const Thirdpart = () => {
  return (
    <section id='third'>
        <div className="container">
            <Row>
                <Col lg={12}>
                <div className="six">
                    <img src={logo2} alt="" />
                    <h2>Services We Offer For Agency</h2>
                    <p>Best Creative digital Agency</p>
                </div>
                </Col>
            </Row>

            <Row>
                <Col lg={4}>
                <div className="seven">
                    <img src={images12} alt="" />
                    <h4>Business Planning</h4>
                    <h2>Email Marketing</h2>
                </div>
                </Col>
                <Col lg={4}>
                <div className="seven">
                    <img src={images13} alt="" />
                    <h4>Market Research</h4>
                    <h2>Data Analysis</h2>
                </div>
                </Col>
                <Col lg={4}>
                <div className="seven">
                    <img src={images14} alt="" />
                    <h4>Marketing Strategy</h4>
                    <h2>Optimization</h2>
                </div>
                </Col>
                <Col lg={4}>
                <div className="seven">
                    <img src={images15} alt="" />
                    <h4>SEO Optimizations</h4>
                    <h2>Pay-par Click</h2>
                </div>
                </Col>
                <Col lg={4}>
                <div className="seven">
                    <img src={images16} alt="" />
                    <h4>Marketing Strategy</h4>
                    <h2>Content Writting</h2>
                </div>
                </Col>
                <Col lg={4}>
                <div className="seven">
                    <img src={images17} alt="" />
                    <h4>Market Research</h4>
                    <h2>Marketing</h2>
                </div>
                </Col>
                <Col lg={4}>
                <div className="seven">
                    <img src={images18} alt="" />
                    <h4>Business Planning</h4>
                    <h2>Business Growth</h2>
                </div>
                </Col>
                <Col lg={4}>
                <div className="seven">
                    <img src={images19} alt="" />
                    <h4>SEO Optimizations</h4>
                    <h2>Human Resources</h2>
                </div>
                </Col>
                <Col lg={4}>
                <div className="seven">
                    <img src={images20} alt="" />
                    <h4>Marketing Strategy</h4>
                    <h2>Virtual Facilitation</h2>
                </div>
                </Col>
            </Row>
        </div>
    </section>
  )
}

export default Thirdpart
