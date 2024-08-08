import React, {useState} from 'react'
import "./LogIn.css"
//import { login, SignUp } from '../Auth/Auth';
import { Link } from 'react-router-dom'


const LogIn = () => {

 
{/*const [signstate, setSignState] = useState("Sign In");
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
}*/}


  return (
    <>
      <div className="loginPage">
        <div className="logInPage-content">
            <h3>Sign In</h3>

{/* form switch functionality  */}

    <form >
       <input   type="email"  placeholder='Enter Email'/>
         
          <input  type="Password" placeholder='Enter Password'/>

            
    <div className="form-help">
      <div className="remeber">
        <input type="checkbox" />
          <label htmlFor="">Remember Me</label>
          </div>
            <p>Need Help?</p>
          </div>
            </form>
            
            <button  type='submit'>Sign In</button>
            <div className="contact">
            <p>New To MetaBlog ? <span><Link to="/SignUp">SignUp</Link></span></p></div>


            {/*<div className="form-switch">



          {signstate==="Sign In"?
          :
          <p>Already Have a Account <span onClick={()=>{setSignState("Sign In")}}>Sign In Now</span></p>}

          </div>*/}
        </div>
      </div>
    </>
  )
}

export default LogIn
