import React from 'react';
import { asks } from '../CreditScore';

import { NavLink } from 'react-router-dom';
import styles from '../style.module.css';

const PayMyBills = () => {
  return (
    <div className={styles.ask}>
      <div className="container">
        <h1 className={styles.title}>Frequently Asked Questions</h1>

        <div className={styles.freq}>
          <div className={styles.freqLeft}>
            {asks.map(({ title, href }, index) => {
              return (
                <NavLink
                  to={{
                    pathname: href,
                  }}
                  className={styles.freqLeftAsk}
                  activeClassName={styles.freqLeftAskActive}
                  key={index}>
                  {title}
                </NavLink>
              );
            })}
          </div>
          <div className={styles.freqRight}>
            <p>
              The two most commonly used credit scoring models are fico score and VantageScore. They
              both use the 300 to 850 score range and analyze much of the same information. A FICO
              score of 670 or more is perceived as good, while above 800 is exceptional. Conversely,
              a FICO score of 580 – 669 is only fair, and a score of 579 or below is considered
              poor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayMyBills;
