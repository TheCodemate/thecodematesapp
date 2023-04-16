import { SyntheticEvent, useState } from 'react';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import FacebookIcon from '@mui/icons-material/Facebook';
import { FieldValues, useForm } from 'react-hook-form';
import { NavLinkWrapper } from '../NavLinkWrapper/NavLinkWrapper';
import { TextEmoji } from '../TextEmoji/TextEmoji';

import styles from './Form.module.scss';

type Props = {
  toggleModalHandler: () => void;
  showCloseButton?: boolean;
};

const schema = z
  .object({
    email: z.string().email(),
    password: z
      .string()
      .min(8, { message: 'Password must be at least 8 characters' })
      .max(20, { message: 'Password must be cannot be larger then 6 characters' }),
    confirmPassword: z.string().min(8).max(20).optional()
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords does not match',
    path: ['confirmPassword']
  });

const formConfig = {
  defaultValues: {
    email: '',
    password: '',
    confirmPassword: ''
  },
  resolver: zodResolver(schema)
};

export const Form = ({ toggleModalHandler, showCloseButton = true }: Props) => {
  const {
    reset,
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm(formConfig);
  const [isRegisterInputVisible, setIsRegisterInputVisible] = useState(false);

  const registerVisibleHandler = () => {
    setIsRegisterInputVisible(true);
  };

  console.log('errors: ', errors);

  const onSubmitHandler = (data: FieldValues) => {
    if (isRegisterInputVisible) {
      console.log('registration: ', data);
      return;
    }

    console.log('login in: ', data);
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
          </div>
          {isRegisterInputVisible ? (
            <div className={styles.inputContainer}>
              <label className={styles.label} htmlFor="confirmPassword">
                Confirm password:
              </label>
              <input
                {...register('confirmPassword', {
                  required: true,
                  validate: (val: string) => {
                    if (watch('password') !== val) {
                      console.log('passwords doesnt match');
                      return 'Your passwords do no match';
                    }
                  }
                })}
                className={styles.input}
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                placeholder="Repeat password"
                required
              />
            </div>
          ) : null}
          <a className={styles.link} href="https://www.google.pl">
            Did you forget your password?
          </a>
          {isRegisterInputVisible ? (
            <button className={`${styles.button} ${styles.action}`} type={'submit'}>
              Register
            </button>
          ) : (
            <button className={`${styles.button} ${styles.action}`} type={'submit'}>
              Log in
            </button>
          )}
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
          <span className={styles.span} onClick={registerVisibleHandler}>
            Register
          </span>{' '}
          your account now!
        </p>
        <p className={styles.textRegister}>
          You can find out more about our policy reading{' '}
          <NavLinkWrapper to={'/terms-of-service'}>
            <span className={styles.span}>Terms of service</span>
          </NavLinkWrapper>{' '}
          and{' '}
          <NavLinkWrapper to={'/privacy-policy'}>
            <span className={styles.span}>Privacy Policy</span>
          </NavLinkWrapper>
        </p>
      </footer>
    </div>
  );
};
