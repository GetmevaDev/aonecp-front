import React from 'react';
import styles from './styles.module.css';
import cn from 'classnames';

const BannerProps = ({ title, imgUrl, titleColor }) => {
  return (
    <div className={styles.pricing}>
      <div>
        <img className={styles.imgProp} src={imgUrl} alt="" />
        <h1 className={cn(styles.title)}>{title}</h1>
      </div>
    </div>
  );
};

export default BannerProps;
