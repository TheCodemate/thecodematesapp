import { PetsType } from '@/types';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAnnouncements = createAsyncThunk<PetsType, void, { rejectValue: string }>(
  'announcements/fetchAnnouncements',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('./pets.json', {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(
          `Response status is not "ok" while fetching announcements with fetchAnnouncements. Status code: ${response.status}`
        );
      }
      const data = await response.json();
      return data;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);
