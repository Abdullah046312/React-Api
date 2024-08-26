import React from 'react'
import "./banner.css"
import { Col, Row } from 'react-bootstrap'
import logo2 from "../../../../src/assets/logo2.png"
import images1 from "../../../../src/assets/images1.png"
import images2 from "../../../../src/assets/images2.jpg"
import images3 from "../../../../src/assets/images3.jpg"
import images4 from "../../../../src/assets/images4.jpg"
import images5 from "../../../../src/assets/images5.jpg"
import images6 from "../../../../src/assets/images6.jpg"

const Banner = () => {
  return (
    <section id='banner'>
        <div className="container">
            <Row>
                <Col lg={7}>
                <div className="banner_main">
                    <img src={logo2} alt="" />
                    <h2>We Are Digital <h3>Marketing</h3>  Agency</h2>
                    <p>Use customer data to build great and solid product experiences that convert. Digital marketing’s development has changed the way brands and businesses use technology for marketing. </p>
                    <button>Get free quoto</button>
                </div>
                </Col>

                <Col lg={5}>
                <div className="banner_img">
                <img src={images1} alt="" />
                </div>
                </Col>
            </Row>
        </div>
    </section>
  )
}

export default Banner
