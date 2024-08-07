import React, {useState} from 'react'
import "./LogIn.css"
import { login, SignUp } from '../Auth/Auth';

const LogIn = () => {


const [signstate, setSignState] = useState("Sign In");
const [name, setName] = useState("");
const [email, setEamil] = useState("");
const [password, setPassword] = useState("");


const user_Auth = async (event) => {
  event.preventDefault();
  if(signstate === "Sign In"){
    await login(email, password)
  }else{
    await SignUp(name, email, password)
  }
}


  return (
    <>
      <div className="loginPage">
        <div className="logInPage-content">
            <h3>{signstate}</h3>

{/* form switch functionality  */}

    <form action="">
      {signstate === "Sign Up"? <input value={name} onChange={(e)=>{setName(e.target.value)}} type="text"  placeholder='Enter Name'/>:<></>}
          <input value={email} onChange={(e)=>{setEamil(e.target.value)}} type="email" placeholder='Enter Email'/> 
          <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="Password" placeholder='Enter Password'/>

            
    <div className="form-help">
      <div className="remeber">
        <input type="checkbox" />
          <label htmlFor="">Remember Me</label>
          </div>
            <p>Need Help?</p>
          </div>
            </form>
            <button onClick={user_Auth} type='submit'>{signstate}</button>
            <div className="form-switch">

{/* form switch functionality buttons */}

          {signstate==="Sign In"?
          <p>New To MetaBlog ? <span  onClick={()=>{setSignState("Sign Up")}}>Sign Up Now</span></p>:
          <p>Already Have a Account <span onClick={()=>{setSignState("Sign In")}}>Sign In Now</span></p>}

          </div>
        </div>
      </div>
    </>
  )
}

export default LogIn
