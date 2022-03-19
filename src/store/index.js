import { configureStore } from '@reduxjs/toolkit';
import cardReducer from './cardReducer';
import gameResultsReducer from './gameResultsReducer';

export const store = configureStore({
  reducer: {
    cards: cardReducer,
    gameResults: gameResultsReducer,
  },
});
