import Chai from "./Chai"
function App() {
  const username = "chai aur code"
  return (
    // <h1>chai aur react</h1> separate run hot nahi ekch element return hote.
    // ekt div nahi t empty use karaych
    <>  
    <Chai/>
    <h1>chai aur react {username}</h1>
    <p>test para</p>
    </>
  )
}

export default App
