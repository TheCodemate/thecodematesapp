import { Button } from 'components/Button/Button';
import styles from './MenuMobile.module.scss';

type Props = {
  toggleModalHandler: () => void;
};

export const MenuMobile = ({ toggleModalHandler }: Props) => (
  <>
    <label className={styles.hamburgerMenuButton}>
      <input type="checkbox" />
    </label>
    <aside className={styles.sidebar}>
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
          <Button onClick={toggleModalHandler} variant={'action'}>
            Log in
          </Button>
          <Button onClick={toggleModalHandler}>Sign up</Button>
        </div>
      </nav>
      <div className={styles.sidebarFooter}>
        <a className={styles.footerLink} href="https://www.google.pl">
          Terms of Service
        </a>
        <a className={styles.footerLink} href="https://www.google.pl">
          Privacy Policy
        </a>
        <a className={styles.footerLink} href="https://www.google.pl">
          Contact
        </a>
      </div>
    </aside>
  </>
);
