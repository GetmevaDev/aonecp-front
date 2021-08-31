import React from 'react';
import { BannerProps, CreditMonitoring, Footer, NavBar, SignUp } from '../components';
import pricing from '../assets/Slides.svg';
import { Helmet } from 'react-helmet';

const Pricing = ({ data }) => {
  console.log(data);
  return (
    <div>
      <Helmet>
        <title>{data.seos[4].homemeta}</title>

        <meta name="description" content="A1CP Pricing" />
        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="A1CP -  Pricing" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="" />
      </Helmet>
      <NavBar />
      <BannerProps title="Pricing" imgUrl={pricing} />
      <SignUp />
      <CreditMonitoring />
      <Footer />
    </div>
  );
};

export default Pricing;
