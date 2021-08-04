import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './styles.module.css';
export const list = [
  { title: 'How it works', href: '' },
  { title: 'Pricing', href: 'pricing' },
  { title: 'Credit Monitoring', href: 'creditmonitory' },
  { title: 'Credit Education Blog', href: 'faq' },
  { title: 'Get Started Now', href: 'getstarted' },
];
const NavBar = () => {
  const location = useLocation();

  const { pathname } = location;

  const splitLocation = pathname.split('/');
  return (
    <div className="container">
      <div className={styles.navbar}>
        <div className={styles.imgLogo}></div>
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
        <a className={styles.button} href="/#">
          Login as
        </a>
      </div>
    </div>
  );
};

export default NavBar;
