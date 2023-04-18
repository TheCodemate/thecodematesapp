import { ErrorMessage } from '@hookform/error-message';
import { ErrorDisplay } from '../ErrorDisplay/ErrorDisplay';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

import styles from './ReactHookFormInput.module.scss';

type InputProps = {
  isRequired: boolean;
  register: UseFormRegister<FieldValues>;
  id: string;
  type: 'password' | 'email' | 'text';
  placeholder: string;
  label: string;
  name: string;
  errors: FieldErrors<FieldValues>;
  ariaError: string;
};

export const ReactHookFormInput = ({
  id,
  isRequired,
  label,
  name,
  placeholder,
  register,
  type,
  errors,
  ariaError
}: InputProps) => {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.label} htmlFor={id}>
        {`${label}:`}
      </label>
      <input
        {...register(name, { required: isRequired })}
        className={styles.input}
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        aria-invalid="true"
        aria-errormessage={ariaError}
        required
      />
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => <ErrorDisplay ariaId={ariaError} errorMessage={message} />}
      />
    </div>
  );
};
