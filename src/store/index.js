import { configureStore } from '@reduxjs/toolkit';
import cardReducer from './cardReducer';
import matchResultsReducer from './matchResultsReducer';

export const store = configureStore({
  reducer: {
    cards: cardReducer,
    matchResults: matchResultsReducer,
  },
});
