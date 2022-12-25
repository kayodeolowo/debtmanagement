 import React, { useState } from 'react'
import {BsCheckSquareFill} from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../Component/Context/AuthContext';

const Signup = () => {

  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');
    const [firstname, setFirstname] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const {signUp} = UserAuth ();

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try{
        await signUp(email,password,firstname)
        navigate('/bond-offer')
    }catch (e) {
      alert(e.message)
     
      
    }
  }



  return (
    <div>
       <div className='absolute flex justify-between  w-full'> 
            
       <img className=' h-[10rem] lg:h-[15rem] lg:mt-[14%] mt-[90%]' 
       src='./images/left.png' />
       <img className=' h-[10rem] lg:h-[15rem] flex justify-end items-end lg:mt-[4%]' src='./images/right.png' />
        </div>
        <div className='max-w-[400px] mx-auto container'>


      <div className='w-11/12 mx-auto relative'>
          <h1 className='text-xl md:text-2xl lg:text-3xl mt-6 font-bold text-center text-headingGray '> Sign Up </h1>
          {error? <p className='bg-red-300 my-2'>{setError} </p> : null }
          <p className='text-center text-textGray font-medium mt-2 text-lg'> Stop spending, Start Investing </p>
          <form onSubmit={handleSubmit}> 
           

             <div className='mt-4'> 
              <label className='font-medium text-textGray'> First Name <span className='text-primaryred'>  * </span> </label>
              <div className='my-2 w-full relative rounded border border-primarygreen'> 
                <input onChange={(e)=>setFirstname(e.target.value)} className='w-full p-2 ' type='Firstname' placeholder='Enter your First Name' required/>
                </div>
            </div>

            <div className=''> 
              <label className='font-medium text-textGray'> Last Name </label>
              <div className='my-2 w-full relative rounded border border-primarygreen'> 
                <input onChange={(e)=>setFirstname(e.target.value)} className='w-full p-2 ' type='Firstname' placeholder='Enter your Last Name' required/>
                </div>
            </div>

            <div className=''> 
              <label className='font-medium text-textGray'> Phone Number </label>
              <div className='my-2 w-full relative rounded border border-primarygreen'> 
                <input onChange={(e)=>setFirstname(e.target.value)} className='w-full p-2' type='Firstname' placeholder='Enter Your Phone Number' required />
                </div>
            </div>

             <div className=''> 
              <label className='font-medium text-textGray'> Email </label>
              <div className='my-2 w-full relative rounded border border-primarygreen'> 
                <input onChange={(e)=>setEmail(e.target.value)} className='w-full p-2   rounded' type='email' placeholder='Enter your Email'/>
                
              </div>
            </div>

            <div className=''> 
              <label className='font-medium text-textGray'> Password </label>
              <div className='my-2 w-full relative rounded border border-primarygreen'> 
                <input onChange={(e)=>setPassword(e.target.value)} className='w-full p-2  ' type='password' placeholder='Enter your Password'/>
                
              </div>

              <div className='mt-6  flex items-center'> 
                <BsCheckSquareFill className='text-primarygreen text-lg'/>
                  <h1 className='font-medium text-[0.6rem] sm:text-sm  text-textGray ml-2'> By continuing, you agree to the <span className='text-primarygreen underline'> Terms and conditions </span>  </h1>
              </div>
            </div>

            
            <button className='w-full mt-6 my-2 p-3 bg-black text-white text-medium rounded shadow '> Sign Up </button>
          </form>
          <p className='text-center '> Already have an account? <Link to='/signin' className='text-primarygreen font-medium text-lg'> Sign In </Link>  </p>
        </div> 
    </div>
    </div>
  )
}

export default Signup