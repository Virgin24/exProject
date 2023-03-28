import React, { useRef } from "react" 
import {FaBars, FaTimes, FaAngleDown } from "react-icons/fa"
import "../css/Nav1.css"

import logo from "../images/logo.jpg"

export default function Nav () {
        const navRef = useRef();
        const[state, setState ] = React.useState(false)
        const[state1, setState1 ] = React.useState(false)
        const[state2, setState2 ] = React.useState(false)


       const showNav = ()=>{
           navRef.current.classList.toggle("responsive_nav")

       }

       const showdropdown = (e)=> {
        switch (e) {
            case "Products":
                setState(true)
                
                break;
            case "Learn":
                setState2(true)

            break;

            case "Company":
                setState1(true)

            break;
        
            default:

                break;
        }
  
       }

       const hidedropdown = ()=> {
        setState(false)
        setState2(false)
        setState1(false)
       }

      
       

   return (

       <header>
            <a href="/" style={{textDecoration:"none", display:"flex"}}>
                <img src={logo} alt="logo" height={50} width={50} />
            <h3 style={{marginTop:10, marginLeft:5, color: "black"}}>
                BitKoin
            </h3>
            </a>
           

            
            <nav ref={navRef} style= {{marginLeft: 50}}>
                
                <div onClick={(e) => showdropdown(e.target.innerText)}>Products<FaAngleDown/> 
                     {state  && (
                        // <ul className="products-menu" onMouseLeave={hidedropdown}>
                        <ul className="" onMouseLeave={hidedropdown}>
                           <li><a href="/#">my wallet</a></li>
                           <li><a href="/#">Payment Gateway</a></li>
                           <li><a href="/#">Transfer</a></li>
                           <li><a href="/#">Pay Bills</a></li> 
                        </ul>
                     ) }
                     
                </div>

                <div><a href="/#">Invest</a></div>
                
                <div onClick={(e) => showdropdown(e.target.innerText)}>Company<FaAngleDown /> 
                   {state1 &&(
                    <ul className="products-menu" onMouseLeave={hidedropdown}>
                        <li><a href="/#">About</a></li>
                        <li><a href="/#">contact</a></li>
                        <li><a href="/#">Careers</a></li>
                        <li><a href="/#">Help Support</a></li> 
                    </ul>
    
                   )}
                     
                </div>
                <div onClick={(e) => showdropdown(e.target.innerText)}>Learn<FaAngleDown/>
                     {state2 && (
                        <ul className="products-menu" onMouseLeave={hidedropdown}>
                        <li><a href="/#">cryptocurrency</a></li>
                        <li><a href="/#">crypto academy</a></li>
                        <li><a href="/#">Blog</a></li>
                     </ul>
                     
                     )
                    }
                     
                </div>
                 
                 <span>
                    
                    <a href="/accounts/login"><button className="login-btn">Login</button></a>
                    
                    <a href="/accounts/signup"><button className="signup-btn">Signup</button></a>

                 </span>

                <button className="nav-btn nav-close-btn" onClick={showNav}>
                   <FaTimes />
                </button>

            </nav>
           

            

            <button className="nav-btn" onClick={showNav}>
                    <FaBars />
             </button>

            
       </header>
   )
}