import React from 'react';
import { list } from '../NavBar/index';
import styles from './styles.module.css';

import { useLocation, NavLink } from 'react-router-dom';

import RGM from '../../assets/rgm.png';

const Footer = () => {
  const location = useLocation();

  const { pathname } = location;

  const splitLocation = pathname.split('/');
  return (
    <div className="container">
      <nav className={styles.nav}>
        <ul className={styles.list}>
          {list.map(({ title, href }, index) => (
            <NavLink
              className={styles.item}
              activeClassName={splitLocation[1] === href ? styles.itemActive : ''}
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

export default Footer;
