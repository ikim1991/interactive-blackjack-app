import React from 'react';
import Message from './Message';
import '../index.js';

function ChatBox(){
  return(
    <div className="chatbox">
      <div className="chat-container bg-near-black ba b--near-white">
        <Message/>
      </div>
      <div className="chat-input bg-near-black pa1 ba b--near-white">
        <input className="w-100" type="text"/>
      </div>
    </div>
  )
}

export default ChatBox;
