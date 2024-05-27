import React, { useState } from 'react';
import { authHandler } from '../../api';
import { useNavigate } from "react-router-dom";
import appRoutes from '../../constants/routes';


const RegisterForm = () => {
    const navigate = useNavigate();
    const [user , setUser] = useState({
        userName:"",
        password:"",
        email:"",
    })

    const submitHandler = (e) =>{
        e.preventDefault();
        authHandler("register",user)
          .then(data=>{
            navigate(appRoutes.login, {state : { success: true } });
          })
          .catch((err) =>{
            console.log(err);
          });
    };

    console.log(user)
  return (
 <form onSubmit={submitHandler}>
    <label htmlFor='userName'> userName </label>
    <input onChange={(e)=>{setUser(prev=>({...prev,[e.target.name]:e.target.value}))}} name ='userName' placeholder ='userName'></input>

    <label htmlFor='email'> email</label>
    <input onChange={(e)=>{setUser(prev=>({...prev,[e.target.name]:e.target.value}))}} name ='email' placeholder ='email'></input>

    <label htmlFor='password'> password </label>
    <input onChange={(e)=>{setUser(prev=>({...prev,[e.target.name]:e.target.value}))}} name ='password' placeholder ='password'></input>

    <button type ="submit" >Sign up </button>
 </form>
  )
}

export default RegisterForm
