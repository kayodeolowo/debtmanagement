import React, { useContext } from "react";
import { cartContext } from "../GlobalState/CartContext";
import { bondContext } from "../GlobalState/Bondcontext";
import {BsSuitHeart} from 'react-icons/bs'

const Products = () => {
  const { dispatch } = useContext(cartContext);
  const products = useContext(bondContext);

  return (
    <div className="mx-auto container">
      <div className="w-[15rem] border-2 px-4 mt-10 rounded-md">
      {products.map((product) => (
        <div className="mt-2" key={product.id}>
          <div className="flex items-center justify-between">
            <img className="h-8" src={product.image} alt="not-found" />
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
              <h1> Closing </h1> 
              <p> {product.closing}</p>  
           </div>

           <div className="flex justify-between">
              <h1> Settlement </h1> 
              <p> {product.settlement}</p>  
           </div>

            {/* className="text-[#9AF493]" */}
       
          <div className="flex items-center w-1/2 mx-auto justify-between border-2 mt-6">
           
 
           <button   onClick={() => {
              dispatch({
                type: "ADD_TO_CART",
                id: product.id,
                product,
              });
            }}> Add to cart </button>

            <BsSuitHeart className=""/> 

          </div>
         
        </div>
      ))}
    </div> 

    </div>
  );
};

export default Products;
