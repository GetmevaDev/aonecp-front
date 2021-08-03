import React from 'react';
import styles from './style.module.css';

import { NavLink } from 'react-router-dom';

const AskQuestion = () => {
  return (
    <div className={styles.ask}>
      <div className="container">
        <h1 className={styles.title}>Frequently Asked Questions</h1>

        <div className={styles.freq}>
          <div className={styles.freqLeft}>
            <div className={styles.freqLeftInner}>
              <NavLink to="/#" activeClassName="freq-active">
                What is a good credit score?
              </NavLink>
            </div>
            <div className={styles.freqLeftInner}>
              <NavLink to="/#">What is a credit report?</NavLink>
            </div>
            <div className={styles.freqLeftInner}>
              <NavLink to="/#">Can I Fix My Credit Myself?</NavLink>
            </div>
            <div className={styles.freqLeftInner}>
              <NavLink to="/#">How Long does bankruptcy stay on a credit report?</NavLink>
            </div>
            <div className={styles.freqLeftInner}>
              <NavLink to="/#">What do you do to help?</NavLink>
            </div>{' '}
            <div className={styles.freqLeftInner}>
              <NavLink to="/#">Do I need to pay my bills?</NavLink>
            </div>{' '}
            <div className={styles.freqLeftInner}>
              <NavLink to="/#">How Are judgements collected?</NavLink>
            </div>
            <div className={styles.freqLeftInner}>
              <NavLink to="/#">Can repossessions be removed from a credit report?</NavLink>
            </div>
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

export default AskQuestion;
