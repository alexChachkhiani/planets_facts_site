import { useState } from 'react'
import { Route, BrowserRouter, Link, Routes } from "react-router-dom"
import './App.css'
import Home from "./pages/Home"
import Planet from './pages/Planet'
import Header from './Components/Header'

function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:planet" element={<Planet />} />
      </Routes>
    </BrowserRouter>
    </>  
  )
}

export default App
