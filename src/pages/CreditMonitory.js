import React from 'react';
import { BannerProps, Footer, NavBar } from '../components';
import WhatIsMonitoring from '../components/WhatIsMonitoring';
import CreditMonitoring from '../assets/creditmonitoringbg.png';

const CreditMonitory = () => {
  return (
    <div>
      <NavBar />
      <BannerProps title="Credit Monitoring" imgUrl={CreditMonitoring} />

      <WhatIsMonitoring />
      <Footer />
    </div>
  );
};

export default CreditMonitory;
