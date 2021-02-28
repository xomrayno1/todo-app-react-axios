import React from 'react';
import PropTypes from 'prop-types';
 
import Welcome from './Welcome'
import {
    BrowserRouter as Router,Switch,Route,Link
  } from "react-router-dom";
import ListTodo from './ListTodo';
import Header from './Header';
import Footer from './Footer';
import { useState } from 'react';
import AuthenticatedRoute  from './AuthenticatedRoute'
import Logout from './Logout';
import Login from './Login';
TodoApp.propTypes = {
    
};

function TodoApp(props) {
    const [login, setLogin] = useState(() => {
        return {
            username : '',
            password: '',
            hasLoginFailed : false,
            isLogin : false
        }
    })
    function isLogin(forms){ 
        setLogin({...forms, isLogin: true});
    }
    function isLogout(){
        setLogin({...login,isLogin: false});
    }
    return (
        <div className="TodoApp"> 
                <Router >
                        <>
                            <Header isLogout={isLogout} />
                                <Switch>
                                        <Route exact path='/' render={()=> <Login isLogin={isLogin}   />} />
                                        <Route path='/login' render={()=> <Login isLogin={isLogin}    />} />
                                        <AuthenticatedRoute path='/logout' component={Logout}/>
                                        <AuthenticatedRoute path='/welcome/:name' component={Welcome} />
                                        <AuthenticatedRoute path='/todos'  component={ListTodo}/>
                                        <Route path="*" component={ErrorComponent} />
                                </Switch> 
                            <Footer/>
                        </>
                </Router>
        </div>
    );
}

export default TodoApp;

 
function ErrorComponent(){
    return <div>An Error Occurred. I don't know what to do! Contact support at 32-2-sda</div>
}
 