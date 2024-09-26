//import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const variable ="inject variable";


const reactElement=React.createElement(
  'a',
  {
    href:"www.google.com",
    target:"__blank"
  },
  "Click me to visit Google",
  variable
);



createRoot(document.getElementById('root')).render(

  
reactElement
  
 

 
    

)
