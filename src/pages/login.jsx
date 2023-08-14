import React from 'react'
import "./pages.css"
import { Link } from 'react-router-dom'
export default function Login() {
  return (
    <div>
    
    <div className="login-page">
  <div className="form">
    <form className="login-form">
      <input type="text" style={{color: 'black'}} placeholder="username"  onChange={(e)=>(e.target.value)}/>
      <input type="password" style={{color: 'black'}} placeholder="password"  onChange={(e)=>(e.target.value)}/>
      <button>login</button>
      <p className="message">Not registered? <Link to="/signup">Create an account</Link></p>
    </form>
  </div>
</div>


   
    
    </div>
  )
}
