import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';
import MyButton from '../Button/MyButton'

function Header() {
    return (
        <div>
            <Navbar expand="lg"className="bg-white text-dark">
                    <Navbar.Brand href="#home"><img src="images/logo.PNG" className="img-fluid" alt="Logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto me-5">
                            <Nav.Link href="#" className="px-4 pr-4 text-dark fs-5">CITIES</Nav.Link>
                            <Nav.Link href="#" className="px-4 pr-4 text-dark fs-5">FAQ</Nav.Link>
                            <Nav.Link href="#" className="px-4 pr-4 text-dark fs-5">BLOG</Nav.Link>
                            <Nav.Link href="#" className="px-4 pr-4 text-dark fs-5">PRESS</Nav.Link>
                            <Nav.Link href="#" className="px-4 pr-5 text-dark fs-5">
                                <MyButton btnText= "BECOME A WASHÉR" />
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header
