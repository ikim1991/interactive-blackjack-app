import React from 'react';
import moment from 'moment';

function Message(props){
  return(
    <div className="message near-white">
      <div>
        <div className="message-info">
          <p className="timestamp">{`[${moment(props.timestamp).format('L')} ${moment(props.timestamp).format('LT')}]`}</p>
          <p className="username">{`${props.username}`}</p>
        </div>
      </div>
      <div className="message-text">
        <p>{`${props.message}`}</p>
      </div>
    </div>
  )
}

export default Message;
