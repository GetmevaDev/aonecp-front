import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Footer, NavBar } from '../components';
const Consultation = () => {
  useEffect(() => {
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
    head.appendChild(script);
  });

  return (
    <>
      <NavBar />
      <div className="App" style={{ textAlign: 'center' }}>
        <h1 className="title" style={{ fontSize: 30, fontWeight: 300 }}>
          Thank you!
        </h1>
        <p>
          You've taken your first step towards a brighter future. Select a day and time to speak
          with one of our knowleadeable team members
        </p>

        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/a1creditpartners"
          style={{ minWidth: '320px', height: '630px' }}></div>
      </div>
      <Footer />
    </>
  );
};

export default Consultation;
