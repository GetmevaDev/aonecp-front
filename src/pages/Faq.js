import React from 'react';
import { BannerProps, Footer, NavBar, CreditScore } from '../components/';
import BeatLoader from 'react-spinners/BeatLoader';
import FaqBanner from '../assets/faqbg.png';
import { useQuery, gql } from '@apollo/client';

const Faq = () => {
  const EXCHANGE_RATES = gql`
    query faq {
      frequentlyAskedQuestions {
        ask
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
      <NavBar />
      <BannerProps imgUrl={FaqBanner} title="FAQ" />

      <CreditScore data={data} />

      <Footer />
    </div>
  );
};

export default Faq;
