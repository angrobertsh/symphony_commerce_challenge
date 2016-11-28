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
    let sort = this.props.filters["sort"];
    itemKeys.forEach((itemKey, idx) => {
      if(priceMax !== undefined){
        if(parseInt(items[itemKey].price) < priceMax){
          itemsJSX.push(<StorefrontIndexItem key={itemKey} item={items[itemKey]} />);
        }
      } else {
        itemsJSX.push(<StorefrontIndexItem key={itemKey} item={items[itemKey]} />);
      }
    });
    switch(sort){
      case "name":
        return itemsJSX.sort((el1, el2) => {
          if(el1.props.item.name < el2.props.item.name){
            return -1;
          }
          return 1;});
      case "price":
        return itemsJSX.sort((el1, el2) => {
          if(el1.props.item.price < el2.props.item.price){
            return -1;
          }
          return 1;});
      default:
        return itemsJSX;
    }
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
