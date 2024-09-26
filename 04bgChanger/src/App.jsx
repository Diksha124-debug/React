import { useState } from 'react'

import './App.css'

function App() {
let[color,setColor]=useState("white");

  return (
    <div className="w-full h-screen flex justify-center items-center "
    style={{backgroundColor:color}}>
      <h1 className='font-bold text-4xl animate-fadeIn'>Welcome</h1>
      <main className="bg-white rounded-sm flex mx-auto justify-center fixed bottom-1 h-12 space-x-2 px-3 border-2 border-black">
        <button
         onClick={()=>{setColor("red")}} className=' rounded w-20 my-2 text-white ' style={{backgroundColor:"red"}}>Red</button>
        <button onClick={()=>{setColor("Yellow")}} className=' rounded w-20 my-2 text-white ' style={{backgroundColor:"Yellow"}}>Yellow</button>
        <button onClick={()=>{setColor("Green")}} className=' rounded w-20 my-2 text-white ' style={{backgroundColor:"Green"}}>Green</button>
        <button onClick={()=>{setColor("Magenta")}} className=' rounded w-20 my-2 text-white ' style={{backgroundColor:"Magenta"}}>Magenta</button>
        <button onClick={()=>{setColor("Gray")} }className=' rounded w-20 my-2 text-white ' style={{backgroundColor:"Gray"}}>Gray</button>
        <button onClick={()=>{setColor("Purple")}} className=' rounded w-20 my-2 text-white ' style={{backgroundColor:"Purple"}}>Purple</button>
        <button onClick={()=>{setColor("Pink")}}className=' rounded w-20 my-2 text-white ' style={{backgroundColor:"Pink"}}>Pink</button>
        <button  onClick={()=>{setColor("Blue")}} className=' rounded w-20 my-2 text-white ' style={{backgroundColor:"Blue"}}>Blue</button>
        <button  onClick={()=>{setColor("Olive")}} className=' rounded w-20 my-2 text-white ' style={{backgroundColor:"Olive"}}>Olive</button>
        <button onClick={()=>{setColor("Orange")}} className=' rounded w-20 my-2 text-white ' style={{backgroundColor:"Orange"}}>Orange</button>
      
        {/* <button className='rounded 'onClick={(excolor)=>{

        }}>Red</button> */}
       
        
     
      </main>
    </div>
  )
}

export default App
