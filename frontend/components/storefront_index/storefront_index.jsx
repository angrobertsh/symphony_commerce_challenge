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
    itemKeys.forEach((item, idx) => {
      itemsJSX.push(<StorefrontIndexItem item={items[item]} />);
    });
    return itemsJSX;
  }

  render(){
    return(
      <div className="itemIndex">
        <ul>
          { this.itemArray() }
        </ul>
      </div>
    );
  }
}

export default StorefrontIndex;
