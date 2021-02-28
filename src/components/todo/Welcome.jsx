import React from 'react';
import PropTypes from 'prop-types';
import {
    BrowserRouter as Router,Switch,Route,Link
  } from "react-router-dom";
import Header from './Header'
import {Button} from 'reactstrap'
 
 
Welcome.propTypes = {
    
};

function Welcome(props) {
    function handleOnClickGetMessage(){
       
    }
    return (
       <>
        
         <h1>Welcome !</h1>
        <div className="container">
            <div>Welcome {props.match.params.name} . 
                    You can manage your todos <Link to="/todos" > Here</Link>. </div>
        </div>
        <div className="container">
            Click here to get a customized welcome messsage. 
            <Button onClick={handleOnClickGetMessage} color="success">Get Welcome Message</Button>
        </div>
       </>
    );
}

export default Welcome;