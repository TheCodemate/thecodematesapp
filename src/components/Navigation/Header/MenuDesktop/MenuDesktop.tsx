import { Button } from '@components/Button/Button';
import styles from './MenuDesktop.module.scss';

type Props = {
  openRegisterFormHandler: () => void;
  closeRegisterFormHandler: () => void;
  toggleModalHandler: () => void;
};

export const MenuDesktop = ({
  openRegisterFormHandler,
  closeRegisterFormHandler,
  toggleModalHandler
}: Props) => {
  const handleLoginOnClick = () => {
    toggleModalHandler();
    closeRegisterFormHandler();
  };

  const handleRegisterOnClick = () => {
    toggleModalHandler();
    openRegisterFormHandler();
  };
  return (
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
        <Button onClick={handleLoginOnClick} variant={'action'}>
          Log in
        </Button>
        <Button onClick={handleRegisterOnClick}>Sign up</Button>
      </div>
    </nav>
  );
};
