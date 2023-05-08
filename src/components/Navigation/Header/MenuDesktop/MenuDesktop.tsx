import { Button } from '@components/Button/Button';
import { NavLinkWrapper } from '@/components/NavLinkWrapper/NavLinkWrapper';

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
        <Button onClick={handleLoginOnClick}>Log in</Button>
        <Button onClick={handleRegisterOnClick}>Sign up</Button>
        <NavLinkWrapper type="cta" to={'adopt/add-new'}>
          <span>Add Announcement</span>
        </NavLinkWrapper>
      </div>
    </nav>
  );
};
