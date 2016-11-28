import React from 'react';
import $ from 'jquery';
import StorefrontIndexItem from './storefront_index_item';

class StorefrontIndex extends React.Component{

  constructor(props){
    super(props);
    this.itemArray = this.itemArray.bind(this);
  }

  itemArray(){
    let itemKeys = Object.keys(this.props.items);
    let items = this.props.items;
    let itemsJSX = [];
    let priceMax = this.props.filters["price"];
    itemKeys.forEach((itemKey, idx) => {
      if(priceMax !== 0){
        if(parseInt(items[itemKey].price) < priceMax){
          itemsJSX.push(<StorefrontIndexItem key={itemKey} item={items[itemKey]} />);
        }

      } else {
        itemsJSX.push(<StorefrontIndexItem key={itemKey} item={items[itemKey]} />);
      }
    });
    return itemsJSX;
  }



  render(){
    return(
      <div id="itemindex">
        <ul className="itemindexul">
          { this.itemArray() }
        </ul>
      </div>
    );
  }
}

export default StorefrontIndex;
