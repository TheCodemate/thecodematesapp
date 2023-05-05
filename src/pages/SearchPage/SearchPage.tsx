import { usePets } from '@/utils/usePets';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import styles from './SearchPage.module.scss';
import { SearchCardsList } from '@/components/SearchCardsList/SearchCardsList';

export const SearchPage = () => {
  const { pets, isLoading, error } = usePets();

  if (isLoading) {
    return (
      <Box>
        <CircularProgress />
      </Box>
    );
  }

  if (!pets) {
    return <h2>{error}</h2>;
  }

  return (
    <div className={styles.main}>
      <h1 className={styles.heading}>Scroll down to find you&apos;re loved one!</h1>
      <SearchCardsList data={pets} />
    </div>
  );
};
