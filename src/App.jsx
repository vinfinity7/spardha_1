import React from 'react'


import Login from './pages/login'
import Signup from './pages/signup'
import Home from './pages/home'
import { Route,  Routes } from 'react-router-dom'


function App() {
 

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
 
      
    </Routes>
    </>
  )
}

export default App

    
  