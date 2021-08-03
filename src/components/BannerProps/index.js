import styles from './styles.module.css';
import React from 'react';
import Pricing from '../../assets/pricing.png';

const BannerProps = ({ title }) => {
  return (
    <div className={styles.pricing}>
      <div>
        <h1 className={styles.title}>{title}</h1>
      </div>
    </div>
  );
};

export default BannerProps;
