import React from 'react';
import "../../css/Withdraw.css"

function Withdraw() {
    return (  
        <div className="dashboard_contain">
            <div className="dashboard_head">
               <h2>Welcome, username </h2>

               <ul>
                
                    <li><a href="/dashboard/trade"><img src="" alt="deposit" />  Trade</a> </li>
                    <li><a href="/dashboard/deposit"><img src="" alt="transefer" />  Deposit</a></li>
                    <li><a href="/dashboard/send"><img src="" alt="trade " />  Transfer</a></li>
                    <li><a href="/dashboard/withdraw"><img src="" alt="trade" />  Withdraw</a></li>
                    <li><a href="/dashboard/convert"><img src="" alt="trade" />  Convert Assets</a></li>

               </ul>
            </div>

           <div className='dashboard_cont'>
                <h3> Make Withdraw</h3> 


           </div>
           
        </div>
    );
}

export default Withdraw;
<>
</>