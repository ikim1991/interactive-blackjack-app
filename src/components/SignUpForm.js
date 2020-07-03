import React from 'react';
import '../index.css'

function SignUpForm(props) {
  return (
    <div className="login-form">
      <div className="login-main pa5 bg-near-white ba br2">
        <div className="login-title">
          <h1>SIGN UP</h1>
        </div>
        <div className="mt3">
          <label className="db f3 mb1" htmlFor="username">Username</label>
          <input className="pa2 ba mb3 bg-transparent hover-bg-black hover-white w-60" type="text" name="username" autoFocus/>
          <label className="db f3 mb1" htmlFor="username">Password</label>
          <input className="pa2 ba mb3 bg-transparent hover-bg-black hover-white w-60" type="text" name="password"/>
          <div className="buttons">
            <button className="mt4 w-25 f4 pa2 center ba bg-transparent hover-bg-black hover-white pointer button">Sign Up</button>
            <button className="mt4 w-25 f4 pa2 center ba bg-transparent hover-bg-black hover-white pointer button" onClick={() => props.history.push("/")}>Sign In</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUpForm;
