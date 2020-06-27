import React from 'react';
import LogIn from './containers/LogIn';
import Messenger from './containers/Messenger';
import PlayerBox from './containers/PlayerBox';
import DealerBox from './containers/DealerBox';

function App() {
  return (
    <div className="App">
      <div className="dealer">
        <DealerBox/>
      </div>
      <div className="players">
        <div className="player-one">
          <PlayerBox/>
        </div>
        <div className="player-two">
          <PlayerBox/>
        </div>
        <div className="player-three">
          <PlayerBox/>
        </div>
        <div className="player-four">
          <PlayerBox/>
        </div>
        <div className="player-five">
          <PlayerBox/>
        </div>
      </div>
    </div>
  );
}

export default App;
