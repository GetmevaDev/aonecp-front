import React, { useState } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import styles from './styles.module.css';
import Fade from 'react-reveal/Fade';

export const list = [
  { id: 2, title: 'Pricing', href: '/pricing' },
  { id: 3, title: 'Credit Monitoring', href: '/creditmonitory' },
  // { id: 4, title: 'Credit Education Blog', href: '/faq' },
  { id: 5, title: 'Get Started Now', href: '/getstarted' },
];
const NavBar = ({ location }) => {
  return (
    <div className="container">
      <div className={styles.navbar}>
        <Link to="/">
          <div className={styles.imgLogo}></div>
        </Link>

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
        <>
          <a className={styles.button} href="/#">
            Login as
            <Fade>
              <ul className={styles.dropdown}>
                <li className={styles.dropdownLinkBtn}>
                  <a href="https://www.creditrestorationportal.com/account/login">Client</a>
                </li>

                <li className={styles.dropdownLinkBtn}>
                  <a href="https://www.affiliatecreditrepairportal.com/account/login">Affiliate</a>
                </li>
              </ul>
            </Fade>
          </a>
        </>
      </div>
    </div>
  );
};

export default withRouter(NavBar);
