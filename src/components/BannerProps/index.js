import React from 'react';
import styles from './styles.module.css';

const BannerProps = ({ title, imgUrl }) => {
  return (
    <div className={styles.pricing}>
      <div>
        <img className={styles.imgProp} src={imgUrl} alt="" />
        <h1 className={styles.title}>{title}</h1>
      </div>
    </div>
  );
};

export default BannerProps;
