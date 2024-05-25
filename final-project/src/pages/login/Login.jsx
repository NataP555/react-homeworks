import React from 'react';
import LoginForm from '../../components/loginForm/LoginForm';
import { useLocation } from 'react-router-dom';
const Login = () => {
  const location = useLocation();
  console.log(location)
  return (
    <div>
      <h1>Login Page </h1>
      {location.state?.success && <h1> Congratulations successfully registered! </h1> }
      <LoginForm/>
    </div>
  )
}

export default Login
