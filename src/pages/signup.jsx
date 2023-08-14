import React from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
  return (
    <div>
   <div className="login-page">
  <div className="form">
    <form className="login-form">
      <input type="text"  style={{color: 'black'}}  placeholder="name"/>
      <input type="password" style={{color: 'black'}}  placeholder="password"/>
      <input type="text"  style={{color: 'black'}} placeholder="email address"/>

      <button>create</button>
      <p className="message">Already registered? <Link to="/login">Sign In</Link></p>
    </form>
    
  </div>
</div>
    </div>
  )
}
