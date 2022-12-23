import React, { useContext, useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

import { AiOutlineClose } from 'react-icons/ai';
import { TbMenu2 } from 'react-icons/tb';

import {FiShoppingCart} from 'react-icons/fi';
import { DataContext } from "../Context/DataProvider";




const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false)
    const [cart] = useContext(DataContext).cart;
  
  const activeLink = " text-primaryblue transition duration-300 font-semibold   ";
  const normalLink = "";


  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo)
  };




 
  
    return (
      <header className='bg-[#ECF2FE]'> 
         <div className="flex container mx-auto justify-between  items-center h-20 md:h-16       
          text-white  z-10  xl:max-w-[1280px] md:px-10  "> 
          
                    
                    <div className=' md:px-0 ' >
                      <NavLink to='/'>
                        <div className='flex items-center'> 
                       <img   className='hover:cursor-pointer transition h-6 lg:h-12 mt-4' src="./images/coat.png" alt='logo'/>
                     

                      <h1 className='md:mt-3 mt-3  text-[#1B3781] text-xs sm:ml-2 sm:text-sm font-bold'> DEBT MANAGEMENT OFFICE NIGEIA</h1>  
                          </div>
                         </NavLink>
                        
                     </div> 
                     

                     <div    className='md:flex   '> 
                        <ul id='nav' className=' text-sm   text-[#000000] hidden   md:flex    mt-1 space-x-8  '> 
                        
                                <NavLink to='/product'  className={({ isActive }) => (isActive ? activeLink : normalLink)}    >  <p className=' hover:text-primarygreen mt-1 hover:cursor-pointer transition  hover:text-primaryblue duration-200 hover:text-semibold'>Bond Offer </p>   </NavLink>
                            <NavLink to='/about-us'  className={({ isActive }) => (isActive ? activeLink : normalLink)}    >  <p className=' hover:text-primarygreen mt-1 hover:cursor-pointer transition  hover:text-primaryblue duration-200 hover:text-semibold'> DMO </p>   </NavLink>
                              <NavLink to='/features'  className={({ isActive }) => (isActive ? activeLink : normalLink)}    >  <p className=' hover:text-primarygreen mt-1 hover:cursor-pointer transition  hover:text-primaryblue duration-200 hover:text-semibold'>Features </p>   </NavLink>
                              <NavLink to='/safety'  className={({ isActive }) => (isActive ? activeLink : normalLink)}    >  <p className=' hover:text-primarygreen mt-1 hover:cursor-pointer transition  hover:text-primaryblue duration-200 hover:text-semibold'>Login </p>   </NavLink>
                               <NavLink to='/signup'  className={({ isActive }) => (isActive ? activeLink : normalLink)}    >  <p className=' hover:text-primarygreen mt-1 hover:cursor-pointer transition  hover:text-primaryblue duration-200 hover:text-semibold'> Sign Up </p>   </NavLink>
                            
                             
                          
                            </ul> 
                     </div>

                     <div  className=' mt-2 text-black '> 
                           <Link to='/cart' >
                              <div className="flex items-center"> 
                                  <FiShoppingCart className=" text-xl sm:text-2xl"> </FiShoppingCart> 
                               <div className="bg-red-300 rounded-full h-5 w-5 relative top-[-0.5rem] right-[0.5rem] "> 
                                   <p className="w-full mx-auto text-center text-sm "> {cart.length} </p>
                               </div>
                              </div>
                             </Link>
                            
                      </div>

                     

                
                            
                       

              
               
            
           

        
            {/* hamburger */} 
            <div   onClick={handleNav} className=' md:hidden z-10 mr-2'> 
            {nav ? <AiOutlineClose className='text-[#000000]  text-2xl sm:text-3xl items-center mt-1' /> :   <TbMenu2 className='text-[#000000] text-2xl sm:text-3xl items-center mt-1 left-0  duration-50' />}
              
            </div>


             <div   onClick={handleNav} className={nav ? ' leading-loose text-center    text-2xl  absolute text-[#000000]  left-0 top-0    w-full  mx-auto z-10  bg-[#ECF2FE]  duration-300 flex h-full   mt-16    flex-col' : 'absolute left-[-100%] '}>
              <div > 
                  <div  id='bold'> 
                      <ul  className=' text-xl  font-bold mt-[40%] flex flex-col text-center space-y-8     text-black w-fit mx-auto  '> 
                        
                                <NavLink to='/'  className={({ isActive }) => (isActive ? activeLink : normalLink)}  > <p className=' hover:text-primarygreen mt-1 hover:cursor-pointer transition   duration-200'>Home</p>      </NavLink>
                            
                              <NavLink to='/about-us'  className={({ isActive }) => (isActive ? activeLink : normalLink)}  > <p className=' hover:text-primarygreen mt-1 hover:cursor-pointer transition   duration-200'>About Us </p>      </NavLink>
                              <NavLink to='/product'  className={({ isActive }) => (isActive ? activeLink : normalLink)}  > <p className=' hover:text-primarygreen mt-1 hover:cursor-pointer transition   duration-200'>Bond Offer </p>      </NavLink>
                               <NavLink to='/safety'  className={({ isActive }) => (isActive ? activeLink : normalLink)}  > <p className=' hover:text-primarygreen mt-1 hover:cursor-pointer transition   duration-200'>Safety </p>      </NavLink>
                             <button className='bg-primaryblue px-3 rounded text-[#ffffff] text-sm py-1'> Contact Us </button>
                          
                            </ul>
                  </div>
        </div>
      </div>
            
        </div>
      </header>
       
    )
}

export default Navbar;