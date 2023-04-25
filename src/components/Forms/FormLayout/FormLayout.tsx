import React, { SyntheticEvent } from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';

import { TextEmoji } from '@/components/TextEmoji/TextEmoji';
import { NavLinkWrapper } from '@/components/NavLinkWrapper/NavLinkWrapper';

import styles from './FormLayout.module.scss';
import { RegisterForm } from '../RegisterForm/RegisterForm';
import { LoginForm } from '../LoginForm/LoginForm';

type Props = {
  toggleModalHandler: () => void;
  showCloseButton?: boolean;
  openRegisterFormHandler: () => void;
  closeRegisterFormHandler: () => void;
  isRegisterRequested: boolean;
};

export const FormLayout = ({
  toggleModalHandler,
  showCloseButton,
  openRegisterFormHandler,
  closeRegisterFormHandler,
  isRegisterRequested
}: Props) => {
  return (
    <div
      className={styles.container}
      onClick={(e: SyntheticEvent<HTMLDivElement>) => e.stopPropagation()}>
      {showCloseButton ? <div onClick={toggleModalHandler} className={styles.close}></div> : null}
      <div className={styles.logoContainer}>
        <p className={styles.logo}>A</p>
      </div>

      <h3 className={styles.heading}>
        Welcome to Adoptme <TextEmoji>😻</TextEmoji>
      </h3>

      <div className={styles.formWrapper}>
        {isRegisterRequested ? <RegisterForm /> : <LoginForm />}
        <span className={styles.textSeparator}>OR</span>
        <button className={`${styles.button} ${styles.facebook}`}>
          <FacebookIcon sx={{ marginRight: 1 }} />
          Continue with Facebook
        </button>
      </div>
      <div className={styles.lineSeparator}></div>
      <footer className={styles.formFooter}>
        {isRegisterRequested ? (
          <p className={styles.textRegister}>
            Are you an user?{' '}
            <span className={styles.span} onClick={closeRegisterFormHandler}>
              Log in
            </span>{' '}
            here!
          </p>
        ) : (
          <p className={styles.textRegister}>
            Not an user yet?{' '}
            <span className={styles.span} onClick={openRegisterFormHandler}>
              Register
            </span>{' '}
            your account now!
          </p>
        )}
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
