import React from 'react';
import { BannerProps, Footer, NavBar, ProcessBlock } from '../components';
import { Helmet } from 'react-helmet';

import Process from '../assets/process.png';

const OurProcess = ({ data }) => {
  return (
    <div>
      <Helmet>
        <title>{data.seos[3].homemeta}</title>
        <meta name="description" content="A1CP OUR PROCESS" />
        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="A1CP -  OUR PROCESS" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="" />
      </Helmet>
      <NavBar />
      <BannerProps title="Our process" imgUrl={Process} />
      <ProcessBlock />
      <Footer />
    </div>
  );
};

export default OurProcess;
