import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BeatLoader from 'react-spinners/BeatLoader';

import styles from './styles.module.css';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
const SignUp = () => {
  const [firstSign, setFirstSign] = useState([]);
  const [secondSign, setSecondSign] = useState([]);

  const [thirdSign, setThirdSign] = useState('');

  const [loading, setLoading] = useState(true);

  const override = css`
    display: block;
    margin: 0 auto;
  `;

  const fetchData = () => {
    const firstContent = 'https://a1cp-back.herokuapp.com/pricingcontents';
    const secondContent = 'https://a1cp-back.herokuapp.com/pricing-content-twos';
    const thirdContent = 'https://a1cp-back.herokuapp.com/pricingtexts';

    const getApiFirst = axios.get(firstContent);
    const getApiSecond = axios.get(secondContent);
    const getApiThird = axios.get(thirdContent);

    axios.all([getApiFirst, getApiSecond, getApiThird]).then(
      axios.spread((...allData) => {
        const allDataFirstContent = allData[0].data;
        const allDataSecondContent = allData[1].data;
        const allDataThirdContent = allData[2].data;

        setFirstSign(allDataFirstContent);
        setSecondSign(allDataSecondContent);
        setThirdSign(allDataThirdContent);
        setLoading(false);
      }),
    );
  };

  // let str = thirdSign.toString().replace(/\d+\.\d+/, '', function (a, b) {
  //   return b ? `<span >` + b + '</span>' : a;
  // });

  useEffect(() => {
    fetchData();
  }, []);

  if (loading)
    return (
      <div style={{ marginTop: 100, textAlign: 'center' }}>
        <BeatLoader css={override} />
      </div>
    );

  // const numList = thirdSign[1].content.replace(/\s(d+)/g, '<span>$1</span>');

  // const result = (thirdSign[0].content.match(/\d+/g) || []).map((n) => `<span >{n}</span>`);

  return (
    <div className="container">
      <h1 className={styles.easyTitle}>{thirdSign[0].title}</h1>

      <p className={styles.easyDesc}>
        {thirdSign[0].content} <b className={styles.color}> {thirdSign[2].content} </b>{' '}
        {thirdSign[3].content}
      </p>

      <div className={styles.inner}>
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
      </div>
      <Link to="/credit-monitoring">
        <button className="btnBlue btnAny">and more</button>
      </Link>
      <p className={styles.easyDesc}>
        {thirdSign[1].content}
        <b>{thirdSign[4].content}</b>
        <b className={styles.color}>1</b> <b>{thirdSign[5].content}</b>
        <b className={styles.color}>{thirdSign[7].content} </b>
        <b> {thirdSign[8].content} </b> {thirdSign[6].content} <b>{thirdSign[4].content}</b>
        <b className={styles.color}>19.99</b>
        <b>month </b>
        {thirdSign[9].content} <b>{thirdSign[4].content}</b>
        <b className={styles.color}>1</b> <b>trial</b>
        {thirdSign[10].content}
      </p>

      <div className={styles.inner}>
        <div className={styles.cardsOrange}>
          <>
            {secondSign.map((item, index) => {
              return (
                <div className={`${styles.card} ${styles.cardBottom}`} key={index}>
                  <div className={styles.cardInner}>
                    <img className={styles.cardSvg} src={item.PricingImgTwo.url} alt="" />
                    <p className={styles.cardDesc}>{item.description}</p>
                  </div>
                </div>
              );
            })}
          </>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
