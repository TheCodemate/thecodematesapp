import { Dispatch, SetStateAction, SyntheticEvent } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { NavLinkWrapper } from '../../NavLinkWrapper/NavLinkWrapper';
import { TextEmoji } from '../../TextEmoji/TextEmoji';

import FacebookIcon from '@mui/icons-material/Facebook';

import styles from './LoginForm.module.scss';

type Props = {
  toggleModalHandler: () => void;
  showCloseButton?: boolean;
  registrationRequestedHandler: Dispatch<SetStateAction<boolean>>;
};

const schema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters' })
    .max(20, { message: 'Password must be cannot be larger then 6 characters' })
});

const formConfig = {
  defaultValues: {
    email: '',
    password: ''
  },
  resolver: zodResolver(schema)
};

export const LoginForm = ({
  toggleModalHandler,
  showCloseButton = true,
  registrationRequestedHandler
}: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm(formConfig);

  const onSubmitHandler = (data: FieldValues) => {
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
          <a className={styles.link} href="https://www.google.pl">
            Did you forget your password?
          </a>
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
          <span className={styles.span} onClick={() => registrationRequestedHandler(true)}>
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
