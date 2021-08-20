import React from 'react';
import { BannerProps, CreditMonitoring, Footer, NavBar, SignUp } from '../components';
import pricing from '../assets/pricing.png';
import { Helmet } from 'react-helmet';

const Pricing = () => {
  return (
    <div>
      <Helmet>
        <title>A1CP - Pricing</title>
        <meta name="description" content="A1CP Pricings" />
      </Helmet>
      <NavBar />
      <BannerProps title="Pricing" imgUrl={pricing} />
      <SignUp />
      <CreditMonitoring />
      <Footer />
    </div>
  );
};

export default Pricing;
