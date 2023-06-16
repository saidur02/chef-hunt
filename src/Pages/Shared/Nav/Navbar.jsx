import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';

const Header = () => {

  const { user,logOut } = useContext(AuthContext);

  const handleLogOut = () =>{
    logOut()
    .then(() =>{})
    .catch(error => console.log(error))
}

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Chef Receipe</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ms-28">
            <Link className='me-2 text-decoration-none' to="/">Home</Link>
            <Link className='text-decoration-none me-2' to="/blogs">Blogs</Link>
            {user ? <Link onClick={handleLogOut} to='/login' className="m-3 " >Log Out</Link>:<Link to='/login' className="m-3 " >Login</Link>
            }
            
           
           
          </Nav>
        </Navbar.Collapse>

        <p>Profile</p>
      </Container>
    </Navbar>
  );
};

export default Header;