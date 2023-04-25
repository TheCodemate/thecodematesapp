import { PetsType } from '@/types';

import styles from './SearchCardList.module.scss';
import { SearchCard } from '../SearchCard/SearchCard';

type Props = {
  data: PetsType;
};

export const SearchCardsList = ({ data }: Props) => {
  return (
    <ul className={styles.list}>
      {data.map((el) => {
        return <SearchCard key={el.id} pet={el} />;
      })}
    </ul>
  );
};
