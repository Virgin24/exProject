import React, { useRef } from "react" 
import {FaBars, FaTimes, FaAngleDown, FaWallet } from "react-icons/fa"
import "../css/Nav1.css"

import logo from "../images/logo.jpg"

export default function Nav () {
        const navRef = useRef();

        const [open, setOpen] = React.useState(true) 
        const [open1, setOpen1] = React.useState(true)
        const [open2, setOpen2] = React.useState(true)
        const [open3, setOpen3] = React.useState(true)


       const showNav = ()=>{
           navRef.current.classList.toggle("responsive_nav")

       }

        
       const Dropdown =(props)=> {
        return (
         <li className={`dropdownitems ${open ? 'active' : 'inactive'}`}>
             <a href={`${props.link}`}>{props.text}</a>
         </li>
         
        )
    } 

    const showdropdown = (e)=> {
        switch (e) {
            case "Products":
                setOpen1(false)
                
                break;
            case "Learn":
                setOpen2(false)

            break;

            case "Company":
                setOpen3(false)

            break;
        
            default:

                break;
        }
  
       }

      
       

   return (

       <header>

            <a href="/" style={{marginTop:20, marginLeft:20,textDecoration:"none", display:"flex"}}>
                <img src={logo} alt="logo" height={50} width={50} />
                <h3 style={{marginTop:10, marginLeft:5, color: "black"}}>
                    BitKoin
                </h3>
            </a>
            
            <nav ref={navRef} style= {{}}>

                <div className="products_dropdown"  onMouseLeave={()=>{setOpen1(true)}}>   
                               <ul onClick={(e)=>showdropdown(e.target.innerText)}> Products <FaAngleDown/>
                                    <Dropdown link = "/products/Buy/sell Crypto Assets"  text = "Buy/sell Crypto"/>
                                    <Dropdown link = "/products/wallet"  text = "wallet"/>
                                    <Dropdown link = "/products/transfer"  text = "transfer"/>
                                    <Dropdown link = "/products/payments"  text = "payment"/>
                                    <Dropdown link = "/products/payments"  text = "Asset Storage"/>
                              </ul>
                           
                    </div>
                
                    <div >
                        <a href="">Market</a> 
                    </div>
                 
                    <div className="earn_dropdown" onMouseLeave={()=>{setOpen2(true)}}>

                        <ul  onClick={(e)=>showdropdown(e.target.innerText)}>  Earn <FaAngleDown/>
                            <Dropdown link = "/products/wallet"  text = "Stakings"/>
                            <Dropdown link = "/products/transfer"  text = "Investing"/>  
                        </ul>
                      </div>
             
                    <div className="resources_dropdown" onMouseLeave={()=>{setOpen3(true)}}>
                        <ul  onClick={(e)=>showdropdown(e.target.innerText)} >  Resources <FaAngleDown/>

                            <Dropdown link = "/products/wallet"  text = "how to trade Bitcoin"/>
                            <Dropdown link = "/products/transfer"  text = "Cryptocurrency"/>
                            <Dropdown link = "/products/payments"  text = "features of wallet"/>
                            <Dropdown link = "/products/payments"  text = "our Blog"/>

                        </ul>
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



 

