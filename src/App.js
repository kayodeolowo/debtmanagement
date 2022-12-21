import BondContextProvider from "./GlobalState/Bondcontext";
import CartContextProvider from "./GlobalState/CartContext";
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Cart from "./components/Cart";


function App() {
  return (
   <> 
       <BondContextProvider>
        <CartContextProvider>
          <BrowserRouter>
            <Navbar />
          
            <Routes>
              <Route exact path="/" element={<Products/>} />
              <Route exact path="/cart" element={<Cart/>} />
              
            </Routes>
          </BrowserRouter>
        </CartContextProvider>
      </BondContextProvider>
  </>
  );
}

export default App;
