import React from 'react'
import './sixthpart.css'
import { Col, Row } from 'react-bootstrap'
import logo2 from "../../../../src/assets/logo2.png"
import images34 from '../../../../src/assets/images34.jpg'
import images35 from '../../../../src/assets/images35.jpg'
import images36 from '../../../../src/assets/images36.jpg'

const Sixthpart = () => {
  return (
    <section id='sixth'>
        <div className="container">
            <Row>
                <Col lg={12}>
                <div className="twelev">
                    <img src={logo2} alt="" />
                    <h2>Our creative process.</h2>
                    <p>We provide digital experience services to startups and small businesses.
                    </p>

                </div>

                </Col>
            </Row>

            <Row>
                <Col lg={5}>
                <div className="therteen">
                    <h4>Step-1</h4>
                    <h3>Global SEO Research</h3>
                    <p>Practical tools and features make it easier to build and manage your site.
                    </p>
                </div>
                </Col>
                <Col lg={{span:5, offset:1}}>
                <div className="fourteen">
                    <img src={images34} alt="" />
                    
                </div>
                </Col>
              
                <Col lg={5}>
                <div className="fourteen">
                    <img src={images35} alt="" />
                    
                </div>
                </Col>

                <Col lg={{span:5, offset:1}}>
                <div className="therteen">
                    <h4>Step-2</h4>
                    <h3>Social media integration</h3>
                    <p>Practical tools and features make it easier to build and manage your site.
                    </p>
                </div>
                </Col>
                <Col lg={5}>
                <div className="therteen">
                    <h4>Step-3</h4>
                    <h3>Launching the Application</h3>
                    <p>Practical tools and features make it easier to build and manage your site.
                    </p>
                </div>
                </Col>
                <Col lg={{span:5, offset:1}}>
                <div className="fourteen">
                    <img src={images36} alt="" />
                    
                </div>
                </Col>
            </Row>
        </div>
    </section>
  )
}

export default Sixthpart
