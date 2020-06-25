import React from 'react';
import LogInForm from '../components/LogInForm';
import '../index.css';

class LogIn extends React.Component{
  render(){
    return (
      <div className="login">
        <LogInForm/>
      </div>
    )
  }
}

export default LogIn;
