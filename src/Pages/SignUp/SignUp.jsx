import React from 'react'
import "./SignUp.css"
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <>
      <div className="sign">
        <div className="sign-content">
            <h3>Sign Up</h3>
            <form action="">
            <input type="text" placeholder='Enter Name'/>
            <input type="email" placeholder='Enter Email'/>
            <input type="Password" placeholder='Enter Password'/>
            </form>
            <button>Sign Up</button>
            <p>Already have any account <Link to={"LogIn"}>LogIn</Link></p>
        </div>
      </div>
    </>
  )
}

export default SignUp
