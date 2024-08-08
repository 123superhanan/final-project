import React from 'react'
import "./SignUp.css"
import { Link } from 'react-router-dom'




const SignUp = () => {

  





  return (
    <>
      <div className="sign">
        <div className="sign-content">
            <h3>Sign Up</h3>
            <form >
            <input type="name" placeholder='Enter Name'/>
            
            <input type="email" placeholder='Enter Email'/>
            <input type="Password" placeholder='Enter Password'/>
            <div className="form-help">
      <div className="remeber">
        <input type="checkbox" />
          <label htmlFor="">Remember Me</label>
          </div>
            <p>Need Help?</p>
          </div>
            </form>
            <button type='submit'>Sign Up</button>
          <div className="contact"><p>Already have any account <Link to="/logIn">logIn</Link></p></div>  
        </div>
      </div>
    </>
  )
}

export default SignUp;
