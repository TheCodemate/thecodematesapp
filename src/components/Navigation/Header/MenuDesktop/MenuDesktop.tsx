import { Button } from '@components/Button/Button';
import styles from './MenuDesktop.module.scss';

type Props = {
  toggleModalHandler: () => void;
};

export const MenuDesktop = ({ toggleModalHandler }: Props) => (
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
);
