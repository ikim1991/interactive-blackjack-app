import React from 'react';
import Dealer from '../components/Dealer';
import Hand from '../components/Hand';


class DealerBox extends React.Component{
  render(){
    return(
      <div className="dealer-box">
        <Dealer/>
        <Hand/>
      </div>
    )
  }
}

export default DealerBox;
