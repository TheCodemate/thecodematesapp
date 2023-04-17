import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';

type Props = {
  error: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
};

export const ErrorDisplay = ({ error }: Props) => {
  return error ? <p>{error.message?.toString()}</p> : null;
};
