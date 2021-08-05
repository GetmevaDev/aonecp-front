import React from 'react';
import { BannerProps, Footer, NavBar } from '../components/';
import CreditReport from '../components/AskQuestions/CreditReport';

import { Switch, Route } from 'react-router-dom';
import FaqBanner from '../assets/faqbg.png';
import CreditMyself from '../components/AskQuestions/CreditMyself';
import HowLong from '../components/AskQuestions/HownLong';
import TodoHelp from '../components/AskQuestions/ToDoHelp';
import PayMyBills from '../components/AskQuestions/PayMyBills';
import Collected from '../components/AskQuestions/Collected';
import RemovedCredit from '../components/AskQuestions/RemovedCreditReport';
import CreditScore from '../components/AskQuestions/CreditScore';

const Faq = () => {
  return (
    <div>
      <NavBar />
      <BannerProps imgUrl={FaqBanner} title="FAQ" />
      <Switch>
        <Route path={'/faq'} component={CreditScore} exact></Route>;
        <Route path={'/faq/credit-report'} component={CreditReport}></Route>
        <Route path={'/faq/credit-myself'} component={CreditMyself}></Route>;
        <Route path={'/faq/credit-howlong'} component={HowLong}></Route>
        <Route path={'/faq/credit-todohelp'} component={TodoHelp}></Route>
        <Route path={'/faq/credit-paymy'} component={PayMyBills}></Route>
        <Route path={'/faq/credit-collected'} component={Collected}></Route>
        <Route path={'/faq/credit-removedcredit'} component={RemovedCredit}></Route>
      </Switch>
      <Footer />
    </div>
  );
};

export default Faq;
