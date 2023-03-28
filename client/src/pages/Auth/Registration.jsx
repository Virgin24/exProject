import React, {useState, UseEffect} from "react"
import "../../css/Signup.css"

export  function SignupPage () {
    const [ email, setEmail] = useState("")
    const [ password, setPassword] = useState("")

    return (
        <div className="class_container">    
             
                  <h2>Create a free Bitkoin account</h2>
                  
                <label>First Name</label>
                
                <input type="text" name="firstname"  />
                 
                <label>Last Name</label>
                
                <input type="text" name="lastname" id="" />

                
                <label> Email Address</label>
                
                <input type="email" name="email" id="" />
                 
                 
                <label> Password</label>
                
                <input type="password" name="password" id="password" />
                
                
                 <label>
                    <input type="checkbox" style={{height:18, width:12,  marginRight:10}}/>
                       I aggree to Bitkoin Financial Services <a  style={{textDecoration:"none"}} href="/#">Terms and condition </a>  
                       and <a style={{textDecoration:"none"}} href="/#"> privacy policies</a> 
                  </label>
                 

               
                 <button type="submit">Create Account</button>
                
                 <a style={{textDecoration:"none"}} href="/accounts/login">Already have an account? LogIn</a>
                       
        </div>
    )
}