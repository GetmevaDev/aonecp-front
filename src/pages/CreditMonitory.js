import React from 'react';
import { BannerProps, Footer, NavBar } from '../components';
import WhatIsMonitoring from '../components/WhatIsMonitoring';
import CreditMonitoring from '../assets/creditmonitoringbg.png';
import { Helmet } from 'react-helmet';
import BeatLoader from 'react-spinners/BeatLoader';

const CreditMonitory = ({ data, loading, error }) => {
  if (loading)
    return (
      <div style={{ marginTop: 100, textAlign: 'center' }}>
        <BeatLoader />
      </div>
    );
  if (error) return <p>Error :(</p>;
  const meta = data.seos[1]?.bannerTitle;
  const img = data.seos[1]?.bannerImg[0]?.url;
  return (
    <div>
      <Helmet>
        <title>A1CP - CreditMonitory</title>

        {/* {data.seos[2].homemeta} */}
        <meta name="description" content="A1CP CreditMonitory" />
        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="A1CP - CreditMonitory" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="" />
      </Helmet>
      <NavBar />
      <BannerProps title={meta} imgUrl={img} />

      <WhatIsMonitoring />
      <Footer />
    </div>
  );
};

export default CreditMonitory;
