import React from 'react';
import { AskQuestion, BannerProps, Footer, NavBar } from '../components/';

import FaqBanner from '../assets/faqbg.png';

const Faq = () => {
  return (
    <div>
      <NavBar />
      <BannerProps imgUrl={FaqBanner} title="FAQ" />
      <AskQuestion />
      <Footer />
    </div>
  );
};

export default Faq;
