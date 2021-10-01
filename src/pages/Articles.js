import React from 'react';
import { BannerProps, Footer, NavBar } from '../components/';

import arts from '../assets/articles.png';
import { useQuery, gql } from '@apollo/client';
import { Helmet } from 'react-helmet';
import Tab from '../components/Tab';

const Articles = () => {
  const EXCHANGE_RATES = gql`
    query articles {
      articles {
        titleBottom
        text
        id
        createdAt
        updatedAt
        open
        descBottom
        titleArticle
        img {
          url
        }
      }
    }
  `;
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  return (
    <div>
      <Helmet>
        <title>Articles - A1 Credit Partner</title>

        <meta name="description" content="Articles " />
        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="A1CP - Articles" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="" />
      </Helmet>
      <NavBar />
      <BannerProps imgUrl={arts} title="Articles" />
      <Tab data={data} loading={loading} error={error} />
      <Footer />{' '}
    </div>
  );
};

export default Articles;
