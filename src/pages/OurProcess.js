import React from 'react';
import { BannerProps, Footer, NavBar, ProcessBlock } from '../components';

import Process from '../assets/process.png';

const OurProcess = () => {
  return (
    <div>
      <NavBar />
      <BannerProps title="Our process" imgUrl={Process} />
      <ProcessBlock />
      <Footer />
    </div>
  );
};

export default OurProcess;
