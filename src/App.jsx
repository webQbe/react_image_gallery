import React from 'react'

const App = () => {
    return (
        // Create Card to Display Image
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img src="https://picsum.photos/200/300" alt="" className="w-full" />
            <div className="px-6 py-4">
                <div className="font-bold text-purple-500 text-xl mb-2">
                    Photo by John Doe
                </div>
            </div>
        </div>
    )
}

export default App