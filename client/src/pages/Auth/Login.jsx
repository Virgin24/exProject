import React from "react"
import "../../css/Login.css"
import ApiServices from "../Services/ApiServices"
import { useNavigate } from "react-router-dom"


export default function LoginPage () {

           const navigate = useNavigate()

  const [ email, setEmail] = React.useState()
  const [ password, setPassword] = React.useState()

  const checkAuth = async () => {

       if(!email || !password){
          alert("provide email and password")
           return
         }
         console.log(email,password);

         try {
           let config = {
             email : email,
             password : password
           }
           const response  =  await ApiServices.postDataNoAuth('/api/auth/login',config)
           
            ApiServices.storeToken("token", response)
         
           console.log(response);
          
              if(response){
                navigate('/dashboard')
              }
           
         } catch (error) {
           console.log('error',error);
         }

  }

    return (
      <div className="class_container">    
             
      <h2>User Login</h2>
      
    <label> Email Address</label>
    
    <input  type="email" name="email" id="" onChange = {(e)=> setEmail(e.target.value)} style={{width: 400, height: 45}} />
     
     
    <label> Password</label>
    
    <input type="password" name="password" id="password" onChange={(e)=> setPassword(e.target.value)} style={{width: 400, height: 45}} />
    
    
     <label>
        <a  style={{textDecoration:"none"}} href="/#">Forgot your password</a>
      </label>
     

   
     <button  onClick={checkAuth} type="submit">LogIn</button>
    
     <a style={{textDecoration:"none", color:"bl"}} href="/accounts/signup">Don't have an account yet? SignUp </a>
           
   </div>
    )
}