import React from 'react';
 
import {
    Redirect, Route 
  } from "react-router-dom";
  import AuthenticationService from './AuthenticationService'
 
function AuthenticatedRoute(props) {
    
    if(AuthenticationService.isUserLoggedIn()){
       return  <Route  {...props} />
    }else{
        return <Redirect  to='/login' />
    }
}

export default AuthenticatedRoute;