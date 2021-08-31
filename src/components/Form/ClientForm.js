import React from 'react';
import styles from './styled.module.css';

const ClientFormTwo = () => {
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
              <h5 className={styles.textInput}> First Name</h5>
              <input className={styles.inputForm} name="username" type="text" />
            </label>
          </li>

          <li>
            <label className={styles.name}>
              <h5 className={styles.textInput}> First Name</h5>
              <input className={styles.inputForm} name="username" type="text" />
            </label>
          </li>

          <li>
            <label className={styles.name}>
              <h5 className={styles.textInput}> First Name</h5>
              <input className={styles.inputForm} name="username" type="text" />
            </label>
          </li>

          <li>
            <label className={styles.name}>
              <h5 className={styles.textInput}> First Name</h5>
              <input className={styles.inputForm} name="username" type="text" />
            </label>
          </li>

          <li>
            <label className={styles.name}>
              <h5 className={styles.textInput}> First Name</h5>
              <input className={styles.inputForm} name="username" type="text" />
            </label>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default ClientFormTwo;
