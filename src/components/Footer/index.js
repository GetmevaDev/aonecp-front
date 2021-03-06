import React from 'react';
import styles from './styles.module.css';
import Fade from 'react-reveal/Fade';
// import Popup from 'reactjs-popup';

import { useQuery, gql } from '@apollo/client';

import { withRouter, NavLink, Link } from 'react-router-dom';

import RGM from '../../assets/logoo.svg';

const Footer = ({ location }) => {
  const EXCHANGE_RATES = gql`
    query footer {
      footerCS {
        text
      }
    }
  `;
  const { loading, error, data } = useQuery(EXCHANGE_RATES);
  if (loading) return <div style={{ marginTop: 100, textAlign: 'center' }}>...</div>;
  if (error) return <p>Error :(</p>;

  const list = [
    { id: 2, title: 'Pricing', href: '/pricing' },
    { id: 3, title: 'Credit Monitoring', href: '/credit-monitoring' },
    { id: 4, title: 'Privacy Policy', href: '/privacy' },
    { id: 4, title: 'Get Started Now', href: '/client-form' },

    // { id: 4, title: 'Credit Education Blog', href: '#' },
  ];

  return (
    <div className="container">
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.firstitem}>
            <NavLink
              className={styles.item}
              activeClassName={location.pathname === '/' ? styles.itemActive : styles.item}
              to="/">
              How It Works
            </NavLink>

            <Fade>
              <ul className={styles.dropdown}>
                <Link to="/our-process">
                  <li className={styles.dropdownLink}>Our Process</li>
                </Link>
                <Link to="/thankyou">
                  <li className={styles.dropdownLink}>Free Consultation</li>
                </Link>
                <Link to="#">
                  <li className={styles.dropdownLink}>Get Started</li>
                </Link>
                <Link to="/faq">
                  <li className={styles.dropdownLink}>FAQ</li>
                </Link>
              </ul>
            </Fade>
          </li>
          {list.map(({ title, href }, index) => (
            <NavLink
              className={styles.item}
              activeClassName={location.pathname === href ? styles.itemActive : styles.item}
              key={index}
              to={href}>
              {title}
            </NavLink>
          ))}

          {/* <Popup
            trigger={
              <li className={styles.item} style={{ cursor: 'pointer' }}>
                Get Started Now
              </li>
            }
            position="top center">
            <div>
              <Link to="/client-form">
                <li className="dropdownLink">Client Form</li>
              </Link>
              <Link to="/affiliate-form">
                <li className="dropdownLink">Affiliate Form </li>
              </Link>
            </div>
          </Popup> */}
        </ul>
      </nav>
      <div className={styles.footerBlock}>
        <h4 className={styles.footerLeft}>{data.footerCS[0].text}</h4>
        <p className={styles.footerRight}>
          <div className={styles.logoInner}></div>

          <a
            href="https://robertgerov.com/"
            style={{ color: '#000', fontWeight: 500, whiteSpace: 'nowrap' }}>
            <img src={RGM} alt="RGM" className={styles.logo} />
            Web Design & Digital Marketing <br />
            <div className={styles.rgmInner}>
              by <b>Robert Gerov Media</b>
            </div>
          </a>
        </p>
      </div>
    </div>
  );
};

export default withRouter(Footer);
