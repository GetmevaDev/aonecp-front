import React, { useState, useEffect } from 'react';
import { BannerProps, CreditMonitoring, Footer, NavBar, SignUp } from '../components';
import pricing from '../assets/pricing.png';

const Pricing = () => {
  return (
    <div>
      <NavBar />
      <BannerProps title="Pricing" imgUrl={pricing} />
      <SignUp />
      <CreditMonitoring />
      <Footer />
    </div>
  );
};

export default Pricing;
