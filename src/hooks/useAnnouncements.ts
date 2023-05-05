import { getAnnouncements } from '@/store/features/announcements/announcements.selectors';
import { fetchAnnouncements } from '@/store/features/announcements/announcements.thunks';
import { useAppDispatch } from '@/store/store';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export const useAnnouncements = () => {
  const dispatch = useAppDispatch();
  const { announcements, isLoading, errorMessage } = useSelector(getAnnouncements);

  useEffect(() => {
    dispatch(fetchAnnouncements());
  }, []);

  return {
    announcements,
    isLoading,
    errorMessage
  };
};
