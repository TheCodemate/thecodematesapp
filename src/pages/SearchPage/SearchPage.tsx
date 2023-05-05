import { useAnnouncements } from '@/hooks/useAnnouncements';
import { SearchCardsList } from '@/components/SearchCardsList/SearchCardsList';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import styles from './SearchPage.module.scss';

export const SearchPage = () => {
  const { announcements, isLoading, errorMessage } = useAnnouncements();

  if (isLoading) {
    return (
      <Box>
        <CircularProgress />
      </Box>
    );
  }

  if (errorMessage) {
    return <h2>{errorMessage}</h2>;
  }

  return (
    <div className={styles.main}>
      <h1 className={styles.heading}>Scroll down to find you&apos;re loved one!</h1>
      <SearchCardsList data={announcements} />
    </div>
  );
};
