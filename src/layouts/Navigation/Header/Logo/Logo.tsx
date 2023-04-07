import styles from './Logo.module.scss';

export const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <p className={styles.logo}>TheCodemate&apos;s app</p>
    </div>
  );
};
