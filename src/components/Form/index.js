import React from 'react';
import styles from './styled.module.css';

const Form = () => {
  return (
    <div className="container">
      <form className={styles.form}>
        <ul>
          <li>
            <label className={styles.name}>
              <h5 className={styles.textInput}> First Name</h5>
              <input className={styles.inputForm} name="username" type="text" />
            </label>
          </li>

          <li>
            <label className={styles.name}>
              <h5 className={styles.textInput}> Last Name</h5>
              <input className={styles.inputForm} name="username" type="text" />
            </label>
          </li>
          <li>
            <label className={styles.name}>
              <h5 className={styles.textInput}>Company Name</h5>
              <input className={styles.inputForm} name="username" type="text" />
            </label>
          </li>

          <li>
            <label className={styles.name}>
              <h5 className={styles.textInput}> Address</h5>
              <input className={styles.inputForm} name="username" type="text" />
            </label>
          </li>

          <li>
            <label className={styles.name}>
              <h5 className={styles.textInput}>City</h5>
              <input className={styles.inputForm} name="username" type="text" />
            </label>
          </li>

          <li>
            <label className={styles.name}>
              <h5 className={styles.textInput}> State</h5>
              <input className={styles.inputForm} name="username" type="text" />
            </label>
          </li>
          <li>
            <label className={styles.name}>
              <h5 className={styles.textInput}> ZIP code</h5>
              <input className={styles.inputForm} name="username" type="text" />
            </label>
          </li>

          <li>
            <label className={styles.name}>
              <h5 className={styles.textInput}> Phone</h5>
              <input className={styles.inputForm} name="username" type="text" />
            </label>
          </li>

          <li>
            <label className={styles.name}>
              <h5 className={styles.textInput}>Email</h5>
              <input className={styles.inputForm} name="username" type="text" />
            </label>
          </li>

          <li>
            <label className={styles.name}>
              <h5 className={styles.textInput}> Promotional Methods</h5>
              <input className={styles.inputForm} name="username" type="text" />
            </label>
          </li>
          <li>
            <label className={styles.name}>
              <h5 className={styles.textInput}>Comment Box</h5>
              <input
                className={styles.inputForm}
                style={{ width: '225%' }}
                name="username"
                type="text"
              />
            </label>
          </li>
        </ul>
        <button className={styles.btnSend}>Send</button>
      </form>
    </div>
  );
};

export default Form;
