import { Button } from 'components/Button/Button';
import styles from './Header.module.scss';
import { config } from './config';

export const Header = () => {
  const links = config.map((link) => {
    return (
      <li key={link.name + link.path}>
        <p>{link.name}</p>
      </li>
    );
  });

  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <p className={styles.logo}>TheCodemate's app</p>
      </div>
      <nav className={styles.navigationContainer}>
        <ul className={styles.links}>{links}</ul>
        <div className={styles.buttonContainer}>
          <Button variant={'action'}>Log in</Button>
          <Button>Sign up</Button>
        </div>
      </nav>
    </div>
  );
};
