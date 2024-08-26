import React from 'react'
import "./fourthpart.css"
import { Col, Row } from 'react-bootstrap'
import images21 from "../../../../src/assets/images21.jpg"
import images22 from "../../../../src/assets/images22.jpg"
import images23 from "../../../../src/assets/images23.jpg"
import images24 from "../../../../src/assets/images24.jpg"
import logo2 from "../../../../src/assets/logo2.png"


const Fourthpart = () => {
  return (
    <section id='fourth'>
        <div className="container">
            <Row>
                <Col lg={12}>
                <div className="eight">
                    <img src={logo2} alt="" />
                    <h4>Our Services</h4>
                    <h2>How It Works</h2>
                </div>
                </Col>
            </Row>

            <Row>
                <Col lg={3}>
                <div className="nine">
                    <img src={images21} alt="" />
                    <h4>Plan Product Roadmap</h4>
                    <p>A product roadmap is a shared source of truth that outlines the vision, direction, priorities</p>
                    <h5>Read More <i class="fa-solid fa-arrow-right-long"></i></h5>
                </div>
                </Col>
                <Col lg={3}>
                <div className="nine">
                    <img src={images22} alt="" />
                    <h4>Assign Any Work</h4>
                    <p>A product roadmap is a shared source of truth that outlines the vision, direction, priorities</p>
                    <h5>Read More <i class="fa-solid fa-arrow-right-long"></i></h5>
                </div>
                </Col>
                <Col lg={3}>
                <div className="nine">
                    <img src={images23} alt="" />
                    <h4>Monitor Work Progress</h4>
                    <p>A product roadmap is a shared source of truth that outlines the vision, direction, priorities</p>
                    <h5>Read More <i class="fa-solid fa-arrow-right-long"></i></h5>
                </div>
                </Col>
                <Col lg={3}>
                <div className="nine">
                    <img src={images24} alt="" />
                    <h4>Pertect Intergration</h4>
                    <p>A product roadmap is a shared source of truth that outlines the vision, direction, priorities</p>
                    <h5>Read More <i class="fa-solid fa-arrow-right-long"></i></h5>
                </div>
                </Col>
            </Row>
        </div>
    </section>
  )
}

export default Fourthpart
