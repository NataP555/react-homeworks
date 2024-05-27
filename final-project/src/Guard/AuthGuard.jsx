import React from 'react';
import { useAppContext } from '../context/AppContextProvider';
import { useNavigate } from 'react-router-dom';
import routes from '../constants/routes';


const AuthGuard = ({children}) => {
    const { state } = useAppContext();
    const navigate = useNavigate();
    if(!state.isUserLoggedIn){
       return(
          <div>
             <h1> Please register or Sign in </h1>
             <button onClick={()=>{
                navigate(routes.login)
             }}>
                Sign in
             </button>
             <button onClick={()=>{
                navigate(routes.register)
             }}>
                Sign up
            </button>
          </div>
       );
    }

  return <> {children} </>;
};

export default AuthGuard;
