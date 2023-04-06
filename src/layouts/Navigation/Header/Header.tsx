import { Button } from 'components/Button/Button';
import styles from './Header.module.scss';

type HeaderProps = {
  toggleModalHandler: () => void;
};
export const Header: React.FC<HeaderProps> = ({ toggleModalHandler }) => {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <p className={styles.logo}>TheCodemate&apos;s app</p>
      </div>

      <nav className={styles.navigationContainer}>
        <ul className={styles.links}>
          <li>
            {/* needs to be changed when react-router-dom will be implemented */}
            <p>About</p>
          </li>
          <li>
            {/* needs to be changed when react-router-dom will be implemented */}
            <p>Blog</p>
          </li>
        </ul>
        <div className={styles.buttonContainer}>
          <Button onClick={toggleModalHandler} variant={'action'}>
            Log in
          </Button>
          <Button onClick={toggleModalHandler}>Sign up</Button>
        </div>
      </nav>

      <label className={styles.hamburgerMenuButton}>
        <input className={styles.lineMiddle} type="checkbox" />
      </label>
    </div>
  );
};
