import React, { useState, useEffect } from 'react';
import styles from './styled.module.css';
import { useHistory } from 'react-router-dom';

import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import emailjs from 'emailjs-com';

import bgGray from '../../assets/woman.png';
const Form = (props) => {
  const [firstName, setFirstName] = useState();
  const [lastname, setLastname] = useState();
  const [wouldyoulike, setWouldYouLike] = useState();
  const [howDid, setHoWdid] = useState();

  const [email, setEmail] = useState('');
  const [emailDirty, setEmailDirty] = useState(false);
  const [emailError, setEmailError] = useState('Email is a required field');
  const [formValid, setFormValid] = useState(false);
  const [phone, setPhone] = useState();
  const history = useHistory();
  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError('Incorrect email');
    } else {
      setEmailError('');
    }
  };

  useEffect(() => {
    if (emailError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError]);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm('service_mw3qmm3', 'template_4329ukk', e.target, 'user_iw2a3XOS7O7HrGbR8S31M')
      .then(
        (result) => {
          console.log(result.text);
          setFirstName('');
          setLastname('');
          setPhone('');
          setEmail('');
          setWouldYouLike('');
          setHoWdid('');
          history.push('/thankyou');
        },
        (error) => {
          console.log(error.text);
        },
      );
  }

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className={styles.pricing}>
        <div>
          <img className={styles.imgProp} src={bgGray} alt="" />
          <div className={styles.titleBlock}>
            <h1 className={styles.title}>
              Please fill out the information below for a free consultation
            </h1>
          </div>
        </div>
      </div>
      <div className="container">
        <form className={styles.form} onSubmit={sendEmail}>
          <ul>
            <li>
              <label className={styles.name}>
                <h5 className={styles.textInput}> First Name</h5>
                <input className={styles.inputForm} value={firstName} name="name" type="text" />
              </label>
            </li>

            <li>
              <label className={styles.name}>
                <h5 className={styles.textInput}> Last Name</h5>
                <input className={styles.inputForm} value={lastname} name="lastname" type="text" />
              </label>
            </li>

            <li>
              <label className={styles.name}>
                {emailDirty && emailError && <div style={{ color: 'red' }}>{emailError}</div>}
                <h5 className={styles.textInput}>Email</h5>
                <input
                  onChange={(e) => emailHandler(e)}
                  value={email}
                  onBlur={(e) => blurHandler(e)}
                  className={styles.inputForm}
                  name="email"
                  type="email"
                />
              </label>
            </li>

            <li>
              <label className={styles.name}>
                <h5 className={styles.textInput}>Mobile Number</h5>
                <PhoneInput
                  className={styles.textInput}
                  placeholder="Enter phone number"
                  name="phone"
                  countryCallingCodeEditable={false}
                  defaultCountry="US"
                  value={phone}
                  formatPhoneNumber
                  onChange={setPhone}
                />
              </label>
            </li>

            <li>
              <label className={styles.name}>
                <h5 className={styles.textInput}> How did you hear about us?</h5>
                <input className={styles.inputForm} value={howDid} name="howdid" type="text" />
              </label>
            </li>
          </ul>
          <input disabled={!formValid} className={styles.btnSend} type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
};

export default Form;
