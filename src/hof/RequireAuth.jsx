import React, { Children } from 'react';
import { Navigate ,useLocation} from 'react-router-dom';
import {useSelector} from 'react-redux';
const RequireAuth = ({children}) => {
    
    const {isAuth}=useSelector(state=>state.authReducer);
    const location=useLocation();


    if(!isAuth){
return <Navigate to='/login' state={{from:location.pathname}} replace/>
    }else{
        return children
    }
    
};

export default RequireAuth;