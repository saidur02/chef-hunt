import React from 'react';
import { Container, Nav,Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Chef Receipe</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <Link className='me-2 text-decoration-none' to="/">Home</Link>
            <Link className='text-decoration-none' to="/blogs">Blogs</Link>
           
          </Nav>
        </Navbar.Collapse>
        <p>Profile</p>
      </Container>
    </Navbar>
    );
};

export default Header;