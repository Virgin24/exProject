import React from "react"
import {FaFacebook, FaTwitter } from "react-icons/fa"
import logo from "../images/logo.jpg"
import "../css/Footer.css"

export default function Footer () {


    return (
        <div className="container" style={{border: "1px solid blue"}}>

            <div className="newsletter">
                    <h3> subscribe to our newsletter</h3>
                <br />
                <input type="text" name="newsletter" id="" />
            </div>

            <div className="company">  Features
                <ul>
                    <li><a href="/#">Products</a></li>
                    <li><a href="/#">crypto academy</a></li>
                    <li><a href="/#">Blog</a></li>
                </ul>
               <ul>
                    <li><a href="">Terms $ condition</a></li>
                    <li><a href="">learn </a></li>
                    <li><a href="/#">About</a></li>
                    <li><a href="/#">contact</a></li>
                    <li><a href="/#">Careers</a></li>
                    <li><a href="/#">Help Support</a></li> 
               </ul>
            </div>
           
           
           <div className="footer_bottom">
                <a href="/" style={{textDecoration:"none", display:"flex"}}>
                        <img src={logo} alt="logo" height={50} width={50} />
                    <h3 style={{marginTop:10, marginLeft:5, color: "black"}}>
                        BitKoin
                    </h3>
                    </a>
               
               <span>@ 2021 -2023</span>
               
               <h3>All rights Reserved</h3>
                
                <span> <FaFacebook/>  <FaTwitter/></span>

           </div>
           
        </div>
    )
}