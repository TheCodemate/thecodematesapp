import styles from './ErrorDisplay.module.scss';

type Props = {
  errorMessage: string;
};

export const ErrorDisplay = ({ errorMessage }: Props) => {
  return <span className={styles.errorMessage}>{errorMessage}</span>;
};
