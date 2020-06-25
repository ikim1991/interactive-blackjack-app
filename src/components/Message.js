import React from 'react';

function Message(){
  return(
    <div className="message">
      <div className="username">
        <p>{`[TIMESTAMP] USERNAME`}</p>
      </div>
      <div className="message-text">
        <p>{`INSERT TEXT HERE`}</p>
      </div>
    </div>
  )
}

export default Message;
