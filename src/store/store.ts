import { configureStore } from '@reduxjs/toolkit';
import { commentsReducer, videosReducer } from './reducers';

const store = configureStore({
  reducer: {
    comments: commentsReducer,
    videos: videosReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware();
  },
});

export default store;
export type State = ReturnType<typeof store.getState>;
