import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {  Nav, Navbar } from 'react-bootstrap'


const Title = () => {
    return (
        <>
            <Navbar className="justify-content-end">
                <Navbar.Brand>
                    Velogram
                </Navbar.Brand>
                <Nav >
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Likes</Nav.Link>    
                    <Nav.Link href="#link"></Nav.Link>    
                </Nav>
            </Navbar>
        </>
    )
}

export default Title