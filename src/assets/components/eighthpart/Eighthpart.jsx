import React from 'react'
import "./eighthpart.css"
import { Col, Row } from 'react-bootstrap'
import images37 from "../../../../src/assets/images37.jpg"
import images38 from "../../../../src/assets/images38.jpg"
import images39 from "../../../../src/assets/images39.jpg"
import logo2 from "../../../../src/assets/logo2.png"

const Eighthpart = () => {
  return (
    <section id='eighth'>
        <div className="container">
            <Row>
                <Col lg={12}>
                <div className="logo">
                        <img src={logo2} alt="" />
                        <h2>American media franchise centered on a series of action films</h2>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg={6}>
                
                <div className="seventeen">
                    
                    <img src={images37} alt="" />

                </div>
                </Col>
                <Col lg={5}>
                <div className="eightteen">
                    <h4>01</h4>
                    <h3>Make your business visible online</h3>
                    <p>Open an online store and become an international seller. Your customers will enjoy shopping online!</p>

                </div>
                </Col>
                <Col lg={5}>
                <div className="nineteen">
                    <h4>02</h4>
                    <h3>Make your eCommerce business stand out</h3>
                    <p>We craft premium digital work for web, mobile and experiential with creative agencies and global brands alike – putting passion, pride and plenty of elbow grease into everything we do.</p>

                </div>
                </Col>

                <Col lg={{span:6, offset:1}}>
                <div className="seventeen">
                    <img src={images38} alt="" />

                </div>
                </Col>

                <Col lg={6}>
                <div className="seventeen">
                    <img src={images39} alt="" />

                </div>
                </Col>
                <Col lg={4}>
                <div className="twenty">
                    <h4>03</h4>
                    <h3>Grow with your audience</h3>
                    <p>We marry creative insight with data to deliver successful user experiences. Through a process of iteration and prototyping, we design interfaces that bring joy to people.</p>

                </div>
                </Col>
            </Row>
        </div>
    </section>
  )
}

export default Eighthpart
