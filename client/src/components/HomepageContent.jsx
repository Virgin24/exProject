import React from "react"
import axios from "axios"
import { FaWallet, FaUserShield, FaLayerGroup, FaAngleLeft} from "react-icons/fa"
import CoinmarketPrice from "./Market"
import Pat2 from "../images/pat2.webp"
import crypto2 from "../images/crypto2.jpg"
import crypto6 from "../images/crypto6.png"
import ankr from "../images/brands/ankr.png"
import bitpanda from "../images/brands/bitpanda.png"
import flutterwave from "../images/brands/flutterwave.png"
import moonpay from "../images/brands/moonpay.png"
import opensea from "../images/brands/opensea.png"
import blockchain from "../images/brands/blockchain.png"
import Carousel from "./Carousel"
import "../css/homepagecontent.css"

function HomePageContent () {
     
     
    return ( 
        <>
          {/* <div className="animation_bar"> */}
                {/* coin prices animation bar */}
                <Carousel />
          {/* </div> */}
        <div className="content">
            <div className="first_content">
                <div className="price">
                    
                     <h2 >Buy/Sell & Trade Crypto </h2>
                     <span ><h3 style={{marginBottom: 60, fontSize: 40, color: "ash"}}>start your journey to financial freedom</h3></span>

                    <p>
                        <a href="/"><button >Get Started</button></a>
                        <a href="/"><button >Get Mobile App</button></a>
                    </p>
                   
                </div>

                <div className="img">
                    <img src={crypto2} alt=""  />
                </div>
               
            </div>       
       {/* first content div ends here */}

             {/* second content div ends here */}
              <div className="second_content">

                <span>
                    <h1>$12 Bilion TVL</h1>
                    <p> 24h open trading</p>
                </span>
  
                <span>
                    <h1>1000+ </h1>
                    <p>Registered users </p>
                </span>
                
                  
                <span>
                    <h1><FaAngleLeft/>0.03%  </h1>
                    <p>lowest transaction fees</p>
                </span>

                <span>
                    <h1>50+ coins</h1>
                    <p>API Integrations</p>
                </span>
                
                <span>
                    <h1>5+ products </h1>
                    <p>Top Customer Services</p>
                </span>

              </div>


             {/* third content div starts here */}
             <CoinmarketPrice />

             <div className="third_content">
                <div className="third_content_header">
                   <h1 >Invest in what you love</h1> 
                     <h3 style={{opacity:0.6}}>Automate your investment with as low as $1000 using our</h3>     
                     <h3 style={{opacity:0.6}}> well refined, high yield secured system built </h3>
                     <h3 style={{opacity:0.6}}>built on the blockchain</h3>
                </div>

                 <img src={Pat2} alt="pat2" />
                 <button className="third_content_button">Start Investing</button>

             </div>

             <div className="fourth_content">
                <hr />
                 <h1 className="fourth_content_header" style={{opacity: 0.5, marginRight:500, marginTop:30}}>
                    Trusted by leading brands
                 </h1>

                 <div className="trusted_brands">
                      <img src={ankr} alt="ankr.com" width={100} height= {100} />
                      <img src={bitpanda} alt="bitpanda.com" width={120} height= {60}/>
                      <img src={flutterwave} alt="flutterwave.com" width={160} height= {160}/>
                      <img src={moonpay} alt="moonpay.com"width={100} height= {40}/>
                      <img src={opensea} alt="opensea.com" width={120} height= {120} />
                      <img src={blockchain} alt="blockchain.com" width={180} height= {140} />
                 </div>
             </div>

           <div className="fifth_content">
                 <img src={crypto6}  alt="" /> 
           </div>
            
        </div>
        </>
        
    )

}

export default HomePageContent;