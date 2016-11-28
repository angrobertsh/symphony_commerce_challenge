import React from 'react';

class FilterBar extends React.Component{

  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFilterPrice = this.updateFilterPrice.bind(this);
  }

  handleSubmit(){
    let price = parseInt(document.getElementById("pricebar").value);
    this.props.priceMax(price);
  }

  updateFilterPrice(){
    document.getElementById("pricesubmit").innerHTML = `See Items Under $${(parseInt(document.getElementById("pricebar").value)/100).toFixed(2)}`;
  }

  render(){
    return (<div className="filterbar">
      <input type="range" id="pricebar" min="0" max="5000" onInput={this.updateFilterPrice} onChange={this.updateFilterPrice}/>
      <div id="pricesubmit" onClick={this.handleSubmit}>Filter by Price</div>
    </div>);
  }
}

export default FilterBar;
