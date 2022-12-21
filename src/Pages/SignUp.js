import React from 'react'

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

           <div className='mt-3  md:w-2/5 mx-auto'> 

                <div className=''>
                    <h1 className='text-[0.65rem]'> First Name </h1> 
                    <input className='border-2 w-full  py-1.5 px-2 mt-0.5 text-sm rounded-sm'  placeholder='Enter your First Name' /> 
                </div>

                
                
           </div>
        </div>
    </div>
  )
}

export default SignUp