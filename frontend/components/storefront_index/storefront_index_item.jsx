import React from 'react';

class StorefrontIndexItem extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    let item = this.props.item;
    return (
      <li key={item.id} className="itembox">
        <div className="itemnamewrapper">
          <div className="itemname">{item.name}</div>
        </div>
        <div className="itemimagewrapper">
          <div className="itemimage"><img src={item.image} /></div>
        </div>
        <div className="itempricewrapper">
          <div className="itemprice">${parseInt(item.price)/100}</div>
        </div>
      </li>
    );
  }

}

export default StorefrontIndexItem;
