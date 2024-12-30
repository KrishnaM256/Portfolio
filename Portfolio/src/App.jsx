import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Project from './components/Project'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './lib/ScrollToTop'
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/project/:id" element={<Project></Project>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App
