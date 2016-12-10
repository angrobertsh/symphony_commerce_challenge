import React from 'react';
import StorefrontIndexContainer from './storefront_index/storefront_index_container';
import Banner from './banner/banner';
import FilterBarContainer from './filter_bar/filter_bar_container';
// import RouterContainer from './router/router_container';

const App = () => (
  <div className='app'>
    <Banner />
    <FilterBarContainer />
    <StorefrontIndexContainer />
  </div>
);

export default App;
