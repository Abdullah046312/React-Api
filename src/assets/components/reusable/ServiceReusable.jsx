import React from 'react'
import { Col, Row, Button, Card } from 'react-bootstrap'
import images44 from "../../../assets/images44.jpg"


const ServiceReusable = ({title, text, img}) => {
  return (

    <Row>
            <Col lg={4}>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={images44} />
     
      <Card.Body>
            <Card.Title>{title}</Card.Title>
        <Card.Text>
         {text}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
            </Col>
        </Row>
    
  )
}

export default ServiceReusable
