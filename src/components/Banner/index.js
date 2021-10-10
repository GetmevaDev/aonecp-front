import React from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import 'reactjs-popup/dist/index.css';
import SignSvgPhone from '../../assets/phone.svg';
// import Modal from '../Modal';
import BeatLoader from 'react-spinners/BeatLoader';

import { useQuery, gql } from '@apollo/client';

const Banner = ({ imgUrl }) => {
  const EXCHANGE_RATES = gql`
    query faq {
      calLNows {
        tel
        title
        boldtext
        paragraph
        logo {
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

  const logo = data.calLNows[0]?.logo[0]?.url;
  console.log(data);
  return (
    <>
      <div className={styles.banner}>
        <div
          className={styles.bannerBg}
          style={{
            backgroundImage: `url(${imgUrl})`,
          }}></div>
        <div className={styles.content}>
          <div className={styles.contentInner}>
            <div className={styles.logoService} style={{ backgroundImage: `url(${logo})` }}></div>
            <h1 className={styles.title}>{data.calLNows[0].title}</h1>
            <h3 className={styles.description}>{data.calLNows[0].boldtext}</h3>
            <p className={styles.description} style={{ fontWeight: 500 }}>
              {data.calLNows[0].paragraph}
            </p>
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
                  <b>{data.calLNows[0].tel}</b>
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
