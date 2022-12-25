
import { Navbar, Product,  Cart } from "./Component/index";
import { Route, Routes } from "react-router-dom";
import { DataProvider } from "./Component/Context/DataProvider";
import { AuthContextProvider } from "./Component/Context/AuthContext";

import SignIn from "./Pages/SignIn";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";
import Account from "./Pages/Account";

function App() {
  return (
    <div className="app">
       <AuthContextProvider> 
      <DataProvider>
        <Navbar />
        <Routes>
           <Route path="/" element={<Home />}/>
          <Route path="/bond-offer" element={<Product />}/>
          <Route path="/cart" element={<Cart />}/>
           <Route path='/signin' element={<SignIn/>} />
            <Route path='/account' element={<Account/>} />
            <Route path='/signup' element={<Signup/>} />
          
            
          
            
          
         
        </Routes>
      </DataProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
