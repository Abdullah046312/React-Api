import React from 'react'
import "./service.css"
import { Col, Container, Row } from 'react-bootstrap'
import ServiceReusable from '../reusable/ServiceReusable'
// import images12 from "../../../assets/images12.jpg"
// import images10 from "../../../assets/images10.jpg"
// import images13 from "../../../assets/images13.jpg"

const Service = () => {
  return (
    <Container>
        <section id='service'>
        <Row>
            <Col lg={4}>
            <ServiceReusable title = "Marketing Strategy"
            text = "Social Media has changed the way we interact & do business while creating"
            // img={images12}
            />
            </Col>
            <Col lg={4}>
            <ServiceReusable title = "Social Marketing"
             text = "Social Media has changed the way we interact & do business while creating"
            //  img={images10}
             />
            </Col>
            <Col lg={4}>
            <ServiceReusable title = "Content Marketing"
             text = "Social Media has changed the way we interact & do business while creating"
            //  img={images13}
             />
            </Col>
        </Row>
        </section>
    </Container>
  )
}

export default Service
