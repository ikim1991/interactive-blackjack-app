import React, { useEffect } from 'react';
import Message from './Message';
import '../index.js';
import { connect } from 'react-redux';
import { setChatlog, updateUsersList } from '../actions';
import { socket } from '../ClientSocket';

const mapStateToProps = (state) => {
  return {
    chatlog: state.appendChatlog.chatlog,
    user: state.userLogIn.user,
    allUsers: state.userLogIn.allUsers,
    room: state.userLogIn.room
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onMessageReceived: (userMessage) => {
      dispatch(setChatlog(userMessage))
      document.getElementsByClassName('chat-container')[0].scrollBy(0, 82)
    },
    onUpdateUsersList: (allUsers) => {
      dispatch(updateUsersList(allUsers))
    }
  }
}

function ChatBox(props){

  const { chatlog, user, onMessageReceived, allUsers, onUpdateUsersList, room } = props

  const onMessageSend = (event) => {
    if(event.keyCode === 13 && event.target.value.length > 0){
      socket.emit('sendMessage', {username: user.username, message: event.target.value})
      document.getElementsByTagName("input")[0].value = ""
    }
  }

  useEffect(() => {
    socket.on('message', (userMessage) => {
      console.log(userMessage)
      onMessageReceived(userMessage)
    })

    return () => {
      socket.emit('disconnect')
      socket.off()
    }
  })

  useEffect(() => {
    socket.on('updateUsers', (allUsers) => {
      onUpdateUsersList(allUsers)
    })

    return () => {
      socket.emit('disconnect')
      socket.off()
    }
  })

  useEffect(() => {

    window.addEventListener('beforeunload', (event) => {
      event.preventDefault()
      socket.emit('logout', user)
    })

    return () => {
      socket.emit('disconnect')
      socket.off()
    }
  }, [user])

  return(
    <div className="chatbox">
      <div className="chat-header bg-near-black ba b--near-white near-white">{`(${allUsers.length}) ${room}`}</div>
      <div className="chat-container bg-near-black ba b--near-white">
        {
          chatlog.map((message, ind) => {
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
