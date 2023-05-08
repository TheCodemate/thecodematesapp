import { ErrorMessage } from '@hookform/error-message';
import * as Form from '@radix-ui/react-form';
import { ComponentProps } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { ErrorDisplay } from '../Forms/ErrorDisplay/ErrorDisplay';

import styles from './CustomInput.module.scss';

type CustomInputProps = { name: string; label: string } & ComponentProps<'input'>;

export const CustomInput = ({
  placeholder,
  className = '',
  type = 'text',
  ...props
}: CustomInputProps) => {
  const methods = useFormContext();
  const { control } = methods;

  return (
    <Controller
      control={control}
      name={props.name}
      render={({ field: { onChange, name, value } }) => {
        return (
          <Form.Field className={`${styles.formField} ${className}`} name={name}>
            <Form.Label className={styles.label}>{props.label} </Form.Label>
            <Form.Control
              value={value}
              onChange={(event) =>
                onChange(type === 'number' ? +event.target.value : event.target.value)
              }
              placeholder={placeholder}
              className={`${styles.input} ${className}`}
              type={type}
              asChild>
              <input />
            </Form.Control>
            <Form.Message className={styles.message}>
              <ErrorMessage
                name={name}
                render={({ message }) => <ErrorDisplay errorMessage={message} />}
              />
            </Form.Message>
          </Form.Field>
        );
      }}
    />
  );
};

type CustomSelectInputProps = {
  name: string;
  label: string;
  options: string[];
  defaultValue?: 'male' | 'female';
} & ComponentProps<'select'>;

export const CustomSelectInput = ({
  options,
  label,
  defaultValue = 'male',
  placeholder,
  name,
  ...props
}: CustomSelectInputProps) => {
  const methods = useFormContext();
  const { control } = methods;

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange } }) => {
        return (
          <Form.Field className={styles.selectFormField} name="characteristics.sex">
            <Form.Label className={styles.label}>{`${label}: `}</Form.Label>
            <Form.Control onChange={onChange} asChild>
              <select className={styles.input}>
                {options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </Form.Control>
          </Form.Field>
        );
      }}
    />
  );
};

type CustomTextareaProps = { name: string; label: string } & ComponentProps<'textarea'>;

export const CustomTextarea = ({ placeholder, className = '', ...props }: CustomTextareaProps) => {
  const methods = useFormContext();
  const { control } = methods;
  return (
    <Controller
      control={control}
      name={props.name}
      render={({ field: { onChange, name } }) => {
        return (
          <Form.Field className={`${styles.formField} ${className}`} name={name}>
            <Form.Label className={styles.label}>{props.label} </Form.Label>
            <Form.Control
              onChange={onChange}
              placeholder={placeholder}
              className={`${styles.input} ${className}`}
              asChild>
              <textarea />
            </Form.Control>
            <Form.Message className={styles.message}>
              <ErrorMessage
                name={name}
                render={({ message }) => <ErrorDisplay errorMessage={message} />}
              />
            </Form.Message>
          </Form.Field>
        );
      }}
    />
  );
};
