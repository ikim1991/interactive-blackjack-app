import React from 'react';
import Card from '../components/Card';

class Hand extends React.Component{
  render(){
    return(
      <div className="hand">
        <Card/>
        <Card/>
      </div>
    )
  }
}

export default Hand;
