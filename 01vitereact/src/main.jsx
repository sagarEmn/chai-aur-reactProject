import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// function MyApp(){
//   return (
//     <div>
//       <h1>
//         Custom App
//       </h1>
//     </div>
//   )
// }

// function Element(){
//   return (
//   <>
//     <a href="https://google.com" target='_blank'>Visit Google</a>
//   </>

//   )
// }

const AnotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)

const reactElement = React.createElement(
  'a', 
  {href: 'https://google.com', target:'_blank' },
  'Click me to visit google'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <App />
);
