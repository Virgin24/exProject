import React, { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import ApiServices from '../pages/Services/ApiServices';
import { Link } from 'react-router-dom';

function Carousel() {
         
    const [coinArray, setCoinArray] = useState ([])
    const[loading, setLoading] = useState(false)

    
    // let data

        const coinsData = async () => {
              setLoading(false)
          try {
             const data = await ApiServices.TrendingCoins("USD")
            
             
            //    var newArray = [data]
            //coinArray.push(request)
               setCoinArray(data)

                
               setLoading(true)
          } catch (error) {
            console.log(error)
          }
        }

        const  numberWithComma = (x) => {
     return x.toString().replace(/\B(?=(\d{3}) + (?!\d))/g, ",");
        }
                

        const items = coinArray.map((coin) => {
             
            let profit = coin.price_change_percentage_24h >= 0;

            return (
               // <Link className='' to={`/coin/${coin.id}`}>
                  
               //    <img
               //    src={coin.image}
               //    alt = {coin.name}
               //    style= {{height:80, width:80}}/>
               //    <span>
               //      {coin.symbol} &nbsp;

               //      <span style={{ color: profit > 0 ? "rgb(14, 203,129)" : "red"}}>{profit && "+"} {coin.price_change_percentage_24h?.toFixed(2)}%</span>

               //      {/* <span>{"$"}{numberWithComma(coin.current_price.toFixed(2))}</span> */}
               //      <span>${coin?.current_price}</span>

               //    </span>

               // </Link>
                        <img
                  src={coin.image}
                  alt = {coin.name}
                  style= {{height:80, width:80}}/>
            )
        }) 

         const responsive = {
             0 : {
                items:2,
             },

             512: {
                items: 4
             }

             // this simply means if its more than 521pixels of secreen
             // it should display 4 items, if less display two items
         }

useEffect(()=> {
       coinsData();
},[])

    return ( 
        <div>
        
         
         
         {/* {loading ?( */}
            <AliceCarousel
               //   mouseTracking
                 infinite
                 autoPlayInterval={1000}
                 animationDuration={1500}
                 disableDotsControls
                 disableButtonsControls
                 responsive={responsive}
                 autoPlay
                 items={items}
             />
        {/* ) : "Carousel not working"
        } */}
        </div>
     );
}

export default Carousel;