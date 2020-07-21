import React from 'react';
import { connect } from 'react-redux';
import Dealer from '../components/Dealer';
import Hand from '../components/Hand';
import DealerCount from '../components/DealerCount';

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

class DealerBox extends React.Component{

  render(){
    return(
      <div className="dealer-box">
        <Dealer/>
        <Hand dealer={this.props.dealer}/>
        <DealerCount/>
        <div className="text-box ba br2 bg--near-white f2">
          <p>{`${this.props.game.dealer.text}`}</p>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DealerBox);
