import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return{
    user: state.userLogIn.user,
    game: state.gameState.game
  }
}

function Chips(props){

  const drag = (event) => {
    event.dataTransfer.setData("text", event.target.getAttribute("value"))
  }

  return (
    ((props.user.seated && props.user.playerNumber === props.player) && (props.game.phase === "betting" || props.game.phase === "waiting")) ? (
      <div className="chips mb2">
        <div id="abc" className="chip br-100 ba b--near-white bg-near-white black pointer" value="1" draggable="true" onDragStart={drag}>1</div>
        <div id="abc" className="chip br-100 ba b--red bg-red black pointer" value="5" draggable="true" onDragStart={drag}>5</div>
        <div id="abc" className="chip br-100 ba b--green bg-green black pointer" value="25" draggable="true" onDragStart={drag}>25</div>
        <div id="abc" className="chip br-100 ba b--yellow bg-yellow black pointer" value="50" draggable="true" onDragStart={drag}>50</div>
        <div id="abc" className="chip br-100 ba b--near-black bg-near-black white pointer" value="100" draggable="true" onDragStart={drag}>100</div>
      </div>
    ) : (
      <div className="chips mb2">
        <div id="abc" className="chip br-100 ba b--near-white bg-near-white black">1</div>
        <div id="abc" className="chip br-100 ba b--red bg-red black">5</div>
        <div id="abc" className="chip br-100 ba b--green bg-green black">25</div>
        <div id="abc" className="chip br-100 ba b--yellow bg-yellow black">50</div>
        <div id="abc" className="chip br-100 ba b--near-black bg-near-black white">100</div>
      </div>
    )
  )
}

export default connect(mapStateToProps)(Chips);
