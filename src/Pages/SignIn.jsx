import React , {useState} from 'react'
import { Link , useNavigate } from 'react-router-dom'
import {signIn, UserAuth} from '../Component/Context/AuthContext'



const SignIn = () => {
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const {signIn} = UserAuth();
  

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    try{
        await signIn(email,password)
        navigate('/bond-offer')
        
        
    }catch (e) {
      
      setError(e.message)
      setError(e.response.data.error)
     
      
    } 
  }



  return (
    <div id='bg' className='h-screen'> 
      <div className='max-w-[400px] mx-auto container '>
       <div className=' w-11/12 mx-auto mt-6 relative'>
          <h1 className='text-2xl font-bold text-center'> Sign In </h1>
          
           {error ? (<p className='text-primaryred font-medium text-center mt-2'> Login Failed, Please Check Email or Password  </p> ) : (<p>  </p>)  }  

         
          <form onSubmit={handleSubmit}> 
            <div className='py-4'> 
              <label className='font-medium text-textGray'> Email </label>
              <div className='my-2 w-full relative rounded border border-primarygreen'> 
                <input onChange={(e)=> setEmail(e.target.value)} className='w-full p-2 ' type='email'/>
                
              </div>
            </div>
            <div className='my-4'> 
              <label className='font-medium text-textGray'> Password </label>
              <div className='my-2 w-full relative rounded border border-primarygreen'> 
                <input onChange={(e)=> setPassword(e.target.value)} className='w-full p-2 ' type='password' />
                
              </div>
            </div>
            <button className='w-full mt-6 my-2 p-3 bg-black text-white text-semibold rounded shadow hover:text-white hover:bg-primarygreen    hover:cursor-pointer transition  duration-200   '> Sign In </button>
          </form>
          <p className='text-center text-textGray'> Don't have an account? <Link to='/signup' className='text-primarygreen text-lg font-bold'> Sign Up </Link>  </p>
        </div> 
    </div>
    </div>
  )
}

export default SignIn