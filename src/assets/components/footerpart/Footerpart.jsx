import React from 'react'
import "./footerpart.css"
import { Col, Row } from 'react-bootstrap'
import logo from "../../../../src/assets/Logo.png"

const Footerpart = () => {
  return (
    <section id='footer'>
    <div className="container">
        <Row>
            <Col lg={4}>
            <div className="twenty_one">
                <img src={logo} alt="" />
                <p>Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page.</p>
            </div>
            </Col>

            <Col lg={{span:2, offset:1}}>
            <div className="twenty_two">
                <h4>Features</h4>
                <h5>Home</h5>
                <h5>About</h5>
                <h5>Benifit</h5>
                <h5>Pricing</h5>
                <h5>Blog</h5>
            </div>
            </Col>
            <Col lg={2}>
            <div className="twenty_two">
                <h4>Products</h4>
                <h5>Task Management</h5>
                <h5>Company growth</h5>
                <h5>Time tracking</h5>
                
            </div>
            </Col>
            <Col lg={2}>
            <div className="twenty_two">
                <h4>Support</h4>
                <h5>Customer service</h5>
                <h5>Accessibility</h5>
                <h5>Contact us</h5>
                
            </div>
            </Col>
        </Row>

        <Row>
            <Col lg={3}>
            <div className="twenty_three">
                <h4>@20201 Innovate.All rights reserved.</h4>
                <h2>Design By Abdullah Al-Mamun</h2>
            </div>
            </Col>
            <Col lg={{span:2, offset:5}}>
            <div className="twenty_three">
                <h4>Privacy policy</h4>
                
                
            </div>
            </Col>

            <Col lg={2}>
            <div className="twenty_three">
                <h4>Terms & condition</h4>
                
            </div>
            </Col>
        </Row>
    </div>
</section>
  )
}

export default Footerpart
