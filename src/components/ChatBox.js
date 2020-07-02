import React from 'react';
import Message from './Message';
import '../index.js';
import { connect } from 'react-redux';
import { setMessageSend } from '../actions';

const mapStateToProps = (state) => {
  return {
    message: state.message
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onMessageSend: (event) => {
      if(event.keyCode === 13){
        dispatch(setMessageSend(event.target.value))
        document.getElementsByTagName("input")[0].value = ""
      }
    }
  }
}

function ChatBox(props){

  console.log(props)

  return(
    <div className="chatbox">
      <div className="chat-container bg-near-black ba b--near-white">
        <Message/>
      </div>
      <div className="chat-input bg-near-black pa1 ba b--near-white">
        <input className="w-100" type="text" placeholder="Insert Text Here..." onKeyDown={props.onMessageSend} autoFocus/>
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatBox);
