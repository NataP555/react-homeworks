import React, { useState } from 'react'

const Login = () => {
  const[user, setUser] = useState({
  userName:"",
  password:"",
  });

  const signInHandler =()=>{

  }


  return (
    <div>
      <h1> Sign In page </h1>
      <label htmlFor = "userName"> userName </label>
      <input onChange={(e)=>{
        setUser((prev) => ({...prev,[e.target.name]: e.target.value}));
        }} 
      name = "userName" placeholder="userName" />

      <label htmlFor = "password"> password </label>
      <input onChange={(e) => {
        setUser((prev) => ({...prev,[e.target.name]:e.target.value}));
        }}
       name = "password" placeholder="password" />
      <button onClick={signInHandler} > Sign in </button>
      
    </div>
  )
}

export default Login
