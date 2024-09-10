import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';



function Topbar() {
  
  return (
    <>
     <Navbar expand="lg" varient="light" className='topbar' >
      <Container fluid className='topbar' >
        <Navbar.Brand href="#"></Navbar.Brand>
        <Nav
            className="  ps-3 fs-5"
            style={{ maxHeight: '100px' ,position:"relative",left:"100px"}}
            navbarScroll>
            <Nav.Link href="#"><Link className="link" to='/' >HOME</Link> </Nav.Link>
            <Nav.Link href="#"><Link className="link" to='/sidebar'>ABOUT</Link></Nav.Link>
            <Nav.Link href="#"> <Link className="link" to='/post' >POSTS</Link></Nav.Link>
            <Nav.Link href="#"><Link className="link" to='/write' >WRITE</Link></Nav.Link>
            <Nav.Link href="#">LOGOUT</Nav.Link>
             </Nav>
          <Form className=" ms-5 d-flex justify-content-end">
            <Link to='/settings' className='link'>
            <img className='me-4 mt-1 rounded'style={{height:"35px", width:"35px",}} 
          
             src="https://imgs.search.brave.com/mRib_i-Szar0NIbygBBAm9WO0KitFDrDrjbum_HIfwg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvODY0/NTE2ODcwL3Bob3Rv/L3lvdW5nLXdvbWFu/LXBob3RvZ3JhcGhp/bmctdGhlLWF1dHVt/bi1zZWFzb24uanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPU0z/RzJTd0tKMTV6b2xz/U2FGQUJzbmVMaXRk/V1hDcnJKM0xrVEVL/bklPeXM9" alt="" />
            </Link>
            <Button variant="outline-dark me-3"><i class="fa-solid fa-magnifying-glass "></i></Button>
            <button className='btn btn-success me-4'>
            <Link to='/login' className="link">Login</Link> </button>
          </Form>
      </Container>  
    </Navbar>  
    </>
  )
}

export default Topbar