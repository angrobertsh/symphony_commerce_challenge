# A Symphony Store

  See the store live [here!](https://angrobertsh.github.io/symphony_commerce_challenge/)

## Background

  Using an API from Symphony Commerce, details of products are shown as an online store.

## Features

#### Item display

  Item information is retrieved from the Symphony API and individual item price, name, and images are displayed on the page. These are created by a React component, `StorefrontIndex`, that takes this information and sets up the list of `StorefrontIndexItem`s as a JSX ul.

```javascript
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
```

#### Filtering and sorting

  Using form information from a `FilterBar` component, the `StorefrontIndex` updates its state based on what filters it receives as props.

```javascript
const mapStateToProps = (state) => ({
  items: state.storefront.items,
  filters: state.storefront.filters
});
```

  These price filter is applied as the slider is updated, the `StorefrontIndex` changing its render based on what prices are lower than the slider's value. The sorting (by name or price) is applied on submit using an onSubmit handler, with similar work being done by the `StorefrontIndex` rendering.

```javascript
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
```  

#### Responsive display

  Relying mostly on % screen width allows for scaling banner images.

```CSS

```

  Additionally, media queries allow product images to not become overcrowded when screen size becomes small, instead having images take up greater screen width, allowing for flexbox to have fewer columns.

```CSS
@media only screen and (max-width: 800px) {
  .itembox{
    width: 50%;
  }
}

@media only screen and (max-width: 650px) {
  .itembox{
    width: 60%;
  }
}
```
