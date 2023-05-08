import { Button } from '@components/Button/Button';
import styles from './MenuMobile.module.scss';
import { useState } from 'react';
import { NavLinkWrapper } from '@/components/NavLinkWrapper/NavLinkWrapper';

type Props = {
  openRegisterFormHandler: () => void;
  closeRegisterFormHandler: () => void;
};

export const MenuMobile = ({ openRegisterFormHandler, closeRegisterFormHandler }: Props) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const onClickHandler = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  return (
    <>
      <label className={styles.hamburgerMenuButton}>
        <input onClick={onClickHandler} type="checkbox" />
      </label>
      <aside className={`${styles.sidebar} ${isSidebarOpen ? styles.active : ''}`}>
        <nav className={styles.navigationContainer}>
          <ul className={styles.linksList}>
            <li className={styles.linksListItem}>
              {/* needs to be changed when react-router-dom will be implemented */}
              <p>About</p>
            </li>
            <li className={styles.linksListItem}>
              {/* needs to be changed when react-router-dom will be implemented */}
              <p>Blog</p>
            </li>
          </ul>
          <div className={styles.buttonContainer}>
            <Button onClick={closeRegisterFormHandler} variant={'action'}>
              Log in
            </Button>
            <Button onClick={openRegisterFormHandler}>Sign up</Button>
            <NavLinkWrapper type="cta" to={'adopt/add-new'}>
              <span>Add Announcement</span>
            </NavLinkWrapper>
          </div>
        </nav>
        <div className={styles.sidebarFooter}>
          <NavLinkWrapper to={'/terms-of-service'}>
            <span className={styles.footerLink}>Terms of service</span>
          </NavLinkWrapper>{' '}
          <NavLinkWrapper to={'/privacy-policy'}>
            <span className={styles.footerLink}>Privacy Policy</span>
          </NavLinkWrapper>{' '}
          <a className={styles.footerLink} href="https://www.google.pl">
            Contact
          </a>
        </div>
      </aside>
    </>
  );
};
