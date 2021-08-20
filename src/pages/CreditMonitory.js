import React from 'react';
import { BannerProps, Footer, NavBar } from '../components';
import WhatIsMonitoring from '../components/WhatIsMonitoring';
import CreditMonitoring from '../assets/creditmonitoringbg.png';
import { Helmet } from 'react-helmet';

const CreditMonitory = () => {
  return (
    <div>
      <Helmet>
        <title>A1CP - CreditMonitory</title>
        <meta name="description" content="A1CP CreditMonitory" />
      </Helmet>
      <NavBar />
      <BannerProps title="Credit Monitoring" imgUrl={CreditMonitoring} />

      <WhatIsMonitoring />
      <Footer />
    </div>
  );
};

export default CreditMonitory;
