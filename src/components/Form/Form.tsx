import React, { FormEvent } from 'react';
import styles from './Form.module.scss';

type FormProps = {};

export const Form: React.FC<FormProps> = () => {
  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div className={styles.container}>
      <div className={styles.close}></div>

      <div className={styles.logoContainer}>
        <p className={styles.logo}>A</p>
      </div>
      <h3 className={styles.heading}>Welcome to Adoptme 😻</h3>
      <div className="formWrapper">
        <form className={styles.form} method="post" onSubmit={(e) => onSubmitHandler(e)}>
          <div className={styles.inputContainer}>
            <label className={styles.label} htmlFor="email">
              Email:
            </label>
            <input
              className={styles.input}
              type="email"
              name="email"
              placeholder="Email"
              required
            />
          </div>
          <div className={styles.inputContainer}>
            <label className={styles.label} htmlFor="password">
              Password:
            </label>
            <input
              className={styles.input}
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <label className={styles.label} htmlFor="password">
              <a className={styles.link} href="https://www.google.pl">
                Did you forget your password?
              </a>
            </label>
          </div>
          <input className={`${styles.button} ${styles.action}`} type="submit" value="Log in" />
        </form>
        <div className={styles.separator}>OR</div>
        <input className={`${styles.button} ${styles.facebook}`} type="submit" value="Facebook" />
      </div>
    </div>
  );
};
