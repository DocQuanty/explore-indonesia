// import { useState } from 'react'
import Header from "./components/Header/Header"
import Landing from "./pages/Landing/Landing"
function App() {
   return (
    <>
      <div className="background">
        <Header/>
        <div className="container">
        <Landing/>
      </div>
    </div>
    </>
  )
}

export default App
