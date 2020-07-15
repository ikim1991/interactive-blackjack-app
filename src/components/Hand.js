import React from 'react';
import Card from './Card';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return{
    user: state.userLogIn.user,
    game: state.gameState.game
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    
  }
}

function Hand(){
  return(
    <div className="hand ba br3">

    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Hand);
