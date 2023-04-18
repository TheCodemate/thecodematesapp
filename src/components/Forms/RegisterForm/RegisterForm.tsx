import { Dispatch, SetStateAction, SyntheticEvent } from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';

import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { ErrorMessage } from '@hookform/error-message';
import { FieldErrors, FieldValues, UseFormRegister, useForm } from 'react-hook-form';

import { NavLinkWrapper } from '../../NavLinkWrapper/NavLinkWrapper';
import { TextEmoji } from '../../TextEmoji/TextEmoji';

import styles from './RegisterForm.module.scss';
import { ErrorDisplay } from '../ErrorDisplay/ErrorDisplay';
import { ReactHookFormInput } from '../ReactHookFormInput/ReactHookFormInput';

type Props = {
  toggleModalHandler: () => void;
  showCloseButton?: boolean;
  registrationRequestedHandler: Dispatch<SetStateAction<boolean>>;
};

const schema = z
  .object({
    email: z.string().email(),
    password: z
      .string()
      .min(8, { message: 'Password must be at least 8 characters' })
      .max(20, { message: 'Password must contain less than 20 characters' }),
    confirmPassword: z.string().min(8).max(20)
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

export const RegisterForm = ({
  toggleModalHandler,
  showCloseButton = true,
  registrationRequestedHandler
}: Props) => {
  const {
    reset,
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm(formConfig);

  console.log('errors: ', errors);

  const onSubmitHandler = (data: FieldValues) => {
    console.log('errors: ', errors);
    console.log('Register: ', data);
    reset();
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
          <ReactHookFormInput
            id="email"
            isRequired={true}
            label={'Email'}
            name={'email'}
            placeholder={'Insert email'}
            register={register}
            type={'email'}
            errors={errors}
            ariaError={'emailError'}
          />
          <ReactHookFormInput
            id="password"
            isRequired={true}
            label={'Password'}
            name={'password'}
            placeholder={'Insert password'}
            register={register}
            type={'password'}
            errors={errors}
            ariaError={'passwordError'}
          />
          <ReactHookFormInput
            id="confirmPassword"
            isRequired={true}
            label={'Confirm Password'}
            name={'confirmPassword'}
            placeholder={'Repeat password'}
            register={register}
            type={'password'}
            errors={errors}
            ariaError={'confirmPasswordError'}
          />
          <button className={`${styles.button} ${styles.action}`} type={'submit'}>
            Register
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
          Do you have an account?{' '}
          <span className={styles.span} onClick={() => registrationRequestedHandler(false)}>
            Log in
          </span>{' '}
          here!
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
