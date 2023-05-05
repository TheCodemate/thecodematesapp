import React, { SyntheticEvent, useState } from 'react';

import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import styles from './LoveButton.module.scss';

type Props = {
  isFavorite?: boolean;
};
export const LoveButton = ({ isFavorite = false }: Props) => {
  const [isLiked, setIsLiked] = useState(isFavorite);

  const handleOnClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLiked((prev) => !prev);
  };
  return (
    <div className={styles.loveButtonContainer}>
      <button
        onClick={handleOnClick}
        className={`${styles.loveButton} ${isLiked ? styles.isLiked : ''}`}>
        <div className={styles.front}>
          <FavoriteBorderIcon className={`${styles.border}`} />
        </div>
        <div className={styles.back}>
          <FavoriteIcon className={`${styles.filled}`} />
        </div>
      </button>
    </div>
  );
};
