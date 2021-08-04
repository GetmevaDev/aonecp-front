import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
export const list = [
  { title: 'How it works', href: '/' },
  { title: 'Pricing', href: '/pricing' },
  { title: 'Credit Monitoring', href: '/creditmonitory' },
  { title: 'Credit Education Blog', href: '/faq' },
  { title: 'Get Started Now', href: '/getstarted' },
];
const NavBar = () => {
  return (
    <div className="container">
      <div className={styles.navbar}>
        <div className={styles.imgLogo}></div>
        <nav className={styles.nav}>
          <ul className={styles.list}>
            {list.map(({ title, href }, index) => (
              <Link className={styles.item} key={index} to={href}>
                {title}
              </Link>
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
