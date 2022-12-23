import React from 'react'
import {FaCheckSquare} from 'react-icons/fa'

const SignUp = () => {
  return (
    <div>
        <div className='border-2  mx-auto container'> 
           <div className='text-center'> 
                     <h1 className='text-3xl font-semibold'> SignUp </h1>
                     <p> 
                         Stop spending, Start Investing
                     </p>
           </div>

           <div className='mt-3  md:w-2/6 mx-auto'> 

                <div className=''>
                    <h1 className='text-[0.65rem]'> First Name </h1> 
                    <input className='border-2 w-full  py-1.5 px-2 mt-0.5 text-sm rounded-sm'  placeholder='Enter your First Name' /> 
                </div>


                <div className='flex items-center'> 
                    <FaCheckSquare> </FaCheckSquare>
                    <h1> By Continuing, you agree to the Terms and Conditions</h1>
                </div>


                <div> 
                    <button className='bg-black w-full text-white'> Sign Up   </button>
                </div>
           </div>
        </div>
    </div>
  )
}

export default SignUp