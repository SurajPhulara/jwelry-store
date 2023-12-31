import React from 'react'
import Home from './pages/Home/Home'
import "./App.css"
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
      <div className='app'>
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/home" exact element={<Home />} />
        <Route path="*" element={<div className='under_development_page'>Still under development</div>} />
      </Routes>
      <Footer></Footer>


    </Router>
      </div>
  )
}

export default App