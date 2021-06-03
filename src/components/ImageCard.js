import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Card } from 'react-bootstrap'


const ImageCard = (props) => {
    console.log(props)

    return (
        <Col className="mb-4"> 
            <Card >
                <Card.Body>
                    <Card.Title className="text-muted">{props.title}</Card.Title>
                </Card.Body>
                <Card.Img src={props.src} alt="Moutain biker Jumps bike over jump"  />
            </Card>
        </Col>

    )
}

export default ImageCard