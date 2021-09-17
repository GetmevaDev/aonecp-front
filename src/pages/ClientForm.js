import React from 'react';
import { BannerProps, Footer, NavBar } from '../components';
import ClientFormTwo from '../components/Form/ClientForm';
import bgGray from '../assets/woman.png';

const ClientForm = () => {
  return (
    <>
      <title>A1CP - ClientForm</title>
      <meta name="description" content="A1CP AffiliateForm" />
      <meta property="og:url" content="" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="A1CP - AffiliateForm" />
      <meta property="og:description" content="" />
      <meta property="og:image" content="" />
      <NavBar />

      {/* <BannerProps
        title="Please fill out the information below for a free consultation"
        imgUrl={bgGray}
      /> */}

      <ClientFormTwo />
      <Footer />
    </>
  );
};

export default ClientForm;
