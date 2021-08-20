import React from 'react';
import { Banner, Benefits, ChooseUs, Footer, NavBar } from '../components/';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>A1CP - Our Process</title>
        <meta name="description" content="A1CP HOME" />
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
