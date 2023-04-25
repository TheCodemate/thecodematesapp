import { ComponentProps } from 'react';
import { ErrorMessage } from '@hookform/error-message';
import { ErrorDisplay } from '../ErrorDisplay/ErrorDisplay';
import { useFormContext } from 'react-hook-form';

import styles from './CustomHookFormInput.module.scss';

type Props = { name: string; label: string } & ComponentProps<'input'>;

export const CustomHookFormInput = ({
  placeholder,
  id,
  name,
  label,
  type = 'text',
  required,
  ...props
}: Props) => {
  const { register } = useFormContext();

  return (
    <div className={styles.inputContainer}>
      <label className={styles.label} htmlFor={id}>
        {`${label}:`}
      </label>
      <input
        {...register(name, { required: required })}
        className={styles.input}
        id={id}
        type={type}
        placeholder={placeholder}
        {...props}
      />
      <ErrorMessage name={name} render={({ message }) => <ErrorDisplay errorMessage={message} />} />
    </div>
  );
};
