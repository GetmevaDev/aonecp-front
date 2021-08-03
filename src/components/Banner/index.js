import React from 'react';
import styles from './styles.module.css';

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.content}>
        <div className={styles.logoService}></div>
        <h1 className={styles.title}>Restoring lives the easy way</h1>
        <p className={styles.description}>Free for the first 30 days</p>
        <div className={styles.buttons}>
          <button className={styles.btnBlue}>Get Started Now</button>
          <button className={styles.btnYellow}>Free Consultation</button>
        </div>
        <div className={styles.call}>
          <div className={styles.phone}></div>
          {/* <h3>Call now</h3> */}
          {/* <p>516-828-2338</p> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
