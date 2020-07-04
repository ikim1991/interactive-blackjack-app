import React, { useEffect } from 'react';
import Message from './Message';
import '../index.js';
import { connect } from 'react-redux';
import io from 'socket.io-client';
import { setChatlog } from '../actions';

let socket = io("localhost:3001")

const mapStateToProps = (state) => {
  return {
    chatlog: state.appendChatlog.chatlog,
    user: state.userLogIn.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onMessageReceived: (userMessage) => {
      dispatch(setChatlog(userMessage))
      document.getElementsByClassName('chat-container')[0].scrollBy(0, 82)
    }
  }
}

function ChatBox(props){

  const onMessageSend = (event) => {
    if(event.keyCode === 13 && event.target.value.length > 0){
      socket.emit("sendMessage", {username: props.user.username, message: event.target.value})
      document.getElementsByTagName("input")[0].value = ""
    }
  }

  useEffect(() => {
    socket.on("message", (userMessage) => {
      props.onMessageReceived(userMessage)
    })

    return () => {
      socket.emit('disconnect')
      socket.off()
    }
  })

  return(
    <div className="chatbox">
      <div className="chat-container bg-near-black ba b--near-white">
        {
          props.chatlog.map((message, ind) => {
          return <Message username={message.username} message={message.message} timestamp={message.createdAt} key={ind}/>
        })}
      </div>
      <div className="chat-input bg-near-black pa1 ba b--near-white">
        <input className="chat-bar w-100" type="text" placeholder="Insert Text Here..." onKeyDown={onMessageSend} autoFocus/>
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatBox);
