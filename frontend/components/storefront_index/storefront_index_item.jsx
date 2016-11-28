import React from 'react';

class StorefrontIndexItem extends React.Component{
  constructor(props){
    super(props);
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart(){
    return true;
  }


  render(){
    let item = this.props.item;
    return (
      <li key={item.id} className="itembox">
        <div className="itemmain">
          <div className="itemimagewrapper">
            <div className="itemimage"><img src={item.image} /></div>
          </div>
          <div className="itemnameandprice">
            <div className="itemnamewrapper">
              <div className="itemname">{item.name}</div>
            </div>
            <div className="itempricewrapper">
              <div className="itemprice">${(parseInt(item.price)/100).toFixed(2)}</div>
            </div>
          </div>
        </div>
      </li>
    );
  }

  // <div className="addtocart">
  //   <button onClick={this.addToCart}>Add To Cart</button>
  // </div>


}

export default StorefrontIndexItem;
