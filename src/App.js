import React from 'react';

import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Faq from './pages/Faq';
import CreditMonitory from './pages/CreditMonitory';

import { Switch, Route } from 'react-router-dom';

import './globals.css';
import useScrollToTop from './components/scrollToTop';
import MobileNav from './components/MobileNav';

function App() {
  useScrollToTop();
  return (
    <div>
      {/* <MobileNav /> */}
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/pricing" component={Pricing} />
        <Route path="/faq" component={Faq} />
        <Route path="/creditmonitory" component={CreditMonitory} />
      </Switch>
    </div>
  );
}

export default App;
