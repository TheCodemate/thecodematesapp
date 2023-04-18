import styles from './ErrorDisplay.module.scss';

type Props = {
  errorMessage: string;
  ariaId: string;
};

export const ErrorDisplay = ({ errorMessage, ariaId }: Props) => {
  return (
    <span id={ariaId} className={styles.errorMessage}>
      {errorMessage}
    </span>
  );
};
