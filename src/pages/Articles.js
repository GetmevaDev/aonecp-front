import React from 'react';
import { BannerProps, Footer, NavBar } from '../components/';

import arts from '../assets/articles.png';
import { useQuery, gql } from '@apollo/client';
import BeatLoader from 'react-spinners/BeatLoader';
import { Helmet } from 'react-helmet';
import ArticlesAccordion from '../components/ArticlesAccordion';

const Articles = () => {
  const EXCHANGE_RATES = gql`
    query articles {
      articles {
        titleBottom
        text
        descBottom
        titleArticle
        img {
          url
        }
      }
    }
  `;
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading)
    return (
      <div style={{ marginTop: 100, textAlign: 'center' }}>
        <BeatLoader />
      </div>
    );
  if (error) return <p>Error :(</p>;
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
      <ArticlesAccordion data={data} />
      <Footer />{' '}
    </div>
  );
};

export default Articles;
