import React from 'react';
import styles from './styles.module.css';
import BeatLoader from 'react-spinners/BeatLoader';
import { useQuery, gql } from '@apollo/client';

const WhatIsMonitoring = () => {
  const EXCHANGE_RATES = gql`
    query Monitoring {
      whatIsMonitorings {
        title
        description
        img {
          url
        }
      }
    }
  `;
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading)
    return (
      <div style={{ marginTop: 100, textAlign: 'center' }}>
        <BeatLoader />
      </div>
    );
  if (error) return <p>Error :(</p>;

  return (
    <div className={styles.monitoring}>
      <div className="container">
        <div className={styles.monitoring}>
          <div>
            <div className={styles.monitoringBlock}>
              <div className={styles.monitoringBlockLeft}>
                <img className={styles.imgWidth} src={data.whatIsMonitorings[0].img.url} alt="" />
              </div>
              <div className={styles.monitoringBlockRight}>
                <h1 className={styles.monitoringTitle}>{data.whatIsMonitorings[0].title}</h1>
                <p className={styles.monitoringDesc}>{data.whatIsMonitorings[0].description}</p>
              </div>
            </div>
            <div className={styles.monitoringBlock}>
              <div className={styles.monitoringBlockRight}>
                <h1 className={`${styles.monitoringTitle} ${styles.monitoringTitleLeft}`}>
                  {data.whatIsMonitorings[1].title}
                </h1>
                <p className={`${styles.monitoringDesc} ${styles.monitoringDescLeft}`}>
                  {data.whatIsMonitorings[1].description}
                </p>
              </div>
              <div className={styles.monitoringBlockLeft}>
                <img className={styles.imgWidth} src={data.whatIsMonitorings[2].img.url} alt="" />
              </div>
            </div>
            <div className={styles.monitoringBlock}>
              <div className={styles.monitoringBlockLeft}>
                <img className={styles.imgWidth} src={data.whatIsMonitorings[1].img.url} alt="" />
              </div>
              <div className={styles.monitoringBlockRight}>
                <h1 className={styles.monitoringTitle}>{data.whatIsMonitorings[2].title}</h1>
                <p className={styles.monitoringDesc}>{data.whatIsMonitorings[2].description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIsMonitoring;
