import React from 'react';
import SignPhone from '../../assets/sign-phone.svg';
import Doc from '../../assets/2arr.svg';

import styles from './styles.module.css';
const SignUp = () => {
  const arr = ['1', '2', '3', '4', '5', '6', '7'];
  const arr1 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  return (
    <div className="container">
      <h1 className={styles.easyTitle}>Easy sign up process</h1>
      <p className={styles.easyDesc}>
        Get your credit restoration program free for the first <b className={styles.color}>30 </b>
        <b>days!</b> Then only
        <b> $</b>
        <b className={styles.color}>99/</b>
        <b>month </b> for the full package which includes the following benefits:
      </p>

      <div className={styles.cards}>
        {arr.map((num, index) => {
          return (
            <div className={styles.card}>
              <div className={styles.cardInner}>
                <img className={styles.cardSvg} src={SignPhone} alt="" />
                <p className={styles.cardDesc}>Unlimited challenge validation letters</p>
              </div>
            </div>
          );
        })}
      </div>

      <p className={styles.easyDesc}>
        Because of our competitive rates, clients are required to signup for credit monitoring
        services with Identiyiq.com which starts at a <b>$</b>
        <b className={styles.color}>1</b> <b>trial for</b> <b className={styles.color}>7</b>
        <b>days</b> and will be <b>$</b>
        <b className={styles.color}>19.99</b>
        <b>month </b>/ moving forward. By signing up for the <b>$</b>
        <b className={styles.color}>1</b> <b>trial</b>, we will provide you with a completely free
        analysis and you will get all of the following benefits:
      </p>

      <div className={styles.cardsOrange}>
        {arr1.map((num, index) => {
          return (
            <div className={`${styles.card} ${styles.cardBottom}`}>
              <div className={styles.cardInner}>
                <img className={styles.cardSvg} src={Doc} alt="" />
                <p className={styles.cardDesc}>Unlimited challenge validation letters</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SignUp;
