import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import axios from 'axios';

import BeatLoader from 'react-spinners/BeatLoader';

const WhatIsMonitoring = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://a1cp-back.herokuapp.com/what-is-monitorings');
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
    <div className={styles.monitoring}>
      <div className="container">
        <div className={styles.monitoring}>
          <div>
            <div className={styles.monitoringBlock}>
              <div className={styles.monitoringBlockLeft}>
                <img className={styles.imgWidth} src={data[0].img.url} alt="" />
              </div>
              <div className={styles.monitoringBlockRight}>
                <h1 className={styles.monitoringTitle}>{data[0].title}</h1>
                <p className={styles.monitoringDesc}>{data[0].description}</p>
              </div>
            </div>
            <div className={styles.monitoringBlock}>
              <div className={styles.monitoringBlockRight}>
                <h1 className={`${styles.monitoringTitle} ${styles.monitoringTitleLeft}`}>
                  {data[1].title}
                </h1>
                <p className={`${styles.monitoringDesc} ${styles.monitoringDescLeft}`}>
                  {data[1].description}
                </p>
              </div>
              <div className={styles.monitoringBlockLeft}>
                <img className={styles.imgWidth} src={data[2].img.url} alt="" />
              </div>
            </div>
            <div className={styles.monitoringBlock}>
              <div className={styles.monitoringBlockLeft}>
                <img className={styles.imgWidth} src={data[1].img.url} alt="" />
              </div>
              <div className={styles.monitoringBlockRight}>
                <h1 className={styles.monitoringTitle}>{data[2].title}</h1>
                <p className={styles.monitoringDesc}>{data[2].description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIsMonitoring;
