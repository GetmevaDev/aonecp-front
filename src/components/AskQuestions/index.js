import React from 'react';
import styles from './style.module.css';
import { AccordionWrapper, AccordionItem } from 'custom-react-accordion';
import 'custom-react-accordion/dist/Accordion.css';

import 'react-accessible-accordion/dist/fancy-example.css';
import { withRouter } from 'react-router-dom';

const CreditScore = ({ data }) => {
  return (
    <div className={styles.ask}>
      <div className="container">
        <h1 className={styles.title}>Frequently Asked Questions</h1>

        <div>
          <AccordionWrapper>
            {data.frequentlyAskedQuestions.map(({ ask, description }, index) => (
              <AccordionItem key={index} index={index} title={ask} description={description} />
            ))}
          </AccordionWrapper>
        </div>
      </div>
    </div>
  );
};

export default withRouter(CreditScore);
