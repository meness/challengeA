import { createSelector } from '@reduxjs/toolkit';
import { State } from '~store/store';

export const commentsForVideo = createSelector(
  [
    (state: State) => {
      return state.comments;
    },
    (state: State, videoId: number) => {
      return videoId;
    },
  ],
  (comments, videoId) => {
    return comments.filter((comment) => {
      return comment.videoId === videoId;
    });
  },
);
