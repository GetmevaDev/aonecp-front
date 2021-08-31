import React from 'react';
import { BannerProps, Footer, NavBar } from '../components';
import WhatIsMonitoring from '../components/WhatIsMonitoring';
import CreditMonitoring from '../assets/creditmonitoringbg.png';
import { Helmet } from 'react-helmet';

const CreditMonitory = ({ data }) => {
  return (
    <div>
      <Helmet>
        <title>{data.seos[2].homemeta}</title>

        <meta name="description" content="A1CP CreditMonitory" />
        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="A1CP - CreditMonitory" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="" />
      </Helmet>
      <NavBar />
      <BannerProps title="Credit Monitoring" imgUrl={CreditMonitoring} />

      <WhatIsMonitoring />
      <Footer />
    </div>
  );
};

export default CreditMonitory;
