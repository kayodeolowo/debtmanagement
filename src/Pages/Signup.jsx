 import React, { useState } from 'react'
import {BsCheckSquareFill} from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../Component/Context/AuthContext';

const Signup = () => {

  const [email, setEmail] = useState(''); 
  const [displayName, setDisplayName] = useState(''); 
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const {signUp} = UserAuth ();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try{
        await signUp(email,password)
         navigate('/bond-offer')
    }catch (e) {
     setError(e.message)
     setError(e.response.data.error)
     
     
      
    }
  }



  return (
    <div id='bg' className='h-screen'>
     <div className='max-w-[400px] mx-auto container  '>
      <div className='w-11/12 mx-auto relative '>
          <h1 className='text-xl md:text-2xl lg:text-3xl mt-6 font-bold text-center text-headingGray '> Sign Up </h1>
         
          <p className='text-center text-textGray font-medium mt-2 text-lg'> Stop spending, Start Investing </p>

           {error ? (<p className='text-primaryred lg:text-xl font-medium text-center mt-2'>  Email Already Exist, Please Sign In  </p> ) : (<p>  </p>)  }  
          <form onSubmit={handleSubmit}> 
           

             <div className='mt-4'> 
              <label className='font-medium text-textGray'> First Name <span className='text-primaryred'>  * </span> </label>
              <div className='my-2 w-full relative rounded border border-primarygreen'> 
                <input onChange={(e)=>setDisplayName(e.target.value)} className='w-full p-2 ' type='displayName' placeholder='Enter your First Name' required/>
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
                <input onChange={(e)=>setFirstname(e.target.value)} className='w-full p-2' type='number' minLength={10} placeholder='Enter Your Phone Number' required />
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
                <input onChange={(e)=>setPassword(e.target.value)} className='w-full p-2  ' type='password' minLength={6} placeholder='Enter your Password'/>
                
              </div>

              <div className='mt-6  flex items-center'> 
                <BsCheckSquareFill className='text-primarygreen text-lg'/>
                  <h1 className='font-medium text-[0.6rem] sm:text-sm  text-textGray ml-2'> By continuing, you agree to the <span className='text-primarygreen underline'> Terms and conditions </span>  </h1>
              </div>
            </div>

            
            <button className='w-full mt-6 my-2 p-3 bg-black text-white text-medium rounded shadow  hover:text-white hover:bg-primarygreen    hover:cursor-pointer transition  duration-200  '> Sign Up </button>
          </form>
          <p className='text-center '> Already have an account? <Link to='/signin' className='text-primarygreen font-medium text-lg'> Sign In </Link>  </p>
        </div> 
    </div>
    </div>
  )
}

export default Signup