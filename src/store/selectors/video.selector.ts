import { createSelector } from '@reduxjs/toolkit';
import { State } from '~store/store';

export const findVideo = createSelector(
  [
    (state: State) => {
      return state.videos;
    },
    (state: State, videoId: number) => {
      return videoId;
    },
  ],
  (videos, videoId) => {
    return videos.filter((video) => {
      return video.id === videoId;
    })[0];
  },
);
