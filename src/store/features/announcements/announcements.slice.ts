import { PetsType } from '@/types';
import { createSlice } from '@reduxjs/toolkit';
import { fetchAnnouncements } from './announcements.thunks';

type InitialStateType = {
  announcements: PetsType;
  errorMessage: string | undefined;
  isLoading: boolean;
};

const initialState: InitialStateType = {
  announcements: [],
  errorMessage: '',
  isLoading: false
};

const announcementsSlice = createSlice({
  name: 'announcements',
  initialState: initialState,
  reducers: {
    addNewAnnouncement: (state, action) => {
      state.announcements.push(action.payload);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAnnouncements.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAnnouncements.fulfilled, (state, action) => {
      state.announcements = [...action.payload];
      state.isLoading = false;
    });
    builder.addCase(fetchAnnouncements.rejected, (state, action) => {
      state.errorMessage = action.payload;
      state.isLoading = false;
    });
  }
});

export const { addNewAnnouncement } = announcementsSlice.actions;
export default announcementsSlice;
