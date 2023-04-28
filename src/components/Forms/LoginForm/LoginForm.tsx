import { FieldValues, FormProvider, useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { CustomHookFormInput } from '../CustomHookFormInput/CustomHookFormInput';

import styles from './LoginForm.module.scss';

const schema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters' })
    .max(20, { message: 'Password must contain less than 20 characters' })
});

const formConfig = {
  defaultValues: {
    email: '',
    password: ''
  },
  resolver: zodResolver(schema)
};

export const LoginForm = () => {
  const methods = useForm(formConfig);
  const { reset, handleSubmit, register } = methods;

  const onSubmitHandler = (data: FieldValues) => {
    console.log('login in: ', data);
    reset();
  };

  return (
    <FormProvider {...methods}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmitHandler)}>
        <CustomHookFormInput
          {...register('email')}
          id="email"
          required
          label={'Email'}
          placeholder={'Insert your email here...'}
          type={'email'}
        />
        <CustomHookFormInput
          {...register('password')}
          id="password"
          required
          label={'Password'}
          placeholder={'Insert password'}
          type={'password'}
        />
        <button className={`${styles.button} ${styles.action}`}>Log in</button>
      </form>
    </FormProvider>
  );
};
