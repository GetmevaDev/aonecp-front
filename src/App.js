import React from 'react';

import Home from './pages/Home';
import Pricing from './pages/Pricing';

import { Switch, Route } from 'react-router-dom';

import './globals.css';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/pricing" component={Pricing} />
      </Switch>
    </div>
  );
}

export default App;
