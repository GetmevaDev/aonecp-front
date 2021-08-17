import React from 'react';
import styles from './styles.module.css';
import BeatLoader from 'react-spinners/BeatLoader';

import { useQuery, gql } from '@apollo/client';

const Benefits = () => {
  const EXCHANGE_RATES = gql`
    query GetBenefits {
      benefits {
        benefit
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
    <>
      <div className="container">
        <div className={styles.benefits}>
          <div>
            <h1 className={styles.titleBenefits}>Benefits</h1>
            {data.benefits.map(({ benefit }, index) => (
              <div className={styles.benefitsLeft} key={index}>
                <p className={styles.paragraph}>
                  {benefit}
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 35 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M17.4999 0C7.85052 0 0 7.85033 0 17.4999C0 27.1495 7.85052 35 17.4999 35C27.1493 35 34.9998 27.1495 34.9998 17.4999C34.9998 7.85033 27.1495 0 17.4999 0ZM27.5487 14.544L16.5544 25.5383C16.0869 26.0058 15.4655 26.2631 14.8044 26.2631C14.1434 26.2631 13.522 26.0058 13.0545 25.5383L7.45115 19.935C6.98368 19.4675 6.7262 18.8461 6.7262 18.1851C6.7262 17.5238 6.98368 16.9024 7.45115 16.4349C7.91845 15.9675 8.53986 15.71 9.20109 15.71C9.86213 15.71 10.4837 15.9675 10.951 16.4351L14.8042 20.2882L24.0484 11.044C24.5159 10.5765 25.1373 10.3192 25.7984 10.3192C26.4594 10.3192 27.0808 10.5765 27.5483 11.044C28.5136 12.0092 28.5136 13.5791 27.5487 14.544Z"
                      fill="url(#paint0_linear)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="-14.7612"
                        y1="15.9879"
                        x2="15.3648"
                        y2="47.3844"
                        gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FBDA61" />
                        <stop offset="1" stopColor="#F76B1C" />
                      </linearGradient>
                    </defs>
                  </svg>
                </p>
              </div>
            ))}
          </div>

          <div className={styles.benefitBlock}>
            <button className={styles.btnBlue}>Learn More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Benefits;
