import { NavLink } from 'react-router-dom';
import { LoveButton } from '../LoveButton/LoveButton';

import { PetType } from '@/types';

import styles from './SearchCard.module.scss';

type Props = {
  pet: PetType;
};

export const SearchCard = ({ pet }: Props) => {
  return (
    <NavLink className={styles.navLink} to={`/adopt/${pet.id}`}>
      <div style={{ backgroundImage: `url(${pet.imageUrl[0]})` }} className={styles.card}>
        <div className={styles.cardHeader}>
          <p className={styles.dogName}>{pet.petName}</p>
          <LoveButton />
        </div>
      </div>
    </NavLink>
  );
};
