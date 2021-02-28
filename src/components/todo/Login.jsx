import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap'
import { useState } from 'react';
import AuthenticationService from './AuthenticationService'
import { useLocation,useHistory } from 'react-router-dom';

Login.propTypes = {
    
};

function Login(props) {
    const [login, setLogin] = useState(() => {
        return {
            username : '',
            password: '',
            hasLoginFailed : false,
            isLogin : false       
        }
    })
    const {isLogin} = props;
    const history = useHistory();
    function handleUsernameOnChange(e){
        setLogin({...login,username: e.target.value});
    }
    function handlePasswordOnChange(e){
        setLogin({...login,password: e.target.value});
    }
     
    function handleLoginOnclick(){
        const {username, password } = login;
        
        if(username === 'xomrayno5' && password === '12345'){
            AuthenticationService.registerSuccessfulLogin(username,password);
            //props.history.push(`/welcome/${username}`)
            isLogin(login);
            //   setLogin({...login, 
            //              showSuccessMessage: true,
            //              hasLoginFailed:false}) 
            history.replace(`/welcome/${username}`)
        }else{
            setLogin({...login,
                        hasLoginFailed:true})
        }
    }
    return (
        <div>
            <h1>Login</h1>
            <div className="container">
                {login.hasLoginFailed &&  <div className="alert alert-warning">Invalid Credentitals</div>}
                {login.showSuccessMessage &&  <div className="alert alert-success">Login Successful</div>}
                Username : <input type="text" name="username" 
                                            value={login.username} 
                                            onChange={handleUsernameOnChange}/>
                Password : <input type="password" name="password"
                                                value={login.password} 
                                                onChange={handlePasswordOnChange}/>
                <Button   color="primary" onClick={handleLoginOnclick}>Login</Button>
            </div>
        </div>
    )
}

export default Login;