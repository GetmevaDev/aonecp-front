import React from 'react';
import { list } from '../NavBar/';
import styles from './styles.module.css';

import { withRouter, NavLink } from 'react-router-dom';

import RGM from '../../assets/rgm.png';

const Footer = ({ location }) => {
  return (
    <div className="container">
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <NavLink
            className={styles.item}
            activeClassName={location.pathname === '/' ? styles.itemActive : styles.item}
            to="/">
            How It Works
          </NavLink>
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
          <img src={RGM} alt="RGM" className={styles.logo} />
          Web Design & Digital Marketing <br />
          <div className={styles.rgmInner}>
            by <b>Robert Gerov Media</b>
          </div>
        </p>
      </div>
    </div>
  );
};

export default withRouter(Footer);
