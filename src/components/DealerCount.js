import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return{
    user: state.userLogIn.user,
    game: state.gameState.game
  }
}

function DealerCount(props){

  return(
    <div className="dealer-count center">
      <div className="ba br3">
        <p>{`Dealer Has: ${props.game.dealer.count}`}</p>
      </div>
    </div>
  )
}

export default connect(mapStateToProps)(DealerCount);
