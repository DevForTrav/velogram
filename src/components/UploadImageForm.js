import React, { useState } from 'react'
import { Form, FormControl, Button, InputGroup, Card } from 'react-bootstrap'


const UploadImageForm = () => {
    const [newImageURL, setNewImageURL] = useState([])
    const [newImageCaption, setNewImageCaption] = useState([])
    const [newImageDescription, setNewImageDescription] = useState([])

    const handleClick = (e) => {
        console.log(newImageURL, newImageCaption, newImageDescription)
        
    }

    return(

            <Form >
                <FormControl onChange={ e => setNewImageURL(e.target.value)} className="mb-2" type="input" placeholder="Enter Image Url"></FormControl>
                <InputGroup>
                    <FormControl onChange={ e => setNewImageCaption(e.target.value)}type="input" placeholder="Enter Caption" ></FormControl>
                    <FormControl onChange={ e => setNewImageDescription(e.target.value)} type="input" placeholder="Enter Description"></FormControl>
                    <Button onClick={handleClick} variant="dark">Submit</Button>
                </InputGroup>
            </Form>
    )

}

export default UploadImageForm