import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)
  
  
  // let counter = 5
   const addValue = ()=>{
    if (counter <= 19) {
      console.log("Clicked",counter + 1);
      counter = counter + 1
      setCounter(counter)
    } else {
      console.log("Limit Exceed !");
    }
   }


   const removeValue = () =>{
    if (counter >= 1) {
      console.log("removed", counter-1);
      counter = counter - 1
      setCounter(counter) 
    } else {
      console.log("No negative value");
    }
   }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick={addValue}>Add Value</button> <br />
      <button onClick={removeValue}>Remove Value </button>
    </>
  )
}

export default App
