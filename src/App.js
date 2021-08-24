import React from 'react';

import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Faq from './pages/Faq';
import CreditMonitory from './pages/CreditMonitory';
import OurProcess from './pages/OurProcess';

import { Switch, Route } from 'react-router-dom';

import './globals.css';
import useScrollToTop from './components/scrollToTop';
import MobileNav from './components/MobileNav';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://a1cp-back.herokuapp.com/graphql',
  cache: new InMemoryCache(),
});

function App() {
  useScrollToTop();
  return (
    <div>
      {' '}
      <ApolloProvider client={client}>
        <MobileNav />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/pricing" component={Pricing} />
          <Route path="/our-process" component={OurProcess} />
          <Route path="/faq" component={Faq} />
          <Route path="/creditmonitory" component={CreditMonitory} />
        </Switch>
      </ApolloProvider>
    </div>
  );
}

export default App;
