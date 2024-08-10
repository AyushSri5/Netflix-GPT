import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [loggedIn, setLoggedIn] = useState(true);


    const toggleForm = () => {
        console.log("toggle");
        
        setLoggedIn(!loggedIn);
    }
  return (
    <div>
        <Header />
        <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/19fc1a4c-82db-4481-ad08-3a1dffbb8c39/IN-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_24a485f6-1820-42be-9b60-1b066f1eb869_large.jpg'
        alt='logo' />
        </div>
   
    <form className=' w-3/12 text-white absolute p-12 my-36 mx-auto right-0 left-0 bg-black rounded-lg bg-opacity-80'>
    <h1 className='font-bold text-3xl py-4'>{loggedIn ? "Sign In":"Sign Up"}</h1>
    {!loggedIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input typeof='text' placeholder='Email Address' className='p-4 my-2 w-full bg-gray-700 rounded-lg' />
        <input typeof='password' placeholder='Password' className='p-4 my-2 w-full bg-gray-700 rounded-lg' />
        <button className='p-4 my-4 bg-red-700 w-full rounded-lg'>{loggedIn ? "Sign In":"Sign Up"}</button>
        <p className='py-4 cursor-pointer' onClick={toggleForm}>{loggedIn  ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now."}</p>
    </form>
    </div>
  )
}

export default Login