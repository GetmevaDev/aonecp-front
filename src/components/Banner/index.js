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
            <h1 className={styles.title}>Restoring financial independence</h1>
            <h3 className={styles.description}>Don’t Let A Bad Credit Score Get In The Way! Start Restoring Your Life In As Little As 90 Days!</h3>
            <p className={styles.description} style={{fontWeight: 500}}>We can show you exactly what’s hurting your score & how we can work to fix it</p>

          </div>
          <div className={styles.buttonsInner}>
            <div className={styles.buttons} style={{ marginTop: 20 }}>
              {/* <Link to="/client-form">
                <button className="btnBlue" style={{ padding: '15px 76px' }}>
                  Sign Up
                </button>
              </Link> */}

              <Link to="/client-form">
                <button className="btnBlue btnCons">Free Consultation</button>
              </Link>
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
