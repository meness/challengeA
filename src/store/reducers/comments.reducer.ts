import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CommentEntity } from '~entities';

const initialState: CommentEntity[] = [];

const slice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    addCommentAction: (state, { payload }: PayloadAction<CommentEntity>) => {
      payload.id = crypto.randomUUID();
      return [
        ...state,
        payload,
      ];
    },
  },
});

export const commentsReducer = slice.reducer;
export const { addCommentAction } = slice.actions;
