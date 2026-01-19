import React from 'react'
import { Router } from 'react-router-dom'
import NavBar from "./components/Navbar.jsx";

const App = () => {
  return (
    <>
    <NavBar />
    <Router>
      <div className='bg-black h-screen text-white text-2xl font-bold'>
        <h1 className='text-center bg-blue-400'>Aksath Lavde Gandu</h1>
      </div>
    </Router>
    </>
  )
}

export default App
