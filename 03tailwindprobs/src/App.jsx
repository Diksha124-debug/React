import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Probs from './assets/probs'

function App() {
  const obj = {
    surname:"pandey",
    age:22
  }
  const ary = [2,3,4,5]

  return (
    <>
      <h1 className='bg-red-950 text-white p-3 rounded mb-3'>Good Afternoon</h1>
   <Probs username="Clothing Store" price="500"/>
   <Probs username="Fabric Suit Salwar" price="1000"/>
   <Probs username="Kids Comapartment" btn="More"/>
   <Probs username="Genral store" btn="Contact"/>

    </>
  )
}

export default App
