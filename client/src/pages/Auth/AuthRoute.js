import { useEffect ,useContext} from 'react'
import {Routes,Route}  from 'react-router-dom'
import HomePage from '../Common/Home'
import DashHome from '../Dashboard/DashHome'
import Deposit from '../Dashboard/Deposit'
import Trade from '../Dashboard/Trade'
import Withdraw from '../Dashboard/Withdraw'
import { AppContext } from '../../Context/AppContext'
import Notfound from '../Common/NotFound'
// import {Container} from 'react-bootstrap'



export default function  AuthRoute(props){

   //  const {setToken,isAuth} = useContext(AppContext)
const isAuth = true
   useEffect(() => {

      checkAuth()
      
 
   return () => {
     
   }
 }, [])
 

 async function checkAuth(){
   
    try {
       const token =  localStorage.getItem('token')
      // setToken(token)
     
    } catch (error) {
         console.log(error)
    }
 }


    return (

      
            <Routes>
                {isAuth ? (
                    <>
                    
                    <Route  path='/dashboard/deposit'  element = {<Deposit />} />
                    <Route  path='/dashboard/trade'  element = {<Trade />} />
                    <Route  path='/dashboard'  element = {<DashHome/>} />
                    <Route  path='/dashboard/withdraw'  element = {<Withdraw />} />
                    
                    
                    </>
                ):
                (<>
                     <Route  path='/'  element = {<HomePage />} />
                     <Route  exact  path='*'   element={<Notfound/>} />
                
                
                </>)
              
                }

                   {/* <Route  path='dashboard/deposit'  element = {<Deposit />} />
                    <Route  path='dashboard/trade'  element = {<Trade />} />
                    <Route  path='dashboard/withdraw'  element = {<Withdraw />} />
                    <Route  path='/dashboard'  element = {<DashHome/>} />
                   */}
            </Routes>
    )
}