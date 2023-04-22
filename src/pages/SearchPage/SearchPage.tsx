import { SearchCard } from '@/components/SearchCard/SearchCard';
import dog from '../../../assets/images/dog-small.jpg';

import styles from './SearchPage.module.scss';

export const SearchPage = () => {
  console.log(<SearchCard bgUrl={'../../../assets/images/dog-small.jpg'} />);

  return (
    <div className={styles.main}>
      <SearchCard bgUrl={'../../../assets/images/dog-small.jpg'} />
      <SearchCard bgUrl={'../../../assets/images/alvan-nee-8g0D8ZfFXyA-unsplash.jpg'} />
      <SearchCard bgUrl={'../../../assets/images/alvan-nee-eoqnr8ikwFE-unsplash (1).jpg'} />
      <SearchCard bgUrl={'../../../assets/images/karsten-winegeart-oU6KZTXhuvk-unsplash.jpg'} />
      <SearchCard bgUrl={'../../../assets/images/dog-small.jpg'} />
      <SearchCard bgUrl={'../../../assets/images/dog-small.jpg'} />
      <SearchCard bgUrl={'../../../assets/images/dog-small.jpg'} />
      <SearchCard bgUrl={'../../../assets/images/dog-small.jpg'} />
      <SearchCard bgUrl={'../../../assets/images/dog-small.jpg'} />
      <SearchCard bgUrl={'../../../assets/images/dog-small.jpg'} />
      <SearchCard bgUrl={'../../../assets/images/dog-small.jpg'} />
      <SearchCard bgUrl={'../../../assets/images/dog-small.jpg'} />
      <SearchCard bgUrl={'../../../assets/images/dog-small.jpg'} />
      <SearchCard bgUrl={'../../../assets/images/dog-small.jpg'} />
      <SearchCard bgUrl={'../../../assets/images/dog-small.jpg'} />
      <SearchCard bgUrl={'../../../assets/images/dog-small.jpg'} />
      <SearchCard bgUrl={'../../../assets/images/dog-small.jpg'} />
    </div>
  );
};
