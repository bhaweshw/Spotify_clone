import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from "./components/Navbar.jsx";
import Player from './components/Player.jsx';

const App = () => {
  return (
    <div className='bg-black h-screen flex flex-col justify-between'>
      <NavBar />
    <Routes>
      <Route path='/' element={<h1 className='text-center bg-red-400'>Home</h1>} />
      <Route path='/search' element={<h1 className='text-center bg-red-400'>Search</h1>} /> 
    </Routes>
    <Player />
    </div>
  )
}

export default App
