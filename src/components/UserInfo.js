import React from 'react';

function UserInfo(){

  const userInfo = {
    username: "Username",
    chips: 1000,
    isEmpty: false
  }

  return(
    (userInfo.isEmpty) ? (
      <div className="user-info empty ba br4 pointer f-headline-l">
        +
      </div>
    ) : (
      <div className="user-info ba br4">
        <div className="user-chips w-100 mt3">{`CHIPS - $${userInfo.chips}`}</div>
        <div className="user w-100 mt3">{`${userInfo.username}`}</div>
        <img className="user-dp" src={`https://robohash.org/${userInfo.username}`} alt="user"/>
      </div>
    )
  )
}

export default UserInfo;
