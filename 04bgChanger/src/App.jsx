import { useState } from "react"


function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}} 
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
      <button
      onClick={() => setColor("red")}
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor: "red"}}
      >Red</button>
      <button
      onClick={() => setColor("green")}
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor: "green"}}
      >Green</button>
      <button
      onClick={() => setColor("blue")}
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor: "blue"}}
      >Blue</button>
      <button
      onClick={() => setColor("orange")}
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor: "orange"}}
      >Orange</button>
      <button
      onClick={() => setColor("violet")}
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor: "violet"}}
      >Violet</button>
      <button
      onClick={() => setColor("#50aeb2")}
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor: "#50aeb2"}}
      >Sky</button>
      <button
      onClick={() => setColor("black")}
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor: "black"}}
      >Black</button>
      <button
      onClick={() => setColor("white")}
      className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
      style={{backgroundColor: "white"}}
      >White</button>
      </div>
      </div>
    </div>
  )
}

export default App

/*
   Notes :- 
   useState is a hook that allows you to add state to your functional components. 
   The useState hook returns an array with two elements. The first element is the current state value,
   and the second element is a function that allows you to update the state.

*/
