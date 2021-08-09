import React from 'react';
import styles from './styles.module.css';

import Buisnes from '../../assets/business.png';
import Workers from '../../assets/workers.png';
import BuisnesPeople from '../../assets/businesspeope.png';

const WhatIsMonitoring = () => {
  return (
    <div className={styles.monitoring}>
      <div className="container">
        <div className={styles.monitoring}>
          <div className={styles.monitoringBlock}>
            <div className={styles.monitoringBlockLeft}>
              <img src={Buisnes} alt="" />
            </div>
            <div className={styles.monitoringBlockRight}>
              <h1 className={styles.monitoringTitle}>What is credit monitoring?</h1>
              <p className={styles.monitoringDesc}>
                Good question! Credit monitoring is when you check your credit report and score and
                make sure the information is accurate and reporting correctly. But why is it so
                important?
              </p>
            </div>
          </div>

          <div className={styles.monitoringBlock}>
            <div className={styles.monitoringBlockRight}>
              <h1 className={`${styles.monitoringTitle} ${styles.monitoringTitleLeft}`}>
                Why is it important to monitor your credit?
              </h1>
              <p className={`${styles.monitoringDesc} ${styles.monitoringDescLeft}`}>
                Beware of identity theft. It’s a real problem and can ruin not only your credit but
                your life. But there is a solution to that. What is that you may ask? It’s credit
                monitoring and identity theft insurance! That is a huge peace of mind that many
                people like you may need as hacking gets significantly worse or more advanced. What
                this does for you is it provides identity theft coverage and insurance in case, God
                forbid, you do get your identity stolen. It also gives you access to all 3 of your
                credit reports from the credit bureaus. You also get a credit score from all 3
                credit bureaus, and fraud alert assistance. Who's the best to go with though?
              </p>
            </div>
            <div className={styles.monitoringBlockLeft}>
              <img src={Workers} alt="" />
            </div>
          </div>
          <div className={styles.monitoringBlock}>
            <div className={styles.monitoringBlockLeft}>
              <img src={BuisnesPeople} alt="" />
            </div>
            <div className={styles.monitoringBlockRight}>
              <h1 className={styles.monitoringTitle}>Who should you pick?</h1>
              <p className={styles.monitoringDesc}>
                We recommend identityiq (hyperlink to affiliate link). They’re the best choice for
                credit monitoring and you can sign up here!(hyperlink to affiliate link). It’s
                entirely up to you of course. But before you make your decision check out what they
                offer! They have lost wallet form and assistance, checking account reporting which
                reports about bank accounts opened in your name and possible incorrect information
                on it. This is on top of their credit monitoring and daily alerts from transunion!
                :) Identity IQ gives you $25,000 in insurance for things like funds stolen by
                unauthorized electronic funds transfer, coverage for elderly and child care, legal
                fees, miscellaneous expenses and up to $500 per week, (four - week maximum for wages
                lost while resolving a stolen identity event). It’s your decision but if we would
                say if you want the best peace of mind, your best choice is identityiq.com.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIsMonitoring;
