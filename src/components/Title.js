import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {  Nav, Navbar } from 'react-bootstrap'


const Title = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" >
                <Navbar.Brand>
                    Velogram
                </Navbar.Brand>
                <Navbar >
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">New</Nav.Link>    
                        <Nav.Link href="#link">Likes</Nav.Link>    
                    </Nav>
                </Navbar>
            </Navbar>
        </>
    )
}

export default Title