import styles from './Avatar.module.scss';

type Props = {
  avatarUrl: string;
};

export const Avatar = ({ avatarUrl }: Props) => {
  return (
    <div className={styles.avatarContainer}>
      <img className={styles.avatarImg} src={avatarUrl} alt="" />
    </div>
  );
};
