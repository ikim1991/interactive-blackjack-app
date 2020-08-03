import React from 'react';
import '../index.css'
import { connect } from 'react-redux';
import { loggingIn } from '../actions';

const mapStateToProps = (state) => {
  return {
    user: state.userLogIn.user,
    game: state.gameState.game
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    onUserLogIn: (username, password, server, history) => {
      dispatch(loggingIn(username, password, server, history))
    }
  }
}

function LogInForm(props) {

  const onConnect = (event) => {
    const username = document.getElementById("login-username").value
    const password = document.getElementById("login-password").value
    const server = document.getElementById("servers").value
    if(username.length === 0){
      alert("Input Username")
    } else if(password.length === 0){
      alert("Input Password")
    } else if(server === "default"){
      alert("Choose Server")
    } else{
      props.onUserLogIn(username, password, server, props.history)
    }
  }

  return (
    <div className="login-form">
      <div className="login-main bg-near-white ba br2">
        <div className="login-title">
          <h1>PLAY BLACKJACK</h1>
          <h2>Winner, Winner Chicken Dinner!</h2>
        </div>
        <div className="mt3">
          <label className="db mb1" htmlFor="username">Username</label>
          <input id="login-username" className="pa2 ba mb3 bg-transparent hover-bg-black hover-white w-60" type="text" name="username" defaultValue="admin" autoFocus/>
          <label className="db mb1" htmlFor="username">Password</label>
          <input id="login-password" className="pa2 ba mb3 bg-transparent hover-bg-black hover-white w-60" type="password" name="password" defaultValue="admin"/>
          <label className="db mb1" htmlFor="servers">Choose Server</label>
          <select id="servers" className="pa2 ba bg-transparent hover-bg-black hover-white pointer w-60" name="servers" defaultValue="server-1">
            <option value="default"></option>
            <option value="server-1">Server 1</option>
            <option value="server-2">Server 2</option>
            <option value="server-3">Server 3</option>
            <option value="server-4">Server 4</option>
          </select>
          <div className="buttons">
            <button className="mt3 mb3 w-20 pa2 center ba bg-transparent hover-bg-black hover-white pointer button" onClick={onConnect}>Connect</button>
            <button className="mt3 mb3 w-20 pa2 center ba bg-transparent hover-bg-black hover-white pointer button" onClick={() => props.history.push("/interactive-blackjack-app/signup")}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(LogInForm);
