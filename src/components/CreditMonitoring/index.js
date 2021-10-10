import React from 'react';

import styles from './style.module.css';
import { Link } from 'react-router-dom';
import Pupup from '../Popup';
import { useQuery, gql } from '@apollo/client';
import BeatLoader from 'react-spinners/BeatLoader';

const CreditMonitoring = () => {
  const EXCHANGE_RATES = gql`
    query GetRightBlock {
      pricingCreditMonitorings {
        creditTitle
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
      <div className={styles.credit}>
        <p>{data.pricingCreditMonitorings[0].creditTitle}</p>
        <div className={styles.buttons}>
          <Link to="/client-form">
            <button className="btnBlue btnCons">Free Consultation</button>
          </Link>
          {/* <button className="btnYellow">
            <Link to="/thankyou">Free Consultation</Link>
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default CreditMonitoring;
