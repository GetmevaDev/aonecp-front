import React, { useState, useRef } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import styles from './styles.module.css';
import Fade from 'react-reveal/Fade';
import Popup from 'reactjs-popup';

export const list = [
  { id: 2, title: 'Pricing', href: '/pricing' },
  { id: 3, title: 'Credit Monitoring', href: '/credit-monitoring' },
  { id: 4, title: 'Sign Up', href: '/client-form' },
  // { id: 4, title: 'Credit Education Blog', href: '#' },
];
const NavBar = ({ location }) => {
  const dropdownRef = useRef(null);
  const [login, setLogin] = useState(dropdownRef, false);

  const onClick = () => {
    setLogin(!login);
  };
  const contentStyle = {
    maxWidth: '370px',
    width: '90%',
  };

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
          </ul>
        </nav>
        <>
          <div className={styles.button} href="/#">
            Login as
            <ul className={styles.dropdownBtn}>
              <li className={styles.dropdownLinkBtn}>
                <a href="https://www.creditrestorationportal.com/account/login">Client</a>
              </li>

              <li className={styles.dropdownLinkBtn}>
                <a href="https://www.affiliatecreditrepairportal.com/account/login">Affiliate</a>
              </li>
            </ul>
          </div>
        </>
      </div>
    </div>
  );
};

export default withRouter(NavBar);
