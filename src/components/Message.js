import React from 'react';

function Message(){
  return(
    <div className="message near-white">
      <div>
        <div className="message-info">
          <p className="timestamp">{`[TIMESTAMP]`}</p>
          <p className="username">{`USERNAME`}</p>
        </div>

      </div>
      <div className="message-text">
        <p>{`INSERT TEXT HERE`}</p>
      </div>
    </div>
  )
}

export default Message;
