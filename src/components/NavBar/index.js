import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import styles from './styles.module.css';
export const list = [
  { id: 1, title: 'How it works', href: '/' },
  { id: 2, title: 'Pricing', href: '/pricing' },
  { id: 3, title: 'Credit Monitoring', href: '/creditmonitory' },
  { id: 4, title: 'Credit Education Blog', href: '/faq' },
  { id: 5, title: 'Get Started Now', href: '/getstarted' },
];
const NavBar = ({ location }) => {
  return (
    <div className="container">
      <div className={styles.navbar}>
        <div className={styles.imgLogo}></div>
        <nav className={styles.nav}>
          <ul className={styles.list}>
            {list.map(({ title, href, id }, index) => (
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
        <a className={styles.button} href="/#">
          Login as
        </a>
      </div>
    </div>
  );
};

export default withRouter(NavBar);
