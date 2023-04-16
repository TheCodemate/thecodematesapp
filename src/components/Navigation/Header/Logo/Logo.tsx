import styles from './Logo.module.scss';
import { NavLinkWrapper } from '@/components/NavLinkWrapper/NavLinkWrapper';

export const Logo = () => {
  return (
    <NavLinkWrapper to={'/'}>
      <div className={styles.logoContainer}>
        <p className={styles.logo}>TheCodemate&apos;s app</p>
      </div>
    </NavLinkWrapper>
  );
};
