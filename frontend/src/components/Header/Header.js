import React from 'react'
import { Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'

const Header = () => {

const history = useHistory();


  return (
    <Navbar bg="primary" expand="lg" variant='dark'>
  <Container >
    <Navbar.Brand> 
      <Link to="/" style={{color: "white"}}>ToDo App</Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className='m-auto'>
        <Form inline>
            <FormControl
                type="text"
                placeholder='Search'
                className='mr-sm-2'
            >

            </FormControl>
        </Form>
        </Nav>
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="/mynotes">
        <Link to="/mynotes" style={{color: "white"}}>My Todos</Link>
        </Nav.Link>
       
        <NavDropdown title="Tanya Gangegedara" id="basic-nav-dropdown">
          <NavDropdown.Item href="/profile">My Profile</NavDropdown.Item>
        
          <NavDropdown.Divider />
          <NavDropdown.Item onClick={() => {
            localStorage.removeItem("userInfo");
            history.push("/");
          }}>
            Logout
          </NavDropdown.Item>
        </NavDropdown>
        
      </Nav>
      
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default Header
