import styles from './Layout.module.scss';
import { ReactElement } from 'react';

type Props = {
  isFooterVisible: boolean;
  children: ReactElement | ReactElement[];
};

export const Layout = ({ children }: Props) => {
  return <div className={styles.container}>{children}</div>;
};
