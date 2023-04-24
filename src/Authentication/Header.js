import React from 'react'
import { Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

function Header() {
  let user = JSON.parse(localStorage.getItem("user-info"))
  console.log(user);
  const Navigate = useNavigate();
  function Logout() {
    localStorage.clear();
    Navigate("/register")
  }

  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">Authentication</Navbar.Brand>
        <Nav className="me-auto navbar_wrapper">
          {
            localStorage.getItem('user-info') ?
              <>
                <Link to='/add'>Add Product</Link>
                <Link to='/update'>Update Product</Link>
              </> 
              :
              <>
                <Link to='/register'>Register</Link>
                <Link to='/login'>Login</Link>

              </>
          }


        </Nav>
        { localStorage.getItem('user-info') ?
        <Nav>
          <NavDropdown title={user.Name}>
            <NavDropdown.Item onClick={Logout}>Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav> : null
}
      </Navbar>
    </div>
  )
}

export default Header