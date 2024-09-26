import { useState } from 'react'

import './App.css'

function App() {
  let [counter, setCounter] = useState(0)

  const UpdateVal = () => {
    if (counter >= 20) {
      counter = 0;
    }
    else {
      counter = counter + 1;
    }

    console.log("Clicked: " + counter);
    setCounter(counter);

  }
  const rmvVal = () => {
    if (counter >= 1) {
      counter = counter - 1;
    }
    else {
      counter = 0;
    }
    console.log("Clicked: " + counter);

    setCounter(counter);


  }


  return (
    <>

      <h1>Good Morning..</h1>

      <button onClick={UpdateVal}>Add Value {counter}</button>
      <br />
      <br />
      <button onClick={rmvVal}>Remove Value {counter}</button>
      <footer>
        <p>fotter counter:{counter}</p>
      </footer>

    </>
  )
}

export default App
