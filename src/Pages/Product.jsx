import React, { useContext } from "react";

import { DataContext } from "../Component/Context/DataProvider";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import {AiOutlineHeart} from 'react-icons/ai'

function Product() {
  const [products] = useContext(DataContext).products;
   const addToCart = useContext(DataContext).addToCart;

  return (
   <div className="container mx-auto xl:max-w-[1280px]  "> 
     <Splide className=' xl:hidden' options={{
                        
                       
                      perPage:1,
                     arrows: true,
                        pagination: false,
                        drag:"free",
                       gap: "2rem",
                      

                    }}  > 
                    
      
      {products.map((product) => (
        <SplideSlide product={product} key={product._id}>
             <div className="container mx-auto ">
      
        
         <div className=" mb-10"> 
            <div className="w-[19rem]  lg:w-[18rem] pb-4  mx-auto border-2 border-primarygreen px-4 mt-10 rounded-md flex-col space-y-4 text-sm" >
          <div className="flex  items-center justify-between mt-4">
              <img className="h-8" src={`${product.url}`} />
            <h1 className="bg-[#C1EED6] px-2 text-sm py-1 rounded-xl "> {product.tittle} </h1>
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-xl text-headingGray">{product.name}</h3>
            <p className="text-sm lg:text-xs text-textGray font-medium"> {product.date}</p>
          </div>
          <div className="flex justify-between">
              <h1 className="text-textGray"> Minimum</h1> 
              <p className="font-semibold text-headingGray"> ₦{product.price}</p>  
           </div>

            <div className="flex justify-between">
              <h1 className="text-textGray"> % Per Year </h1> 
              <p className="font-semibold text-headingGray"> {product.percent}%</p>  
           </div>

            <div className="flex justify-between">
              <h1 className="text-textGray"> Interest Payment </h1> 
              <p className="font-semibold text-headingGray"> {product.interest}</p>  
           </div>

           <div className="flex justify-between">
              <h1 className="text-textGray"> Opening </h1> 
              <p className="font-semibold text-headingGray"> {product.opening}</p>  
           </div>

           <div className="flex justify-between">
              <h1 className="text-textGray"> Closing Date </h1> 
              <p className="font-semibold text-headingGray"> {product.closing}</p>  
           </div>

           <div className="flex justify-between">
              <h1 className="text-textGray"> Settlement </h1> 
              <p className="font-semibold text-headingGray"> {product.settlement}</p>  
           </div>
         
             

            
          <div className="w-fit mx-auto flex space-x-2 items-center">
              <button className="bg-primarygreen text-white font-medium px-4 rounded py-2" onClick={() => addToCart(product._id)}>Add to cart</button>

              <AiOutlineHeart className="text-2xl"/>
          </div>
           
            
      </div>
         </div>
    </div>
        </SplideSlide> 
        
      ))}
    


    </Splide>

    <Splide className=' xl:flex hidden lg:px-10' options={{
                        
                        
                      perPage:4,
                     arrows: true,
                    
                        pagination: false,
                        
                       gap: "1rem",
                      

                    }}  > 
                    
      
      {products.map((product) => (
        <SplideSlide product={product} key={product._id}>
             <div className="container mx-auto ">
      
        
         <div className=" mb-10"> 
            <div className="w-[18rem]  lg:w-[17rem] pb-4  mx-auto border-2 border-primarygreen px-4 mt-10 rounded-md flex-col space-y-4 text-sm" >
          <div className="flex  items-center justify-between mt-4">
              <img className="h-8" src={`${product.url}`} />
            <h1 className="bg-[#C1EED6] px-2 text-sm py-1 rounded-xl "> {product.tittle} </h1>
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-xl text-headingGray">{product.name}</h3>
            <p className="text-sm lg:text-xs text-textGray font-medium"> {product.date}</p>
          </div>
          <div className="flex justify-between">
              <h1 className="text-textGray"> Minimum</h1> 
              <p className="font-semibold text-headingGray"> ₦{product.price}</p>  
           </div>

            <div className="flex justify-between">
              <h1 className="text-textGray"> % Per Year </h1> 
              <p className="font-semibold text-headingGray"> {product.percent}%</p>  
           </div>

            <div className="flex justify-between">
              <h1 className="text-textGray"> Interest Payment </h1> 
              <p className="font-semibold text-headingGray"> {product.interest}</p>  
           </div>

           <div className="flex justify-between">
              <h1 className="text-textGray"> Opening </h1> 
              <p className="font-semibold text-headingGray"> {product.opening}</p>  
           </div>

           <div className="flex justify-between">
              <h1 className="text-textGray"> Closing Date </h1> 
              <p className="font-semibold text-headingGray"> {product.closing}</p>  
           </div>

           <div className="flex justify-between">
              <h1 className="text-textGray"> Settlement </h1> 
              <p className="font-semibold text-headingGray"> {product.settlement}</p>  
           </div>
         
             

            
          <div className="w-fit mx-auto flex space-x-2 items-center">
              <button className="bg-primarygreen text-white font-medium px-4 rounded py-2" onClick={() => addToCart(product._id)}>Add to cart</button>

              <AiOutlineHeart className="text-2xl"/>
          </div>
           
            
      </div>
         </div>
    </div>
        </SplideSlide> 
        
      ))}
    


    </Splide>
   </div>
  );
}

export default Product;



