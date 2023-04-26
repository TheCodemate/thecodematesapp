import { FieldValues, FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { CustomHookFormInput } from '../CustomHookFormInput/CustomHookFormInput';

import styles from './RegisterForm.module.scss';

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

export const RegisterForm = () => {
  const methods = useForm(formConfig);
  const { reset, handleSubmit, register } = methods;

  const onSubmitHandler = (data: FieldValues) => {
    console.log('Register: ', data);
    reset();
  };

  return (
    <FormProvider {...methods}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmitHandler)}>
        <CustomHookFormInput
          {...register('email')}
          id="email"
          label={'Email'}
          placeholder={'Insert email'}
          type={'email'}
        />
        <CustomHookFormInput
          {...register('password')}
          id="password"
          label={'Password'}
          placeholder={'Insert password'}
          type={'password'}
        />
        <CustomHookFormInput
          {...register('confirmPassword')}
          id="confirmPassword"
          label={'Confirm Password'}
          placeholder={'Repeat password'}
          type={'password'}
        />
        <button className={`${styles.button} ${styles.action}`}>Register</button>
      </form>
    </FormProvider>
  );
};
