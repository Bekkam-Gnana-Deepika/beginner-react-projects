import React, { Fragment } from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <Fragment>
      <Navbar expand="md" bg='primary' data-bs-theme="dark" className='shadow'>
        <Container>
          <Navbar.Brand href="#">React Projects</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
                <Nav.Link>
                   <NavLink to={`counter`}>Counter</NavLink>
                </Nav.Link>
                <Nav.Link>
                   <NavLink to={`todo`}>Todo</NavLink>
                </Nav.Link>
                <Nav.Link>
                   <NavLink to={`aaa`}>Services</NavLink>
                </Nav.Link>
                <Nav.Link>
                   <NavLink to={`about`}>About</NavLink>
                </Nav.Link>    
            </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>   
    </Fragment>
  )
}

export default Header;