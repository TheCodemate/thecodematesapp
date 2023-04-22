import { NavLink } from 'react-router-dom';
import styles from './SearchCard.module.scss';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

type Props = {
  bgUrl: string;
};

export const SearchCard = ({ bgUrl }: Props) => {
  return (
    <NavLink className={styles.navLink} to={'/adopt/1'}>
      <div style={{ backgroundImage: bgUrl }} className={styles.card}>
        <div className={styles.cardHeader}>
          <p className={styles.dogName}>Dog Name</p>
          <FavoriteBorderIcon fontSize="small" />
        </div>
      </div>
    </NavLink>
  );
};
