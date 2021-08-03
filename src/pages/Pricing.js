import React from 'react';
import { BannerProps, CreditMonitoring, Footer, NavBar, SignUp } from '../components';
import pricing from '../assets/pricing.png';

const Pricing = () => {
  return (
    <div>
      <NavBar />
      <BannerProps title="Pricing" />
      <SignUp />
      <CreditMonitoring />
      <Footer />
    </div>
  );
};

export default Pricing;
