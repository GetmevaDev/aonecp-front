import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
const Pupup = () => {
  return (
    <Popup
      trigger={
        <button className="btnBlue">
          <li>Get Started Now</li>
        </button>
      }
      position="top center">
      <div>
        <Link to="/client-form">
          <li className={styles.dropdownLink}>Client Form</li>
        </Link>
        <Link to="/affiliate-form">
          <li className={styles.dropdownLink}>Affiliate Form </li>
        </Link>
      </div>
    </Popup>
  );
};

export default Pupup;
