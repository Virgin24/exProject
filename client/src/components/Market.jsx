import React from 'react';
import { FaArrowDown, FaAngleRight} from "react-icons/fa"
import axios from "axios"
import bnblogo from "../images/coinlogo/bnblogo.png"
import ethlogo from "../images/coinlogo/ethlogo.png"
import btclogo from "../images/coinlogo/btclogo.png"
import polygonlogo from "../images/coinlogo/polygonlogo.png"
import shibalogo from "../images/coinlogo/shibalogo.png"
import "../css/market.css"




function CoinmarketPrice() {

  const [btcprice, setbtcprice] = React.useState(null)
  const [ethprice, setethprice] = React.useState(null)
  const [bnbprice, setbnbprice] = React.useState(null)
  const [ polygonprice, setpolygonPrice] = React.useState(null)
  const [shibaprice, setshibaPrice] = React.useState(null)

   const setCoinPrice = async () => {
      var coinprices = await axios.get("https://api.binance.com/api/v3/ticker/price")

      console.log(coinprices)
    // setethprice(coinprices.data[12].price)
          // setbnbprice(coinprices.data[98].price)
          // setbtcprice(coinprices.data[11].price)
          
       
   }
  
   React.useEffect(()=> {
      // setCoinPrice();
   })
      

    return ( 
        <div className='container'>
            <h2>Top Cryptocurrency markets</h2>
                {/* <div>BTC {Number(btcprice).toFixed(2)}</div>
                    <div>ETH{Number(ethprice).toFixed(2)}</div>
                    <div>BNB {Number(bnbprice).toFixed(2)}</div> */}
            <table>
                <tr>
                  <th> Name</th>
                  <th>Price</th>
                  <th>24 Change</th>
                  <th>Trade Action</th>
                </tr>
                <tr>
                    <td>
                      <img src={bnblogo} alt="bnb logo" height={30} width={30} />
                      <strong style={{margin: 4}}>BNB</strong>  BNB</td>
                    <td>$307.7</td>
                    <td style={{color:"red"}}><FaArrowDown/>2.300</td>
                    <td><button>Buy/Sell</button></td>  
                </tr>

                <tr>
                    
                    <td>
                      <img src={btclogo} alt="btc logo" height={50} width={50} />
                       <strong>Bitcoin</strong> BTC</td>
                    <td>$21,307.7</td>
                    <td style={{color:"green"}}><FaArrowDown/>1.3400</td>
                    <td><button>Buy/Sell</button></td>  
                </tr>

                <tr>
                    
                  <td> 
                    <img src={ethlogo} height={40} width={40} alt="" />
                    <strong style={{margin: 4}}>Ethereum</strong> ETH</td>
                  <td>$1,307.7</td>
                  <td style={{color:"blue"}}><FaArrowDown/>0.33300</td>
                  <td><button>Buy/Sell</button></td>  
                </tr>

                <tr>
                   
                  <td> 
                     <img src={polygonlogo}  alt="polygon logo" height={40} width={40} />
                      <strong style={{margin: 4}}>Polygon</strong>Matic</td>
                  <td>$0.9789</td>
                  <td style={{color:"red"}}><FaArrowDown/>2.300</td>
                  <td><button>Buy/Sell</button></td>  
                </tr>

                <tr>
                    
                  <td>
                    <img src={shibalogo} alt="shiba inu logo" height={40} width={40} />
                    <strong style={{margin: 4}}>SHIBA INU</strong>Shib </td>
                  <td>$0.00227</td>
                  <td style={{color:"red"}}><FaArrowDown/>2.300</td>
                  <td><button>Buy/Sell</button></td>  
                </tr>
                
                <h3> <a href="#">see more < FaAngleRight /></a> </h3>

                <button>start trading</button>
              </table>

              
        </div>
      );
}

export default CoinmarketPrice;