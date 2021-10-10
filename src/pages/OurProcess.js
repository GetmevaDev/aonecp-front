import React from 'react';
import { BannerProps, Footer, NavBar, ProcessBlock } from '../components';
import { Helmet } from 'react-helmet';

import Process from '../assets/process.png';

const OurProcess = ({ data }) => {
  const meta = data.seos[3]?.bannerTitle;
  const img = data.seos[3]?.bannerImg[0]?.url;
  return (
    <div>
      <Helmet>
        <title>A1CP - Our Process</title>

        {/* {data.seos[3].homemeta} */}
        <meta name="description" content="A1CP OUR PROCESS" />
        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="A1CP -  OUR PROCESS" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="" />
      </Helmet>
      <NavBar />
      <BannerProps title={meta} imgUrl={img} />

      <ProcessBlock />
      <Footer />
    </div>
  );
};

export default OurProcess;
