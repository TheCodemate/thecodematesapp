import { Logo } from './Logo/Logo';
import { MenuDesktop } from './MenuDesktop/MenuDesktop';
import { MenuMobile } from './MenuMobile/MenuMobile';
import styles from './Header.module.scss';

type Props = {
  toggleModalHandler: () => void;
};

export const Header = ({ toggleModalHandler }: Props) => {
  return (
    <div className={styles.container}>
      <Logo />
      <MenuDesktop toggleModalHandler={toggleModalHandler} />
      <MenuMobile toggleModalHandler={toggleModalHandler} />
    </div>
  );
};
