import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../Component/Context/DataProvider";
import {FaCheckSquare} from 'react-icons/fa'
import {HiOutlinePlusCircle, HiOutlineMinusCircle} from 'react-icons/hi'
import {BsChevronDown} from "react-icons/bs"
import { Link } from "react-router-dom";


function Cart() {
  const [cart, setCart] = useContext(DataContext).cart;
  const [total, setTotal] = useState();

  const getTotal = () => {
    let summ = 0;
    for (let i = 0; i < cart.length; i++) {
      summ +=  cart[i].price * cart[i].count  ;
    }
    setTotal(summ);
  };
  useEffect(() => {
    getTotal();
  }, [cart, getTotal]);

  

  const increase = (id) => {
    cart.forEach((element) => {
      if (element._id === id) {
        element.count += 1;
      }
    });
    setCart([...cart]);
  };
  const decrease = (id) => {
    cart.forEach((element) => {
      if (element._id === id) {
        if (element.count <= 1) {
          element.count = 1;
        } else {
          element.count -= 1;
        }
      }
    });
    setCart([...cart]);
  };

  const remove = (id) => {
    const filteredCart = cart.filter((item) => item._id !== id);
    console.log(filteredCart);

    setCart(filteredCart);
    
  };

  return (
    
    <div className="container mx-auto  lg:px-10 xl:max-w-[1280px] lg:mt-20">
      
      
      { cart.length ? (  cart.map((item, index) =>
       (
         
        <div key={index} className="flex flex-row border-2 w-11/12 lg:w-full mx-auto mt-4 px-2   lg:px-8 py-2 lg:py-2 h-fit   :h-[6rem]   justify-evenly sm:space-x-4 lg:justify-between rounded-lg   ">
          
        <div className=" flex flex-col lg:flex-row  lg:space-x-28 items-center  "> 
             <div className="flex mt-4 lg:mt-0  space-x-2 sm:space-x-4 lg:space-x-6"> 
             <FaCheckSquare className=" lg:mt-6 mt-2"/>
            <img className="lg:h-14 h-8 sm:h-10" src={`${item.url}`} />
            <h1 className="font-bold lg:mt-4 sm:mt-2 lg:text-xl">{item.name}</h1>
         </div>

          <div className="  flex mt-10 lg:mt-0  space-x-4  sm:space-x-8  "> 
              <button className="lg:text-base  border-2 px-2 py-0.5 rounded-sm"> Automatic </button>
           <button onClick={() => remove(item._id)}>
              Delete
            </button>
          </div>
        </div>

          <div className=" mt-2  ">                       
            <div className=""> 
              <h1 className="hidden lg:block"> Value(₦) </h1>
            </div>          
            
           <div className="flex flex-col-reverse space-y-2  lg:flex-row justify-between items-center lg:space-x-5  lg:px-2  lg:pb-2 rounded-lg lg:border-2"> 
              <h4 className="font-bold mt-2 text-lg sm:text-2xl lg:text-base flex items-center"> <span className="lg:hidden text-sm"> ₦ </span> {item.count * item.price}</h4>
              <HiOutlineMinusCircle className="hover:cursor-pointer text-xl sm:text-3xl lg:text-base" onClick={() => decrease(item._id)}> - </HiOutlineMinusCircle>
              <span>{item.count}</span>
              
              <HiOutlinePlusCircle className="hover:cursor-pointer text-xl sm:text-3xl lg:text-base " onClick={() => increase(item._id)}> + </HiOutlinePlusCircle>
           </div>
              
            </div>
         

         
        </div>
      )) ) : (<h1> No Bound Offer Found    <span> <Link to="/product"> <button className="text-green-400"> Please click here to Add </button> </Link> </span>  </h1>) }

        { cart.length ? ( 
        
       <div> 
             <div className="border-2 mt-6 pl-16 pr-10 flex flex-col mx-auto rounded-lg w-11/12 lg:w-full lg:flex-row justify-between pt-4 pb-5">
       
        <div className="flex flex-col space-y-8"> 
           <div className="flex space-x-16"> 
               <h1 className="flex "> Fees + Taxes <span className="mt-2 ml-1 ">  <BsChevronDown className="h-3"/> </span>   </h1>
            <h1> N 2.09 </h1>

           </div>

           <div className=" lg:w-[18rem] lg:text-[0.9rem]"> 
              <p> This is a 730 days Saving Bond, you have a fixed income </p>
           </div>
        </div>

        <div className="flex lg:items-end mt-4 justify-center lg:justify-start items-center lg:flex-col space-x-4 lg:space-x-0 "> 
          <h1 className="lg:text-end text-center mt-1 lg:mt-0"> Total Buy </h1>
          <h1 className="font-bold text-center text-xl sm:text-2xl lg:text-end w-fit  lg:text-lg  mt-1">₦{total + 2.0900} </h1>
        </div>
          
        
      </div>

      <div className="w-fit mx-auto flex lg:w-full mt-4 lg:mt-8 lg:justify-end"> 
        <button className=""> Checkout </button>
      </div>
       </div>
        ) : "" }


       
    </div>
  );
}
export default Cart;
