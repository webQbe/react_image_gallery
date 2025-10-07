# React Image Gallery
This repo is an adaptation of [React & Tailwind CSS Image Gallery](https://www.youtube.com/watch?v=FiGmAI5e91M) by Brad Traversy. I followed the tutorial to learn followings:
- Creating an image gallery using React and TailwindCSS
- Fetching images from Pixabay API
- Display cards with images along with username, views, downloads, likes, and tags
- Search component to search images


## Getting Started

1. Download and Install **Node.js**

2. Install **React Developer Tools** browser extension

3. Install Vite on terminal:
    - Run `npm create vite@latest <project_directory_name>`
    - Select `React` & Enter
    - Select `JavaScript` & Enter

4. Update `vite.config.js` file:
    - Add `server: { port: 3000, }` in `defineConfig()`

5. Install dependencies:
    - Open terminal and run `npm install`

6. Run sever with `npm run dev`

7. Add snippets easily to generate components
    - Install `ES7+ React/Redux/React-Native` VSCode extension

8. Install Tailwind, PostCSS, & Autoprefixer

    1. `npm install -D tailwindcss @tailwindcss/vite @tailwindcss/postcss postcss autoprefixer`

    2. Update Vite config (`vite.config.js`) file:
        - Import TailwindCSS: `import tailwindcss from '@tailwindcss/vite'`
        - Add TailwindCSS plugin: `tailwindcss()`

    3. Create PostCSS Config file: `postcss.config.mjs`

    4. Delete `src/App.css` file

    5. Import `@import "tailwindcss";` to `src/index.css`
         
9. Generate component with `ES7+ React/Redux/React-Native` extension

    1. Enable `ES7+ React/Redux/React-Native` VSCode extension

    2. Clear default code in `src/App.jsx` and `src/index.css` files

    3. In `src/App.jsx` file, type `rafce` to generate `React Arrow Function Component` with `Export`
        ```
        import React from 'react'

        const App = () => {
            return (
                <div>App</div>
            )
        }

        export default App
        ```

## Credits
Original tutorial: [React & Tailwind CSS Image Gallery](https://www.youtube.com/watch?v=FiGmAI5e91M) — Brad Traversy.

## License
MIT License