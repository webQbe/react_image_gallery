import React, { useState } from 'react'


const ImageSearch = ({ searchText }) => { // Pass-in searchText() from App.jsx
    const [text, setText] = useState(''); // Set text state to empty by default

    const onSubmit = (e) => {
        e.preventDefault(); // Prevent page reload
        searchText(text); // Passing local text state to setTerm() in App.jsx 
    }

  return (
    // setText() updates text state with user input
    // onSubmit() passes local text state to searchText prop
    <div>
        <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
            <form onSubmit={onSubmit} className="w-full max-w-sm">
                <div className="flex items-center border-b border-teal-500 py-2">
                    <input onChange={e => setText(e.target.value)} type="text" className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
                    placeholder='Search Image Term...' />
                    <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit">
                        Search
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default ImageSearch