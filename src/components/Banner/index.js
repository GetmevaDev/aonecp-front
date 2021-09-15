import React from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import 'reactjs-popup/dist/index.css';
import SignSvgPhone from '../../assets/phone.svg';
import Modal from '../Modal';

const Banner = () => {
  return (
    <>
      <div className={styles.banner}>
        <div className={styles.bannerBg}></div>
        <div className={styles.content}>
          <div className={styles.contentInner}>
            <div className={styles.logoService}></div>
            <h1 className={styles.title}>Restoring lives the easy way</h1>
            {/* <p className={styles.description}>Free for the first 30 days</p>{' '} */}
          </div>
          <div className={styles.buttonsInner}>
            <div className={styles.buttons} style={{ marginTop: 20 }}>
              {/* <Link to="/client-form">
                <button className="btnBlue" style={{ padding: '15px 76px' }}>
                  Sign Up
                </button>
              </Link> */}

              <button className="btnBlue btnCons">
                <Link to="/client-form">Free Consultation</Link>
              </button>
            </div>{' '}
            <a href="tel:516-828-2338">
              <div className={styles.call}>
                <img className={styles.callSvg} src={SignSvgPhone} alt="" />

                <div className={styles.tel}>
                  <span className={styles.callNow}>Call now</span> <br />
                  <b>800-974-7917</b>
                </div>
              </div>
            </a>
          </div>{' '}
        </div>
      </div>
    </>
  );
};

export default Banner;
