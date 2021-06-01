import React from 'react'
import ImageCard from './ImageCard'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row } from 'react-bootstrap'
import images from '../data.json'

const GalleryContainer = () => {
   

    const renderImageCards = () => {
        console.log(images.length)
        let counter = 3;
        const currentImages  = images.slice(0, counter)
        if(images.legth <= 3) {
            return currentImages.map( (imageData) => {
               return <ImageCard src={imageData.image.imageURL} title={imageData.image.imageTitle}/>
            })
        } else if (true) {
            return currentImages.map( (imageData) => {
                return <ImageCard src={imageData.image.imageURL} title={imageData.image.imageTitle}/>
             })
        }
        
    }
    
    return (
        <Container >
            <Row >
                {renderImageCards()}
            </Row>
        </Container>
    )
}

export default GalleryContainer