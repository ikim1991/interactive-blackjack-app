import React from 'react';

function Info(){

  const openModal = (e) => {
    document.getElementById("modal").style.visibility = "visible"
  }

  return(
      <div className="info f2 ba br2 white pointer" onClick={openModal}>
        i
      </div>
    )
}

export default Info;
