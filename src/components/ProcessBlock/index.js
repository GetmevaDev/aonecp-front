import React from 'react';
import styles from './styles.module.css';
import BeatLoader from 'react-spinners/BeatLoader';
import { useQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom';

const ProcessBlock = () => {
  const EXCHANGE_RATES = gql`
    query process {
      ourProcesses {
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
    <div className="container">
      <div className={styles.block}>
        <div className={styles.left}>
          <div className={styles.imgYoung}>
            <img className={styles.img} src={data.ourProcesses[0].img[0].url} alt="twoYoung" />
          </div>

          <div className={styles.cardRight}>
            {/* <h1 className={styles.cardTitleRight}>Free for the first 30 days</h1> */}
            <div className={styles.buttons}>
              <button className={styles.btnBlue}>
                <Link to="#">Get Started Now</Link>
              </button>
              <button className={styles.btnYellow}>
                <Link to="/thankyou">Free Consultation</Link>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.descriptionLeft}>
            <h1 className={styles.titleLeft}>{data.ourProcesses[0].title}</h1>

            <div>
              <p>{data.ourProcesses[0].description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessBlock;
