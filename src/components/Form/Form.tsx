import { SyntheticEvent } from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import { FieldValues, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import styles from './Form.module.scss';
import { TextEmoji } from '../TextEmoji/TextEmoji';

type Props = {
  toggleModalHandler: () => void;
  showCloseButton?: boolean;
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

export const Form = ({ toggleModalHandler, showCloseButton = true }: Props) => {
  const { register, handleSubmit } = useForm(formConfig);

  const onSubmitHandler = (data: FieldValues) => {
    console.log('submitted: ', data);
  };

  return (
    <div
      className={styles.container}
      //on click has to be added to prevent eventPropagation (bubbling). If not present clicking on any Component's element will close the modal
      onClick={(e: SyntheticEvent<HTMLDivElement>) => e.stopPropagation()}>
      {showCloseButton ? <div onClick={toggleModalHandler} className={styles.close}></div> : null}

      <div className={styles.logoContainer}>
        <p className={styles.logo}>A</p>
      </div>
      <h3 className={styles.heading}>
        Welcome to Adoptme <TextEmoji>😻</TextEmoji>
      </h3>
      <div className={styles.formWrapper}>
        <form className={styles.form} method="post" onSubmit={handleSubmit(onSubmitHandler)}>
          <div className={styles.inputContainer}>
            <label className={styles.label} htmlFor="email">
              Email:
            </label>
            <input
              {...register('email', { required: true })}
              className={styles.input}
              id="email"
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
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <a className={styles.link} href="https://www.google.pl">
              Did you forget your password?
            </a>
          </div>
          <button className={`${styles.button} ${styles.action}`} type={'submit'}>
            Log in
          </button>
        </form>
        <span className={styles.textSeparator}>OR</span>
        <button className={`${styles.button} ${styles.facebook}`}>
          <FacebookIcon sx={{ marginRight: 1 }} />
          Continue with Facebook
        </button>
      </div>
      <div className={styles.lineSeparator}></div>
      <footer className={styles.formFooter}>
        <p className={styles.textRegister}>
          Not an user yet?{' '}
          <a className={styles.link} href="#">
            <span>Register</span>
          </a>{' '}
          your account now!
        </p>
        <p className={styles.textRegister}>
          You can find out more about our policy reading{' '}
          <a className={styles.link} href="#">
            <span>Terms of Service</span>
          </a>{' '}
          and{' '}
          <a className={styles.link} href="#">
            <span>Privacy policy</span>
          </a>
        </p>
      </footer>
    </div>
  );
};
