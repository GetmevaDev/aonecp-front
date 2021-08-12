import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BannerProps, Footer, NavBar } from '../components/';
import CreditReport from '../components/AskQuestions/CreditReport';
import BeatLoader from 'react-spinners/BeatLoader';

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
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://a1cp-back.herokuapp.com/frequently-asked-questions');
      setData(result.data);
      setLoading(false);
      console.log(result.data);
    };

    fetchData();
  }, []);

  if (loading)
    return (
      <div style={{ marginTop: 100, textAlign: 'center' }}>
        <BeatLoader />
      </div>
    );

  return (
    <div>
      <NavBar />
      <BannerProps imgUrl={FaqBanner} title="FAQ" />
      <Switch>
        <Route path={'/faq'} exact>
          <CreditScore data={data} />
        </Route>
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
