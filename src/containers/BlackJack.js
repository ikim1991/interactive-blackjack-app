import React from 'react';
import Table from './Table';
import Messenger from './Messenger';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    user: state.userLogIn.user
  }
}

class BlackJack extends React.Component{
  render(){
    return(
      (this.props.user.authenticated) ? (
        <div className="App">
          <Table/>
          <Messenger/>
        </div>
      ) : (
        <Redirect to="/"/>
      )
    )
  }
}

export default connect(mapStateToProps)(BlackJack);
