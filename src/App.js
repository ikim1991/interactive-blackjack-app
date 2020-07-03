import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LogIn from './containers/LogIn';
import SignUpForm from './components/SignUpForm';
import Table from './containers/Table';
import Messenger from './containers/Messenger';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" render={(props) => {
          return(
            <LogIn {...props}/>
          )
        }}/>
        <Route exact path="/signup" render={(props) => {
          return(
            <SignUpForm {...props}/>
          )
        }}/>
        <Route exact path="/server" render={() => {
          return(
            <div className="App">
              <Table/>
              <Messenger/>
            </div>
          )
        }}/>
      </Switch>
    </div>
  );
}

export default App;
