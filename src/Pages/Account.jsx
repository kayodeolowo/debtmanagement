import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { UserAuth } from '../Component/Context/AuthContext'

const Account = () => {
  const {user, logout} = UserAuth()
  const navigate = useNavigate()

  const handleSignOut = async () => {
    try{
      await logout()
      navigate('/')
      window.location.reload(false);
      
      
    } catch (e) {
      console.log(e.message)
    }
  }

  if (user) {
       return (
    <div className='max-w-[1140px] mx-auto'>
      <div className='flex w-fit mx-auto justify-between items-center my-12 py-8 rounded-div'> 
        <div className='flex  flex-col justify-center'> 
          <h1 className='text-2xl font-bold text-center'> Account </h1>
            <div className='w-fit mx-auto '> 
              <p className='mt-4'>Hello {user?.email}   </p>
            </div>
             <button onClick={handleSignOut} className='mx-10  mt-6 bg-primaryred text-white  py-1 rounded-2xl shadow-lg hover:shadow-2xl'> Sign Out </button>
      </div>

    
     </div>

    </div>
  ) 
  }else {
    return <Navigate to='/signin'/>
  }



 
}

export default Account