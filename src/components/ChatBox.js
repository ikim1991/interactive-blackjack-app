import React from 'react';
import Message from './Message';
import '../index.js';

function ChatBox(){
  return(
    <div className="chatbox">
      <div className="chat-container bg-near-white ba">
        <Message/>
      </div>
      <div className="chat-input bg-near-white pa1 ba">
        <input className="w-80" type="text"/>
        <button className="w-20">ENTER</button>
      </div>
    </div>
  )
}

export default ChatBox;
