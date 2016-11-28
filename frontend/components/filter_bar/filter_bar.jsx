import React from 'react';

class FilterBar extends React.Component{

  constructor(props){
    super(props);
    this.updateFilterPrice = this.updateFilterPrice.bind(this);
    this.submitSort = this.submitSort.bind(this);
  }

  updateFilterPrice(){
    document.getElementById("pricesubmit").innerHTML = `Items Under $${(parseInt(document.getElementById("pricebar").value)/100).toFixed(2)}`;
    let price = parseInt(document.getElementById("pricebar").value);
    this.props.priceMax(price);
  }

  updateSort(){
    let sortValue = "none";
    let radioArray = document.getElementsByName("sort");
    for(let i = 0; i < radioArray.length; i++){
      if(radioArray[i].checked){
        sortValue = radioArray[i].value;
      }
    }
    this.props.newSort(sortValue);
  }

  render(){
    return (<div className="filterbar">
      <div id="pricesubmit">Filter by Price:</div>
      <div>$0<input type="range" id="pricebar" min="0" step="500" max="5000" onInput={this.updateFilterPrice} onChange={this.updateFilterPrice}/>$50</div>
      <div>
        <div id="sortby">Sort by</div>
        <input type="radio" name="sort" value="name" onChange={this.updateSort}/>Name
        <input type="radio" name="sort" value="price" onChange={this.updateSort}/>Price
      </div>
    </div>);
  }
}



export default FilterBar;
