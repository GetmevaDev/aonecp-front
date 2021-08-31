import React from 'react';
import { BannerProps, Footer, NavBar } from '../components';
import Form from '../components/Form';
import bgGray from '../assets/Image Background.png';

const AffiliateForm = () => {
  return (
    <>
      <title>A1CP - AffiliateForm</title>
      <meta name="description" content="A1CP AffiliateForm" />
      <meta property="og:url" content="" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="A1CP - AffiliateForm" />
      <meta property="og:description" content="" />
      <meta property="og:image" content="" />
      <NavBar />
      <BannerProps title="Affiliate Form" imgUrl={bgGray} />
      <Form />
      <Footer />
    </>
  );
};

export default AffiliateForm;
