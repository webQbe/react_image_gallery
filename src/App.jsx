import React, { useState, useEffect } from 'react';

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
            .then(data => console.log(data))
            // Handle errors
            .catch(err => console.log(err));
    }, []);

    /* The useEffect hook:
        Runs only once when the component mounts (due to the empty dependency array []) */


    return (
        // Create Card to Display Image
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img src="https://picsum.photos/200/300" alt="" className="w-full" />
            <div className="px-6 py-4">
                <div className="font-bold text-purple-500 text-xl mb-2">
                    Photo by John Doe
                </div>
                <ul>
                    <li>
                        <strong>Views: </strong>
                        4000
                    </li>
                    <li>
                        <strong>Downloads: </strong>
                        300
                    </li>
                    <li>
                        <strong>Likes: </strong>
                        400
                    </li>
                </ul>
            </div>
            <div className="px-6 py-4">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text gray-700 mr-2">
                    #tag1
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text gray-700 mr-2">
                    #tag2
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text gray-700 mr-2">
                    #tag3
                </span>
            </div>
        </div>
    )
}

export default App