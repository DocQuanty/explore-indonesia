// import { useState } from 'react'
import Header from "./components/Header/Header"
import Landing from "./pages/Landing/Landing"
import ButtonMain from "./components/Button/ButtonMain"
import Slider from "./components/Slider/Slider.tsx"
function App() {
   return (
    <>
      <div className="wrapper">
        <Header/>
        <div className="container">
        <Landing/>
        <Slider/>
      </div>
    </div>
    </>
  )
}

export default App
