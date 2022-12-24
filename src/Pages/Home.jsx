import React from 'react'
import {BsArrowRightShort} from 'react-icons/bs'
import {AiOutlinePlayCircle} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='container mx-auto xl:max-w-[1280px] px-4 mt-4 grid lg:flex  background'>
    
        <div className='flex flex-col  lg:mt-28'> 
              <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-headingGray'>   Subscribe to FGN <br/>  Saving Bond </h1>
              <h2 className='mt-4 text-xl sm:text-2xl  text-textGray '> Loan and get paid with interest </h2>

              <div className='mt-10 lg:mt-12 flex space-x-4 '> 

                <Link to='/bond-offer' >   <button className='bg-primarygreen px-4 py-2 rounded text-gray-200 flex items-center text-white'> Get Started <span> <BsArrowRightShort className='text-white pl-1 text-2xl pt-1 font-bold bg-primarygreen'/> </span> </button> 
                </Link>

                  <div className='flex items-center text-textGray space-x-3'> 
                      <AiOutlinePlayCircle className='text-2xl'/>
                      <h1 className='text-xl font-semibold'> See Video </h1>
                  </div>
                  
              </div>
        
        </div>


        <div className='lg:mt-10 mt-20'> 
              <img className=' h-full  sm:h-[30rem] lg:h-[35rem]  w-fit mx-auto' src='./images/Home.png' alt='Home' />

        </div>


    </div>
  )
}

export default Home