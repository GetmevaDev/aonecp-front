import React, { useEffect } from 'react';
import styles from './style.module.css';
import { AccordionWrapper, AccordionItem } from 'custom-react-accordion';
import 'custom-react-accordion/dist/Accordion.css';

import 'react-accessible-accordion/dist/fancy-example.css';
import { withRouter } from 'react-router-dom';

// export const asks = [
//   { title: 'What is a good credit score?', href: '/faq' },
//   { title: 'What is a credit report?', href: '/faq/credit-report' },
//   { title: 'Can I Fix My Credit Myself?', href: '/faq/credit-myself' },
//   { title: 'How Long does bankruptcy stay on a credit report?', href: '/faq/credit-howlong' },
//   { title: 'What do you do to help?', href: '/faq/credit-todohelp' },
//   { title: 'Do I need to pay my bills?', href: '/faq/credit-paymy' },
//   { title: 'How Are judgements collected?', href: '/faq/credit-collected' },
//   {
//     title: 'Can repossessions be removed from a credit report?',
//     href: '/faq/credit-removedcredit',
//   },
// ];

const CreditScore = ({ data }) => {
  return (
    <div className={styles.ask}>
      <div className="container">
        <h1 className={styles.title}>Frequently Asked Questions</h1>

        <div>
          <AccordionWrapper>
            {data.map(({ ask, description }, index) => (
              <AccordionItem key={index} index={index} title={ask} description={description} />
            ))}
          </AccordionWrapper>
        </div>
      </div>
    </div>
  );
};

export default withRouter(CreditScore);

//  <Accordion>
//    {data.map(({ ask, description }, index) => (
//      <AccordionItem className={styles.freq} key={index}>
//        <AccordionItemHeading className={styles.freqLeft}>
//          <AccordionItemButton className={styles.freqLeftAsk}>{ask}</AccordionItemButton>
//        </AccordionItemHeading>
//        <AccordionItemPanel className={styles.freqRight}>
//          <p>{description}</p>
//        </AccordionItemPanel>
//      </AccordionItem>
//    ))}
//  </Accordion>;
