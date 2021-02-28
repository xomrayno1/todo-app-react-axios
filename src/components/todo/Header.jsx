import React from 'react';
import PropTypes from 'prop-types';
import {Nav, NavItem, NavLink} from 'reactstrap'
import {
     Link
  } from "react-router-dom";
  import AuthenticationService from './AuthenticationService'
  import  { useState, useEffect } from 'react';
Header.propTypes = {
    
};

function Header(props) {
    const isUserLoggedIn =  AuthenticationService.isUserLoggedIn();
    console.log("header rendering...")
    const {isLogout} = props
    const username = sessionStorage.getItem('authenticatedUser');
    function handleLogout(){
        isLogout();
        AuthenticationService.logout();
    }
  
    return (
        <header>
            <Nav className="navbar navbar-expand-md navbar-dark bg-dark">  
                <ul className="navbar-nav">
                    {isUserLoggedIn && <li  ><Link className="nav-link" to={`/welcome/${username}`}> Home</Link></li>}
                    {isUserLoggedIn && <li  ><Link className="nav-link" to="/todos"> Todos</Link></li>}
                </ul>
                <ul className="navbar-nav navbar-collapse justify-content-end">
                    {!isUserLoggedIn && <li  ><Link className="nav-link" to="/"> Login</Link></li>}
                    {isUserLoggedIn && <li  ><Link className="nav-link" to="/logout" 
                                     onClick={handleLogout}> Logout</Link></li>}
                </ul>
            </Nav>     
        </header>
    );
}

export default Header;