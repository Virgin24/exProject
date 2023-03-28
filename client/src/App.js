import {Routes, Route, BrowserRouter} from "react-router-dom"
import HomePage from "./pages/Common/Home";
import LoginPage from "./pages/Auth/Login";
import {SignupPage} from "./pages/Auth/Registration";
import AuthRoute from "./pages/Auth/AuthRoute"
import AppContextProvider from "./Context/AppContext";
import NavHeader from "./components/Nav1";


function App() {

  return (
    <AppContextProvider>
          <div>
              <NavHeader />

               <BrowserRouter>

                    <Routes> 
                      <Route path="/" element={<HomePage />}/>
                      <Route path="/accounts/login"  element={<LoginPage />}/> 
                      <Route path= "/accounts/signup" element= { <SignupPage /> } /> 
                      {/* <Route path= "/accounts/signup" exact component= {SignupPage } />  */}
                      <Route path= "*" element= { <AuthRoute/> } /> 
                    </Routes>

                </BrowserRouter> 
          </div>
    </AppContextProvider>
          

      
  )
}

export default App;
