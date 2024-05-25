import React, { createContext, useContext, useEffect, useReducer } from 'react'; 
import { appReducer, initialState } from './appReducer';
import { signInUser } from './appActionCreators';
import { isTokenValid } from '../utils';

const appContext = createContext();
    const AppContextProvider = ({ children }) => {
        const [state, dispatch] = useReducer(appReducer, initialState);
        
    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        if(token && isTokenValid(token)){
            dispatch(signInUser(token));
        }

    }, [] );

  return <appContext.Provider value ={{state, dispatch}}>  {children} </appContext.Provider>;
};

export const useAppContext = ()=>{
    const context = useContext (appContext);
    if (context){
        return context;

    }
    throw new Error ('app Context error');
}
export default AppContextProvider;
