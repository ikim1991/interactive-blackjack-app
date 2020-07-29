import React from 'react';
import Table from './Table';
import Messenger from './Messenger';
import Info from '../components/Info';
import Modal from '../components/Modal';
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
          <Modal/>
          <Info/>
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
