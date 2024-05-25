import React, { useState } from 'react';
import authActions from '../../constants/auth';
import { authHandler } from '../../api';
import { useAppContext } from '../../context/AppContextProvider';
import { signInUser } from '../../context/appActionCreators';
import { useNavigate } from 'react-router-dom';
import routes from '../../constants/routes';




const LoginForm = () => {
    
    const [user , setUser] = useState({
        userName:"",
        password:"",
    })

    const{dispatch} = useAppContext();

    const navigate =useNavigate();

    const submitHandler = (e) =>{
        e.preventDefault();
        authHandler(authActions.signIn, user)
          .then(data=>{
            dispatch(signInUser(data.token));
            navigate(routes.movies);
          })
          .catch((err) =>{
            console.log(err.message);
          });
    };


  
  return (
 <form onSubmit={submitHandler}>
    <label htmlFor='userName'> userName </label>
    <input onChange={(e)=>{setUser(prev=>({...prev,[e.target.name]:e.target.value}))}} name ='userName' placeholder ='userName'></input>

    <label htmlFor='password'> password </label>
    <input onChange={(e)=>{setUser(prev=>({...prev,[e.target.name]:e.target.value}))}} name ='password' placeholder ='password'></input>

    <button type ="submit" >Sign in </button>
 </form>
  )
}

export default LoginForm