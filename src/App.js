import React, { useEffect } from 'react';

import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Faq from './pages/Faq';
import CreditMonitory from './pages/CreditMonitory';
import OurProcess from './pages/OurProcess';
import Consultation from './pages/Consultation';
import Affiliate from './pages/AffiliateForm';
import Articles from './pages/Articles';

import { Switch, Route } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import ReactGa from 'react-ga';

import './globals.css';
import useScrollToTop from './components/scrollToTop';
import MobileNav from './components/MobileNav';
import ClientForm from './pages/ClientForm';
import Privacy from './pages/Privacy';

function App() {
  useScrollToTop();
  useEffect(() => {
    ReactGa.initialize('G-GFN9PQZ5KT');
    ReactGa.pageview(window.location.pathname + window.location.search);
  });

  const EXCHANGE_RATES = gql`
    query faq {
      seos {
        homemeta
        bannerTitle
        bannerImg {
          url
        }
      }
    }
  `;
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  return (
    <div>
      <MobileNav pageWrapId={'page-wrap'} outerContainerId={'App'} />
      <Switch>
        <Route path="/" exact>
          <Home data={data} loading={loading} error={error} />
        </Route>
        <Route path="/pricing">
          <Pricing data={data} loading={loading} error={error} />
        </Route>
        <Route path="/our-process">
          <OurProcess data={data} loading={loading} error={error} />
        </Route>
        <Route path="/thankyou" component={Consultation} />
        <Route path="/faq">
          <Faq faqdata={data} loading={loading} error={error} />
        </Route>
        <Route path="/credit-monitoring">
          <CreditMonitory data={data} loading={loading} error={error} />
        </Route>

        <Route path="/privacy">
          <Privacy />
        </Route>
        <Route path="/affiliate-form">
          <Affiliate />
        </Route>
        <Route path="/client-form">
          <ClientForm data={data} loading={loading} error={error} />
        </Route>
        <Route path="/articles">
          <Articles artdata={data} loading={loading} error={error} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
