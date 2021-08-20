import React from 'react';
import { BannerProps, Footer, NavBar, ProcessBlock } from '../components';
import { Helmet } from 'react-helmet';

import Process from '../assets/process.png';

const OurProcess = () => {
  return (
    <div>
      <Helmet>
        <title>A1CP - Our Process</title>
        <meta name="description" content="A1CP OUR PROCESS" />
      </Helmet>
      <NavBar />
      <BannerProps title="Our process" imgUrl={Process} />
      <ProcessBlock />
      <Footer />
    </div>
  );
};

export default OurProcess;
