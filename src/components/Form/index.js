import React, { useState, useEffect } from 'react';
import styles from './styled.module.css';

import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import emailjs from 'emailjs-com';

const Form = () => {
  const [email, setEmail] = useState('');
  const [emailDirty, setEmailDirty] = useState(false);
  const [emailError, setEmailError] = useState('Email is a required field');
  const [formValid, setFormValid] = useState(false);
  const [phone, setPhone] = useState();

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
      .sendForm('service_mqtpv9t', 'template_hxleb5a', e.target, 'user_iw2a3XOS7O7HrGbR8S31M')
      .then(
        (result) => {
          console.log(result.text);
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
    <div className="container">
      <form className={styles.form} onSubmit={sendEmail}>
        <ul>
          <li>
            <label className={styles.name}>
              <h5 className={styles.textInput}> First Name</h5>
              <input className={styles.inputForm} name="name" type="text" />
            </label>
          </li>

          <li>
            <label className={styles.name}>
              <h5 className={styles.textInput}> Last Name</h5>
              <input className={styles.inputForm} name="lastname" type="text" />
            </label>
          </li>
          <li>
            <label className={styles.name}>
              <h5 className={styles.textInput}>Company Name</h5>
              <input className={styles.inputForm} name="company" type="text" />
            </label>
          </li>

          <li>
            <label className={styles.name}>
              <h5 className={styles.textInput}> Address</h5>
              <input className={styles.inputForm} name="address" type="text" />
            </label>
          </li>

          <li>
            <label className={styles.name}>
              <h5 className={styles.textInput}>City</h5>
              <input className={styles.inputForm} name="city" type="text" />
            </label>
          </li>

          <li>
            <label className={styles.name}>
              <h5 className={styles.textInput}> State</h5>
              <input className={styles.inputForm} name="state" type="text" />
            </label>
          </li>
          <li>
            <label className={styles.name}>
              <h5 className={styles.textInput}> ZIP code</h5>
              <input className={styles.inputForm} name="zipcode" type="text" />
            </label>
          </li>

          <li>
            <label className={styles.name}>
              <h5 className={styles.textInput}> Phone</h5>
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
              <h5 className={styles.textInput}> Promotional Methods</h5>
              <input className={styles.inputForm} name="promotionals" type="text" />
            </label>
          </li>
          <li>
            <label className={styles.name}>
              <h5 className={styles.textInput}>Comment Box</h5>
              <input
                className={styles.inputForm}
                style={{ width: '225%' }}
                name="comment"
                type="text"
              />
            </label>
          </li>
        </ul>
        <input disabled={!formValid} className={styles.btnSend} type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Form;
