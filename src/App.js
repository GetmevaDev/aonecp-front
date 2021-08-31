import React from 'react';

import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Faq from './pages/Faq';
import CreditMonitory from './pages/CreditMonitory';
import OurProcess from './pages/OurProcess';
import Consultation from './pages/Consultation';
import Affiliate from './pages/AffiliateForm';

import { Switch, Route } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

import './globals.css';
import useScrollToTop from './components/scrollToTop';
import MobileNav from './components/MobileNav';
import ClientForm from './pages/ClientForm';

function App() {
  useScrollToTop();
  const EXCHANGE_RATES = gql`
    query faq {
      seos {
        homemeta
      }
    }
  `;
  const { loading, error, data } = useQuery(EXCHANGE_RATES);
  if (loading) return '';
  if (error) return <p>Error :(</p>;
  console.log(data);

  return (
    <div>
      <MobileNav />
      <Switch>
        <Route path="/" exact>
          <Home data={data} />
        </Route>
        <Route path="/pricing">
          <Pricing data={data} />
        </Route>
        <Route path="/our-process">
          <OurProcess data={data} />
        </Route>
        <Route path="/thankyou" component={Consultation} />
        <Route path="/faq">
          <Faq data={data} />
        </Route>
        <Route path="/creditmonitory">
          <CreditMonitory data={data} />
        </Route>
        <Route path="/affiliate-form" component={Affiliate} />
        <Route path="/client-form" component={ClientForm} />
      </Switch>
    </div>
  );
}

export default App;
