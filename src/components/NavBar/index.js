import React from 'react';
import styles from './styles.module.css';
export const list = [
  'How it works',
  'Pricing',
  'Credit Monitoring',
  'Credit Education Blog',
  'Get Started Now',
];
const NavBar = () => {
  return (
    <div className="container">
      <div className={styles.navbar}>
        <div className={styles.imgLogo}></div>
        <nav className={styles.nav}>
          <ul className={styles.list}>
            {list.map((item, index) => (
              <li className={styles.item} key={index}>
                {item}
              </li>
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
