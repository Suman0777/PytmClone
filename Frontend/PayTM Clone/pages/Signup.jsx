import React from 'react'
import Inputfrield from '../Component/Inputfrield'
import { useNavigate } from 'react-router'
import ButtonCost from '../Component/ButtonCost';

const Signup = () => {
  const navigate = useNavigate();

  return (
    // Full screen parent
    
    <div className='bg-gray-100 w-screen h-screen flex items-center justify-center'>
    
    <form action="" className='bg-white p-8 rounded-xl shadow-lg w-[350px] '>                
                {/* Heading */}
                <div className='mb-4'>
                <h1 className='text-xl font-semibold'>Sign up</h1>
                <p className='text-sm text-gray-700'>
                    Enter your information to create an account
                </p>
                </div>

                {/* Input */}
                <div className='mb-4'>
                <Inputfrield parameter={"text"} uppetext={"First Name"} lowertext={"John"} />
                <Inputfrield parameter={"text"} uppetext={"Last Name"} lowertext={"Don"} />
                <Inputfrield parameter={"text"} uppetext={"Email"} lowertext={"joh@gamil.com"} />
                <Inputfrield parameter={"password"} uppetext={"Password"} lowertext={"*******"} />        
                </div>

                <div className='mb-4'>
                <ButtonCost typer={"submit"} textname={"Sign Up"}/>
                </div>
                {/* Sign in link */}
                <div className='flex gap-2 text-sm'>
                <span>Already have an account?</span>
                <span 
                    className='underline cursor-pointer font-medium'
                    onClick={() => navigate("/signin")}
                >
                    Sign in
                </span>
                </div>

        </form>
    </div>
  )
}

export default Signup