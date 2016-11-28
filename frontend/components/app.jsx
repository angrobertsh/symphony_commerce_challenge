import React from 'react';
import StorefrontIndexContainer from './storefront_index/storefront_index_container';
import BannerContainer from './banner/banner_container';
import FilterBarContainer from './filter_bar/filter_bar_container';
// import RouterContainer from './router/router_container';

const App = () => (
  <div className='app'>
    <BannerContainer />
    <FilterBarContainer />
    <StorefrontIndexContainer />
  </div>
);

export default App;
