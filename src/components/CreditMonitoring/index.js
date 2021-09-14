import React from 'react';

import styles from './style.module.css';
import { Link } from 'react-router-dom';
import Pupup from '../Popup';

const CreditMonitoring = () => {
  return (
    <div className="container">
      <div className={styles.credit}>
        <p>
          Credit monitoring is required monthly to ensure we can continue working on your inaccurate
          accounts without any interruption. If you are already using a credit monitoring service,
          you can provide these details to use during the sign up proce
        </p>
        <div className={styles.buttons}>
          <Pupup />
          {/* <button className="btnYellow">
            <Link to="/thankyou">Free Consultation</Link>
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default CreditMonitoring;
