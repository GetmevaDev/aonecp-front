import React from 'react';
import { BannerProps, Footer, NavBar, CreditScore } from '../components/';
import BeatLoader from 'react-spinners/BeatLoader';
import FaqBanner from '../assets/faqbg.png';
import { Helmet } from 'react-helmet';
import { useQuery, gql } from '@apollo/client';

const Faq = ({ faqdata }) => {
  const meta = faqdata.seos[2]?.bannerTitle;
  const img = faqdata.seos[2]?.bannerImg[0]?.url;
  const EXCHANGE_RATES = gql`
    query faq {
      frequentlyAskedQuestions {
        ask
        metaTitle
        description
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
        <title>FAQ - A1 Credit Partner</title>

        <meta name="description" content="FAQ " />
        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="A1CP - FAQ" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="" />
      </Helmet>
      <NavBar />
      <BannerProps title={meta} imgUrl={img} />
      <CreditScore data={data} />
      <Footer />{' '}
    </div>
  );
};

export default Faq;
