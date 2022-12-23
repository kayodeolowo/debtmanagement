import React, { useContext } from "react";
import { Link,  } from "react-router-dom";
import { DataContext } from "../Component/Context/DataProvider";


function ProductCard({ product }) {
  
  // const [cart, setCart] = useContext(DataContext).cart;
  const addToCart = useContext(DataContext).addToCart;
  return (
    <div>
      
        
         <div className="w-[15rem] border-2 px-4 mt-10 rounded-md" >
          <div className="flex items-center justify-between">
              <img className="h-8" src={`${product.url}`} />
            <h1 className="bg-green-300 px-2 text-sm py-1 rounded-xl"> {product.tittle} </h1>
          </div>
          <div className="text-center">
            <h3 className="font-bold text-base">{product.name}</h3>
            <p className="text-sm"> {product.date}</p>
          </div>
          <div className="flex justify-between">
              <h1> Minimum</h1> 
              <p> {product.price}</p>  
           </div>

            <div className="flex justify-between">
              <h1> % Per Year </h1> 
              <p> {product.percent}</p>  
           </div>

            <div className="flex justify-between">
              <h1> Interest Payment </h1> 
              <p> {product.interest}</p>  
           </div>

           <div className="flex justify-between">
              <h1> Opening </h1> 
              <p> {product.opening}</p>  
           </div>

           <div className="flex justify-between">
              <h1> Closing Date </h1> 
              <p> {product.closing}</p>  
           </div>

           <div className="flex justify-between">
              <h1> Settlement </h1> 
              <p> {product.settlement}</p>  
           </div>
         
            
          
           
            <button onClick={() => addToCart(product._id)}>Add To Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
