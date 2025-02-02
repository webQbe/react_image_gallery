import React, { useState, useEffect } from 'react';
import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch';

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
                console.log(data); // Console log response
                setImages(data.hits); // Set images state to data.hits array from response
                setIsLoading(false); // Set IsLoading state to false
            })
            .catch(err => console.log(err)); // Console log error
    }, [term]); 

    /* The useEffect hook:
        Added 'term' as a dependency for fetch() to be called again 
        Whenver the 'term' changes fetch() will run again */


    return (
        // Pass ImageSearch searchText state to setTerm()
        <div className="container mx-auto" >
            <ImageSearch searchText={(text) => setTerm(text)} 
                />   
            { isLoading ? 
                // Show Loading text while fetching data
                <h1 className="text-6xl text-center mx-auto">Loading...</h1> :
                // Show Images when fetching is over
                <div className="grid grid-cols-3 gap-4">
                { // Loop through images array
                  images.map(image => (
                        // Pass current image & image.id as a key to create the list
                        <ImageCard key={image.id} image={image} />
                    ))
                }
            </div> }
        </div>   
    )
}

export default App