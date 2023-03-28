import {createContext ,useState}   from 'react'
import ApiServices from '../pages/Services/ApiServices'


// export  const  AppContext = createContext({
//     token : '',
//     isAuth :  false,
//     setToken : () => {},
//     logOut : () => {},
//    // isUser : ''
   
//  })

export const AppContext = createContext()


 export default  function  AppContextProvider({children}){

    const  [token,setToken] = useState('')
    const [isAuth, setisAuth] = useState(false)
  
      function setAuth(token){
        

        //  const Token = ApiServices.getToken("token")
        setToken(token)

        // setisAuth(true)
      }

      function logOut(){
        localStorage.clear()
        setToken(null)
      }

      const value = {
        name: "angel",
        token : token,
        isAuth : !!token,
        setToken : setAuth,
        logOut : logOut
      }
 
      return <AppContext.Provider value= {value} > {children} </AppContext.Provider>

 }



