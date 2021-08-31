import React from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

import SignSvgPhone from '../../assets/phone.svg';

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.content}>
        <div className={styles.logoService}></div>
        <h1 className={styles.title}>Restoring lives the easy way</h1>
        <p className={styles.description}>Free for the first 30 days</p>
        <div className={styles.buttons}>
          <button className="btnBlue">
            <Link to="#">Get Started Now</Link>
          </button>
          <button className="btnYellow">
            <Link to="/thankyou">Free Consultation</Link>
          </button>
        </div>
        <a href="tel:516-828-2338">
          <div className={styles.call}>
            <img className={styles.callSvg} src={SignSvgPhone} alt="" />

            <div className={styles.tel}>
              Call now <br />
              <b>800-974-7917</b>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Banner;
