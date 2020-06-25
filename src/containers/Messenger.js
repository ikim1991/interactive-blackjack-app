import React from 'react';
import ChatBox from '../components/ChatBox';

class Messenger extends React.Component{
  render(){
    return(
      <div className="messenger">
        <ChatBox/>
      </div>
    )
  }
}

export default Messenger;
