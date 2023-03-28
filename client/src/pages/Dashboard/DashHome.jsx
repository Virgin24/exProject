import React,{useContext, useEffect,useState} from 'react';
import "../../css/DashHomeContent.css"
import { AppContext } from '../../Context/AppContext';
import CoinmarketPrice from '../../components/Market'; 
import ApiServices from '../Services/ApiServices';


function DashHome() {
      
    const [user, setUser] = useState("")
    const {name, isAuth} = useContext(AppContext)
   
  useEffect = (() => {

       const result =  ApiServices.getToken("token")
       const loggedUser = JSON.parse(result)
    //    console.log(loggedUser)
       setUser(loggedUser.email)
       console.log(user)
   
  }
  )
    return (
        <div className="dashboard_containers">
        <div className="dashboard_headers">
          
          {isAuth ? ( <h2>Welcome, {user.email} </h2>) : "is not seeing the context"} 

           <ul>
                <li><a href="/dashboard/trade"><img src="" alt="deposit" />  Trade</a> </li>
                <li><a href="/dashboard/deposit"><img src="" alt="transefer" />  Deposit</a></li>
                <li><a href="/dashboard/send"><img src="" alt="trade " />  Transfer</a></li>
                <li><a href="/dashboard/withdraw"><img src="" alt="trade" />  Withdraw</a></li>
                <li><a href="/dashboard/convert"><img src="" alt="trade" />  Convert Assets</a></li>

           </ul>
        </div>

      {/* <div className='dashboard_content_container'> */}

           <div className="dashboard_contents">
             <h3>Wallet Assets</h3> 

            {/* <CoinmarketPrice /> */}


                
           </div>
            


       {/* </div> */}
       
      </div>
      );
}

export default DashHome;