import { ComponentProps, forwardRef } from 'react';
import { ErrorMessage } from '@hookform/error-message';
import { ErrorDisplay } from '../ErrorDisplay/ErrorDisplay';

import styles from './CustomHookFormInput.module.scss';

type Props = { name: string; label: string } & ComponentProps<'input'>;

export const CustomHookFormInput = forwardRef<HTMLInputElement, Props>(
  ({ placeholder, id, label, type = 'text', ...props }, ref) => {
    return (
      <div className={styles.inputContainer}>
        <label className={styles.label} htmlFor={id}>
          {`${label}:`}
        </label>
        <input
          id={id}
          className={styles.input}
          type={type}
          placeholder={placeholder}
          ref={ref}
          {...props}
        />
        <ErrorMessage
          name={props.name}
          render={({ message }) => <ErrorDisplay errorMessage={message} />}
        />
      </div>
    );
  }
);

CustomHookFormInput.displayName = 'CustomHookFormInput';
