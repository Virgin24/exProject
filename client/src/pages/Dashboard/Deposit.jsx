import React, { useContext, useEffect, useState } from 'react';
import "../../css/Deposit.css"
import { AppContext } from '../../Context/AppContext';
import ApiServices from '../Services/ApiServices';

function Deposit() {
       
    const [user, setUser] = useState("")
    const {name, isAuth} = useContext(AppContext)
   
  useEffect = (() => {

       const result =  ApiServices.getToken("token")
       const loggedUser = JSON.parse(result)
       console.log(loggedUser)
       setUser(loggedUser.email)
   
  }
   
  ) 

    return (  
        <div className="dashboard_container">
            <div className="dashboard_header">
               <h2>Welcome, {isAuth} </h2>

               <ul>
                   <li><a href="/dashboard/trade"><img src="" alt="deposit" />  Trade</a> </li>
                    <li><a href="/dashboard/deposit"><img src="" alt="transfer" />  Deposit</a></li>
                    <li><a href="/dashboard/send"><img src="" alt="trade " />  Transfer</a></li>
                    <li><a href="/dashboard/withdraw"><img src="" alt="trade" />  Withdraw</a></li>
                    <li><a href="/dashboard/convert"><img src="" alt="trade" />  Convert Assets</a></li>

               </ul>
            </div>

            <div  className='dashboard_content'>

                <h2> Make Deposit</h2>

                <h3> Select Coin</h3>
                 <select name="" id="">
                    <option value="">BTC</option>
                    <option value="">ETH</option>
                    <option value="">BNB</option>
                    <option value="">TRON</option>

                 </select> 
                
                <h3> Select Network</h3>
                <select name="" id="">
                    <option value="">ERC20</option>
                    <option value="">BEP20</option>
                    <option value="">Bitcoin</option>

                </select> 
                 
           </div> 
           
        </div>
    );
}

export default Deposit;
<>
</>