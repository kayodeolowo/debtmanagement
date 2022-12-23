
import { Navbar, Product, ProductDetails, Cart } from "./Component/index";
import { Route, Routes } from "react-router-dom";
import { DataProvider } from "./Component/Context/DataProvider";
import SignUp from "./Pages/Signup";
import Home from "./Pages/Home";


function App() {
  return (
    <div className="app">
      <DataProvider>
        <Navbar />
        <Routes>
           <Route path="/" element={<Home />}/>
          <Route path="/product" element={<Product />}/>
          <Route path="/cart" element={<Cart />}/>
           <Route path="/signup" element={<SignUp />}/>
          
            
          
            
          
         
        </Routes>
      </DataProvider>
    </div>
  );
}

export default App;
