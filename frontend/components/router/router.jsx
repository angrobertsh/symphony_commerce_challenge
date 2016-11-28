import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import StorefrontIndexContainer from '../storefront_index/storefront_index_container';

import App from '../app';

class AppRouter extends React.Component{
  constructor(props){
    super(props);
    this.routerconst = (
    <Router history={ hashHistory } onUpdate={() => window.scrollTo(0, 0)}>
      <Route path="/" component={ App }>
        <IndexRoute component={ StorefrontIndexContainer } />
      </Route>
    </Router>
    );
  }

  render(){
    return this.routerconst;
  }
}

export default AppRouter;
