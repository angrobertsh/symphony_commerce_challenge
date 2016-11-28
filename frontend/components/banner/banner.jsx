import React from 'react';

class Banner extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="banner">
        <img src="./assets/images/fijibanner.png" />
      </div>);
  }
}

export default Banner;
