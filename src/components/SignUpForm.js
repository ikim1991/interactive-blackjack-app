import React from 'react';
import '../index.css'

function SignUpForm(props) {

  const onSignUp = () => {
    const username = document.getElementById("signup-username").value
    const password = document.getElementById("signup-password").value

    if(username.length === 0){
      alert("Input Username")
    } else if(password.length === 0){
      alert("Input Password")
    } else{
      fetch("https://ikim-interactive-blackjack-api.herokuapp.com/signup", {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ username, password})
      })
      .then(res => res.json())
      .then(data => {
        if(!data.error){
          props.history.push("/interactive-blackjack-app/")
          alert(`User ${data.username} was Successfully Created...`)
        } else{
          alert(`User ${data.username} ALREADY EXISTS...`)
          console.log("USER ALREADY EXISTS...")
        }
      })
    }
  }

  return (
    <div className="login-form">
      <div className="login-main pa5 bg-near-white ba br2">
        <div className="login-title">
          <h1>SIGN UP</h1>
        </div>
        <div className="mt3">
          <label className="db f3 mb1" htmlFor="username">Username</label>
          <input id="signup-username" className="pa2 ba mb3 bg-transparent hover-bg-black hover-white w-60" type="text" name="username" autoFocus/>
          <label className="db f3 mb1" htmlFor="username">Password</label>
          <input id="signup-password" className="pa2 ba mb3 bg-transparent hover-bg-black hover-white w-60" type="password" name="password"/>
          <div className="buttons">
            <button className="mt4 w-25 f4 pa2 center ba bg-transparent hover-bg-black hover-white pointer button" onClick={onSignUp}>Sign Up</button>
            <button className="mt4 w-25 f4 pa2 center ba bg-transparent hover-bg-black hover-white pointer button" onClick={() => props.history.push("/")}>Sign In</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUpForm;
