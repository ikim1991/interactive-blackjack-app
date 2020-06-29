import React from 'react';
import DealerBox from './DealerBox';
import TableRules from '../components/TableRules';
import PlayerBox from './PlayerBox';

class Table extends React.Component{
  render(){
    return (
      <div className="table bg-dark-green">
        <DealerBox/>
        <TableRules/>
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
    )
  }
}

export default Table;
