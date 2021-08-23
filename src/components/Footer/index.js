import React from 'react';
import { list } from '../NavBar/';
import styles from './styles.module.css';
import Fade from 'react-reveal/Fade';

import { withRouter, NavLink, Link } from 'react-router-dom';

import RGM from '../../assets/logoo.svg';

const Footer = ({ location }) => {
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
                <Link>
                  <li className={styles.dropdownLink}>Free Consultation</li>
                </Link>
                <Link>
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
        </ul>
      </nav>
      <div className={styles.footerBlock}>
        <h4 className={styles.footerLeft}>© 2021 A1 Credit Partners. All Rights Reserved. </h4>
        <p className={styles.footerRight}>
          <div className={styles.logoInner}></div>
          <a href="https://robertgerov.com/" style={{ color: '#000', fontWeight: 500 }}>
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
