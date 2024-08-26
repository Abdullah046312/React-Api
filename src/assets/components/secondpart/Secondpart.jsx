import React from 'react'
import "./secondpart.css"
import { Col, Row } from 'react-bootstrap'
import images10 from "../../../../src/assets/images10.jpg"
import images11 from "../../../../src/assets/images11.jpg"
import logo2 from "../../../../src/assets/logo2.png"

const Secondpart = () => {
  return (
   <section id='second'>
    <div className="container">
        <Row>
            <Col lg={6}>
            <div className="three">
                <img src={images10} alt="" />
            </div>
            </Col>
          
          
            <Col lg={{span:5, offset:1}}>
            <div className="four">
                <img src={logo2} alt="" />
                <h2>Who We Are..!</h2>
                <p>We are a Dhaka based Digital Communication Agency committed to creating an actionable strategy, online marketing & technology solution for our partners. As a multidisciplinary company, we operate as a unified, </p>
                </div>
                <div className="five">
                    <img src={images11} alt="" />
                </div>
            
            </Col>
        </Row>
    </div>
   </section>
  )
}

export default Secondpart
