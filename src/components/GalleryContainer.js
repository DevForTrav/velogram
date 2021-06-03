import React,{useState} from 'react'
import ImageCard from './ImageCard'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row } from 'react-bootstrap'
import images from '../data.json'
import UploadImageForm from './UploadImageForm'

const GalleryContainer = () => {

    const [ imageCards, setImageCards ] = useState([])

    const renderRow = (arg) => {
        return (<Row lg={3}>{arg}</Row>)
    }

    const renderImageCards = () => {
        for (let i = 0; i < 3; i++) {
            imageCards.push(
                <ImageCard src={images[i].image.imageURL} title={images[i].image.imageTitle} />
            )
        }
        return imageCards
    }
    
    return (
        <Container>
            {renderRow(renderImageCards())}
            <UploadImageForm />
        </Container>
    )
}

export default GalleryContainer