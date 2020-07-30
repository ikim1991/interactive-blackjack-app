import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LogIn from './containers/LogIn';
import SignUpForm from './components/SignUpForm';
import BlackJack from './containers/BlackJack';

function App() {

  if(window.innerWidth < 1024){
    return (
      <div className="unsupported-frame f4 tc near-white">
        <div>Currently, this app is not supported on mobile and tablet devices...</div>
        <div>It is only supported on devices with a screen resolution of 1024x768 and greater...</div>
        <div>We apologize for this inconvinence...</div>
      </div>
    )
  } else{
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

}

export default App;
