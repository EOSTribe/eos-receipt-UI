import React from 'react';
import Home from './src/components/home';
import Receipt from './src/components/receipt';
render((
  <Router history={hashHistory}>
    <Route path="/" component={Home}/>
    {/* add the routes here */}
    <Route path="/receipt" component={Receipt}/>
  </Router>
), document.getElementById('app'))