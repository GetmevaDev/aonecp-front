import React, { useState, useEffect } from 'react';
import axios from 'axios';

import styles from './styles.module.css';

const SignUp = () => {
  const [firstSign, setFirstSign] = useState([]);
  const [secondSign, setSecondSign] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = () => {
    const firstContent = 'http://localhost:1337/pricingcontents';
    const secondContent = 'http://localhost:1337/pricing-content-twos';

    const getApiFirst = axios.get(firstContent);
    const getApiSecond = axios.get(secondContent);

    axios.all([getApiFirst, getApiSecond]).then(
      axios.spread((...allData) => {
        const allDataFirstContent = allData[0].data;
        const allDataSecondContent = allData[1].data;

        setFirstSign(allDataFirstContent);
        console.log(allDataSecondContent);
        setSecondSign(allDataSecondContent);
      }),
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

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
        {firstSign.map((item, index) => {
          return (
            <div className={styles.card} key={index}>
              <div className={styles.cardInner}>
                <img className={styles.cardSvg} src={item.pricingImg.url} alt="" />
                <p className={styles.cardDesc}>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
      <button className="btnBlue btnAny">any more</button>
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
        {secondSign.map((item, index) => {
          return (
            <div className={`${styles.card} ${styles.cardBottom}`}>
              <div className={styles.cardInner}>
                <img className={styles.cardSvg} src={item.PricingImgTwo.url} alt="" />
                <p className={styles.cardDesc}>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SignUp;
