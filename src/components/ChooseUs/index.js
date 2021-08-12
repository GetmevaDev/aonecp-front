import React, { useState, useEffect } from 'react';
import BeatLoader from 'react-spinners/BeatLoader';

import axios from 'axios';

import styles from './style.module.css';

const ChooseUs = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://a1cp-back.herokuapp.com/choose-us-right-blocks');
      setData(result.data);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading)
    return (
      <div style={{ marginTop: 100, textAlign: 'center' }}>
        <BeatLoader />
      </div>
    );

  return (
    <>
      <div className={styles.choose}>
        <img className={styles.handImg} src={data[5].img.url} alt="" />
        <div className="container">
          <div className={styles.card}>
            <h1 className={styles.cardTitle}>
              Get started restoring your credit free for the first <b>30</b> days
            </h1>
            <button className={styles.btnBlue}>Get Started Now</button>
          </div>

          <div className={styles.rightblock}>
            <h1 className={styles.title}>{data[5].title}</h1>
            <div className={styles.description}>
              {data.map(({ paragraphLRightBlock }, index) => (
                <p key={index}>{paragraphLRightBlock}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={styles.leftBlock}>
          <div className={styles.descriptionLeft}>
            <h1 className={styles.titleLeft}>{data[0].title}</h1>
            {data.map(({ paragraph }, index) => (
              <div key={index}>
                <p>{paragraph}</p>
              </div>
            ))}
          </div>
          <div className={styles.imgYoung}>
            <img className={styles.img} src={data[4].img.url} alt="twoYoung" />
          </div>

          <div className={styles.cardRight}>
            <h1 className={styles.cardTitleRight}>Free for the first 30 days</h1>
            <div className={styles.buttons}>
              <button className={styles.btnBlue}>Get Started Now</button>
              <button className={styles.btnYellow}>Free Consultation</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseUs;
