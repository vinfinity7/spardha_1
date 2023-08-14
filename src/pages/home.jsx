import React from 'react'
import "./pages.css"
import { Link } from 'react-router-dom'





export default function Home() {
  return (
    <div>
    <div className='form fire'>
   <Link to="/login">  <button >login</button> </Link> 
    </div>
    
    <div className='form fire'>
   <Link to="/signup" > <button >Signup</button></Link>
      </div></div>
  )
}
