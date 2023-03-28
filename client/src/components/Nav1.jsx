import React, { useRef } from "react" 
import {FaBars, FaTimes, FaAngleDown, FaWallet } from "react-icons/fa"
import "../css/Nav1.css"

import logo from "../images/logo.jpg"

export default function NavHeader () {
        const navRef = useRef();

        const [open1, setOpen1] = React.useState(true)
        const [open2, setOpen2] = React.useState(true)
        const [open3, setOpen3] = React.useState(true)


       const showNav = ()=>{
           navRef.current.classList.toggle("responsive_nav")
       }

        
       const ProductsDropdown =(props)=> {
        return (
         <li className={`dropdownitems ${open1 ? 'active' : 'inactive'}`}>
             <a href={`${props.link}`}>{props.text}</a>
         </li>

    //     <li className={`dropdownitems `}>
    //     <a href={`${props.link}`}>{props.text}</a>
    // </li>
         
        )
    } 

    const  EarnDropdown =(props)=> {
        return (
         <li className={`dropdownitems ${open2 ? 'active' : 'inactive'}`}>
             <a href={`${props.link}`}>{props.text}</a>
         </li>
         
        )
    }   

    const ResourcesDropdown =(props)=> {
        return (
         <li className={`dropdownitems ${open3 ? 'active' : 'inactive'}`}>
             <a href={`${props.link}`}>{props.text}</a>
         </li>
        )
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

                <div className="products_dropdown" onClick={()=>setOpen1(true)} >
                    
                            <ul onMouseLeave={()=>{setOpen1(false)}}>Products  <FaAngleDown />
                                    <ProductsDropdown link = "/products/Buy/sell Crypto Assets"  text = "Buy/sell Crypto"/>
                                    <ProductsDropdown link = "/products/wallet"  text = "wallet"/>
                                    <ProductsDropdown link = "/products/transfer"  text = "transfer"/>
                                    <ProductsDropdown link = "/products/payments"  text = "payment"/>
                                    <ProductsDropdown link = "/products/payments"  text = "Asset Storage"/>
                            </ul>           
                    </div>
                
                    <div >
                        <a href="">Market</a> 
                    </div>
                 
                    <div className="earn_dropdown" onClick={()=>setOpen2(true)}>

                        <ul onMouseLeave={()=>{setOpen2(false)}}>  Earn <FaAngleDown/>
                            <EarnDropdown link = "/products/wallet"  text = "Stakings"/>
                            <EarnDropdown link = "/products/transfer"  text = "Investing"/>  
                        </ul>
                      </div>
             
                    <div className="resources_dropdown" onClick={()=>setOpen3(true)}>
                        <ul onMouseLeave={()=>{setOpen3(false)}} >  Resources <FaAngleDown/>

                            <ResourcesDropdown link = "/products/wallet"  text = "how to trade Bitcoin"/>
                            <ResourcesDropdown link = "/products/transfer"  text = "Cryptocurrency"/>
                            <ResourcesDropdown link = "/products/payments"  text = "features of wallet"/>
                            <ResourcesDropdown link = "/products/payments"  text = "our Blog"/>

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



 

