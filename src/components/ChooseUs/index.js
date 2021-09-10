import React from 'react';
import BeatLoader from 'react-spinners/BeatLoader';
import { Link } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import 'reactjs-popup/dist/index.css';
import styles from './style.module.css';
import Pupup from '../Popup';
import SignUp from '../SignUpIframe';
import ReactMarkdown from 'react-markdown';

const ChooseUs = () => {
  const EXCHANGE_RATES = gql`
    query GetRightBlock {
      chooseUsRightBlocks {
        paragraph
        title
        getstarted
        img {
          url
        }
        paragraphLRightBlock
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

  console.log(data);

  return (
    <>
      <div className={styles.choose}>
        <img className={styles.handImg} src={data.chooseUsRightBlocks[5].img.url} alt="" />
        <div className="container">
          <div className={styles.cardInner}>
            <div className={styles.card}>
              <h1 className={styles.cardTitle}>
                {data.chooseUsRightBlocks[7].getstarted}
                {/* <b> 30 </b> */}
                {/* {data.chooseUsRightBlocks[8].getstarted} */}
              </h1>
              <div className={styles.signBtn}>
                <SignUp />
              </div>
            </div>
          </div>

          <div className={styles.rightblock}>
            <h1 className={styles.title}> {data.chooseUsRightBlocks[5].title}</h1>
            <div className={styles.description}>
              {data.chooseUsRightBlocks.map(({ paragraphLRightBlock }, index) => (
                <p key={index}>{paragraphLRightBlock}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={styles.leftBlock}>
          <div className={styles.descriptionLeft}>
            <h1 className={styles.titleLeft}>{data.chooseUsRightBlocks[0].title}</h1>
            {data.chooseUsRightBlocks.map(({ paragraph }, index) => (
              <div key={index}>
                <p>{paragraph}</p>
              </div>
            ))}
          </div>
          <div className={styles.imgYoung}>
            <img className={styles.img} src={data.chooseUsRightBlocks[4].img.url} alt="twoYoung" />
          </div>

          <div className={styles.cardRight}>
            {/* <h1 className={styles.cardTitleRight}>Free for the first 30 days</h1> */}
            <div className={styles.buttons}>
              <div className={styles.signifram}>
                <SignUp />
                <button className="btnYellow">
                  <Link to="/thankyou">Free Consultation</Link>
                </button>
              </div>{' '}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseUs;
