import React from 'react'
import ImageCard from './ImageCard'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row } from 'react-bootstrap'
import images from '../data.json'

const GalleryContainer = () => {
   

    const renderImageCards = () => {
        let remainingImages = images
        const currentImages  = images.splice(0, 3)
        console.log(`Current:${currentImages}`, `remaining:${remainingImages}`)
        if(remainingImages > 3 ) {
            return currentImages.map( (imageData) => {
               return <ImageCard src={imageData.image.imageURL} title={imageData.image.imageTitle}/>
            })
        } else if (remainingImages === 0) {
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