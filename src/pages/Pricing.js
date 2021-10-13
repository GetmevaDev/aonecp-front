import React from 'react';
import { BannerProps, CreditMonitoring, Footer, NavBar, SignUp } from '../components';
import { Helmet } from 'react-helmet';
import BeatLoader from 'react-spinners/BeatLoader';

const Pricing = ({ data, loading, error }) => {
  if (loading)
    return (
      <div style={{ marginTop: 100, textAlign: 'center' }}>
        <BeatLoader />
      </div>
    );
  if (error) return <p>Error :(</p>;

  const meta = data.seos[4]?.bannerTitle;
  const img = data.seos[4]?.bannerImg[0]?.url;

  return (
    <div>
      <Helmet>
        <title>A1CP - Pricing</title>
        {/* {data.seos[4].homemeta} */}
        <meta name="description" content="A1CP Pricing" />
        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="A1CP -  Pricing" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="" />
      </Helmet>
      <NavBar />
      <BannerProps title={meta} imgUrl={img} />
      <SignUp />
      <CreditMonitoring />
      <Footer />
    </div>
  );
};

export default Pricing;
