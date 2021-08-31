import React from 'react';
import styles from './styled.module.css';
import emailjs from 'emailjs-com';

const Form = () => {
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
              <input className={styles.inputForm} name="phone" type="text" />
            </label>
          </li>

          <li>
            <label className={styles.name}>
              <h5 className={styles.textInput}>Email</h5>
              <input className={styles.inputForm} name="user_email" type="email" />
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
        <input className={styles.btnSend} type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Form;
