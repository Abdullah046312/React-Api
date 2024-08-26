import React from 'react'
import "./header.css"
import { Row, Col } from 'react-bootstrap'
import { Navbar, Container, Nav, NavDropdown, Form, Button } from 'react-bootstrap'
import logo from "../../../../src/assets/Logo.png"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
   <section id='header'>
    <Navbar expand="lg" className="manu_bg">
      <Container>
        <Navbar.Brand href="#"> <img src={logo} alt="" /> </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
           
            <Nav
            
            className="mx-auto ami"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/service">Service</Link>
            <Link to="/pages">Pages</Link>
            <Link to="/about">Portfolio</Link>
            <Link to="/service">Price</Link>
            <Link to="/pages">Blog</Link>
            
            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
            
          </Nav>
           
         
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </section>
  )
}

export default Header
