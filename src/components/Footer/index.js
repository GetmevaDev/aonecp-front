import React from 'react';
import { list } from '../NavBar/index';
import styles from './styles.module.css';

import { withRouter, NavLink } from 'react-router-dom';

import RGM from '../../assets/rgm.png';

const Footer = ({ location }) => {
  return (
    <div className="container">
      <nav className={styles.nav}>
        <ul className={styles.list}>
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
          <img src={RGM} alt="RGM" className={styles.logo} />
          Web Design & Digital Marketing <br />
          by <b>Robert Gerov Media</b>
        </p>
      </div>
    </div>
  );
};

export default withRouter(Footer);
