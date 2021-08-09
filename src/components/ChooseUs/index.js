import React, { useState, useEffect } from 'react';
import axios from 'axios';
import shakingHands from '../../assets/shaking-hands.png';
import twoYoung from '../../assets/two-young.png';
import styles from './style.module.css';
const ChooseUs = () => {
  return (
    <>
      <div className={styles.choose}>
        <img className={styles.handImg} src={shakingHands} alt="" />
        <div className="container">
          <div className={styles.card}>
            <h1 className={styles.cardTitle}>
              Get started restoring your credit free for the first <b>30</b> days
            </h1>
            <button className={styles.btnBlue}>Get Started Now</button>
          </div>

          <div className={styles.rightblock}>
            <h1 className={styles.title}>Why Choose Us?</h1>
            <div className={styles.description}>
              <p>
                A1 Credit Partners is one of the most trusted leaders in restoring people's lives
                through our credit restoration process. We fight for every consumer’s right to an
                accurate, fair and substantiated credit report, including yours. Our experienced
                professionals work to protect consumers’ credit rights and ensure that they have
                fair and accurate credit reports. We empower clients to take charge of their credit
                and achieve their financial goals as it is their right and responsibility.
              </p>

              <p>
                We pride ourselves on being the premier credit restoration company, serving a vast
                array of clients with unique and collective credit needs. Our experts follow credit
                bureau guidelines and advise you of all your rights when it comes to the credit
                industry. Unlike other credit repair companies, we walk you through the entire
                history and process of the credit business.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={styles.leftBlock}>
          <div className={styles.descriptionLeft}>
            <h1 className={styles.titleLeft}>Our Process</h1>
            <p>
              Our Firm has developed an easy and effective 4 step process that has been proven to
              help our clients achieve the results they deserve
            </p>

            <p>
              The first step requires one of our team members to help you create an account with
              Identityiq.com. This is a credit monitoring service which allows us to go through a
              detailed credit analysis with you. This will help determine what items in your credit
              history you found inaccurate that are damaging your credit.
            </p>

            <p>
              Next we will devise a plan to cater to your unique situation, and begin the dispute
              process on your accounts. We start by asking your creditors to verify the negative
              items they’re reporting. If they can’t, they are required by law to stop reporting
              them.
            </p>

            <p>
              After that is taken care of, we will then analyze your credit on a frequent basis
              collecting responses from the credit bureaus and creditors to continuously challenge
              inaccuracies until successfully removed. Our experts will constantly update you on any
              breakthroughs and results we achieve.
            </p>

            <p>
              Lasty, during the process of all that we do, you will also learn from experts who
              follow credit bureau guidelines and advise you of your rights when it comes to your
              credit moving forward. We will help make sure you stay on track with your credit and
              are able to fulfill all of your financial needs without any more roadblocks.
            </p>
          </div>
          <div className={styles.imgYoung}>
            <img className={styles.img} src={twoYoung} alt="twoYoung" />
          </div>

          <div className={styles.cardRight}>
            <h1 className={styles.cardTitleRight}>Free for the first 30 days</h1>
            <div className={styles.buttons}>
              <button className={styles.btnBlue}>Get Started Now</button>
              <button className={styles.btnYellow}>Free Consultation</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseUs;
