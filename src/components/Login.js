import React, { useState, useRef } from 'react'

import Header from './Header'
import { checkValidData } from './../utils/validate';


const Login = () => {

  const[isSignInForm, setIsSignInForm] = useState(true);
const[errorMessage,setErrorMessage] = useState(null)

const name = useRef(null);
const email = useRef(null);
const password = useRef(null);


  const handleButtonClick = () => {
    // Validate the form data
  

 const message= checkValidData(name.current.value,email.current.value, password.current.value)
setErrorMessage(message);

//Sign / Sign Up
}

const toggleSignInForm = () => {
  setIsSignInForm(!isSignInForm);


};

  return (
    <div>
      <Header/>
      <div className='absolute'>
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg"
      alt="netflix" 
      />
      </div>
      <form onSubmit={(e) => email.preventDefault()} className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>      
<h1 className='font-bold text-3xl py-4'>
  { isSignInForm ? "Sign In" : "Sign up"}
  </h1>        
{!isSignInForm && (

<input 
ref={name}
type="text" 
placeholder='Full Name' 
className='p-4 my-4 w-full bg-gray-700'/>
)}

 <input
 ref={email}
 type="text" 
  placeholder='Email Address' 
 className='p-4 my-4 w-full bg-gray-700'/>


<input
ref={password}
type="password" 
placeholder='password' 
className='p-4 my-4 w-full bg-gray-700'/>

<p className=
'text-red-500 font-bold text-lg py-2'>{errorMessage}</p>
<button
className='p-4 my-6 bg-red-700 w-full rounded-lg'
onClick={handleButtonClick}>

{ isSignInForm ? "Sign In" : "Sign Up"}

</button>


 <p className='py-4 cursor-pointer'  
 onClick={toggleSignInForm}>
{isSignInForm
 ? "New to Netflix? Sign Up Now"
  : "Already registered ? Sign In Now"}</p>
      </form>
      </div>

  )
}

export default Login
