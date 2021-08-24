import React from 'react';
import { Banner, Benefits, ChooseUs, Footer, NavBar } from '../components/';
import { Helmet } from 'react-helmet';
import { useQuery, gql } from '@apollo/client';


const Home = () => {
    const EXCHANGE_RATES = gql`
    query faq {
      seos {
         homemeta,
        pricingMeta,
        FAQmeta,
        OurProcessMeta,
        creditMeta
        
      }
    }
  `;
    const { loading, error, data } = useQuery(EXCHANGE_RATES);
  return (
    <div>



      <Helmet>
        <title>A1CP - Home</title>
        <meta name="description" content="A1CP HOME" />
        <meta
          property="og:url"
          content=""
      />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="A1CP - HOME" />
          <meta property="og:description" content="" />
          <meta property="og:image" content="" />
      </Helmet>
      <NavBar />
      <Banner />
      <ChooseUs />

      <Benefits />
      <Footer />
    </div>
  );
};

export default Home;
