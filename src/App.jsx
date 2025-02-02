import React, { useState, useEffect } from 'react';
import ImageCard from './components/ImageCard'

const App = () => {
    // Default State of images is empty
    const [images, setImages] = useState([]);
    // Default State of isLoading is true
    const [isLoading, setIsLoading] = useState(true);
    // Default State of term is ''
    const [term, setTerm] = useState('');


    useEffect(() => {
        // Fetch Images from API
        // Make API request with the Key stored in .env file
        fetch(`https://pixabay.com/api/?key=${import.meta.env.VITE_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`) 
            // Wait for fetch promise to resolve before converting response to json
            .then(res => res.json())
            // Wait for fetch promise to resolve before logging data
            .then(data => {
                setImages(data.hits); // Set images array state to data.hits from response
                setIsLoading(false); // Set IsLoading state to false
            })
            // Handle errors
            .catch(err => console.log(err));
    }, []);

    /* The useEffect hook:
        Runs only once when the component mounts (due to the empty dependency array []) */


    return (
        <ImageCard /> 
    )
}

export default App