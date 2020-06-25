import React from 'react';
import '../index.css'

function LogInForm() {
  return (
    <div className="login-form">
      <div className="login-main pa5 bg-near-white ba br2">
        <div className="login-title">
          <h1>BLACKJACK</h1>
          <h2>Winner, Winner Chicken Dinner!</h2>
        </div>
        <div className="mt3">
          <label className="db f3 mb1" htmlFor="username">Username</label>
          <input className="pa2 ba bg-transparent hover-bg-black hover-white w-60" type="text" name="username"/>
          <label className="db f3 mt3 mb1" htmlFor="servers">Choose Server</label>
          <select className="pa2 ba bg-transparent hover-bg-black hover-white pointer w-60" id="servers" name="servers">
            <option value="default"></option>
            <option value="server-1">Server 1</option>
            <option value="server-2">Server 2</option>
            <option value="server-3">Server 3</option>
            <option value="server-4">Server 4</option>
          </select>
          <button className="mt4 db w-25 f4 pa2 center ba bg-transparent hover-bg-black hover-white pointer connect">Connect</button>
        </div>
      </div>
    </div>
  )
}

export default LogInForm;
