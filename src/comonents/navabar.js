import React from 'react'
import '../App.css'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function NavScrollExample(props) {



  return (
    <Navbar expand="lg" className="bg-body" data-bs-theme={props.mode} sticky="top" >
      <Container fluid >
        <Navbar.Brand href="#">{props.brand}</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="nav me-auto my-2  my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to="/">Home</Link>
            <Link to="about">About</Link>
            
            
          </Nav>
          
          <Form className="d-flex">
            {/* <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button> */}
            
            <Form.Check // prettier-ignore
        type="switch"
       
        id="custom-switch"
        
        onClick={props.toggleMode}
              
      />
      <Form.Label className={`text-${props.mode === 'light'?'dark':'light'}`}>Enable Dark Mode</Form.Label>
     
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;