import { Logo } from './Logo/Logo';
import { MenuDesktop } from './MenuDesktop/MenuDesktop';
import { MenuMobile } from './MenuMobile/MenuMobile';
import styles from './Header.module.scss';

type Props = {
  openRegisterFormHandler: () => void;
  closeRegisterFormHandler: () => void;
  toggleModalHandler: () => void;
};

export const Header = ({ ...props }: Props) => {
  return (
    <div className={styles.container}>
      <Logo />
      <MenuDesktop {...props} />
      <MenuMobile {...props} />
    </div>
  );
};
