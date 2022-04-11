import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { VideoEntity } from '~entities';

const initialState = [
  { id: 1, path: '/assets/videos/1.mp4' },
  { id: 2, path: '/assets/videos/1.mp4', isCommentsDisabled: true },
  { id: 3, path: '/assets/videos/1.mp4' },
  { id: 4, path: '/assets/videos/1.mp4' },
  { id: 5, path: '/assets/videos/1.mp4' },
] as VideoEntity[];

const slice = createSlice({
  name: 'videos',
  initialState,
  reducers: {
    toggleCommentsDisabledAction: (
      state,
      { payload }: PayloadAction<{ videoId: number; isCommentsDisabled: boolean }>,
    ) => {
      state.map((video) => {
        if (video.id === payload.videoId) {
          video.isCommentsDisabled = payload.isCommentsDisabled;
        }
        return video;
      });
    },
  },
});

export const videosReducer = slice.reducer;
export const { toggleCommentsDisabledAction } = slice.actions;
