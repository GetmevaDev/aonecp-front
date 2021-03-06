import React from 'react';
import { Banner, Benefits, ChooseUs, Footer, NavBar } from '../components/';
import { Helmet } from 'react-helmet';

const Home = ({ data }) => {
  const img = data?.seos[0]?.bannerImg[0]?.url;

  return (
    <div>
      <Helmet>
        <title>A1CP - Home</title>

        {/* {data.seos[0].homemeta} */}
        <meta name="description" content="A1CP HOME" />
        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="A1CP - HOME" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="" />
      </Helmet>
      <NavBar />
      <Banner imgUrl={img} />
      <ChooseUs />

      <Benefits />
      <Footer />
    </div>
  );
};

export default Home;
