import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './page/Home/Home'
import About from './page/About/Index'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
