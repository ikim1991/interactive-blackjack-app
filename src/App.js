import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LogIn from './containers/LogIn';
import SignUpForm from './components/SignUpForm';
import BlackJack from './containers/BlackJack';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" render={(props) => <LogIn {...props}/>}/>
        <Route exact path="/signup" render={(props) => <SignUpForm {...props}/>}/>
        <Route exact path="/server-1" render={(props) => <BlackJack {...props}/>}/>
        <Route exact path="/server-2" render={(props) => <BlackJack {...props}/>}/>
        <Route exact path="/server-3" render={(props) => <BlackJack {...props}/>}/>
        <Route exact path="/server-4" render={(props) => <BlackJack {...props}/>}/>
      </Switch>
    </div>
  );
}

export default App;
