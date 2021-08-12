import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BannerProps, Footer, NavBar, CreditScore } from '../components/';
import BeatLoader from 'react-spinners/BeatLoader';
import FaqBanner from '../assets/faqbg.png';

const Faq = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://a1cp-back.herokuapp.com/frequently-asked-questions');
      setData(result.data);
      setLoading(false);
      console.log(result.data);
    };

    fetchData();
  }, []);

  if (loading)
    return (
      <div style={{ marginTop: 100, textAlign: 'center' }}>
        <BeatLoader />
      </div>
    );

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
