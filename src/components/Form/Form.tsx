import React, { SyntheticEvent } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import styles from './Form.module.scss';

type FormProps = {
  toggleModalHandler: () => void;
};

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(10)
});

const formConfig = {
  defaultValues: {
    email: '',
    password: ''
  },
  resolver: zodResolver(schema)
};

export const Form: React.FC<FormProps> = ({ toggleModalHandler }) => {
  const { register, handleSubmit } = useForm(formConfig);

  const onSubmitHandler = (data: FieldValues) => {
    console.log('submitted: ', data);
  };

  return (
    <div
      className={styles.container}
      //on click has to be added to prevent eventPropagation (bubbling). If not present clicking on any Component's element will close the modal
      onClick={(e: SyntheticEvent<HTMLDivElement>) => e.stopPropagation()}>
      <div onClick={toggleModalHandler} className={styles.close}></div>

      <div className={styles.logoContainer}>
        <p className={styles.logo}>A</p>
      </div>
      <h3 className={styles.heading}>Welcome to Adoptme 😻</h3>
      <div className="formWrapper">
        <form className={styles.form} method="post" onSubmit={handleSubmit(onSubmitHandler)}>
          <div className={styles.inputContainer}>
            <label className={styles.label} htmlFor="email">
              Email:
            </label>
            <input
              {...register('email', { required: true })}
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
              {...register('password', { required: true })}
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
