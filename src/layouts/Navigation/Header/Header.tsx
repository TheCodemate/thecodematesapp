import styles from './Header.module.scss';
import { Logo } from './Logo/Logo';
import { MenuDesktop } from './MenuDesktop/MenuDesktop';
import { MenuMobile } from './MenuMobile/MenuMobile';

type HeaderProps = {
  toggleModalHandler: () => void;
};
export const Header: React.FC<HeaderProps> = ({ toggleModalHandler }) => {
  return (
    <div className={styles.container}>
      <Logo />
      <MenuDesktop toggleModalHandler={toggleModalHandler} />
      <MenuMobile toggleModalHandler={toggleModalHandler} />
    </div>
  );
};
