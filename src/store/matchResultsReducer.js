import { createSlice } from "@reduxjs/toolkit";

export const matchResultsReducer = createSlice({
  name: "MatchResults",
  initialState: {
    matchCount: 0,
    compCount: 0,
    playerCount: { player: 0, comp: 0 },
  },
  reducers: {
    setCompCount: (state, data) => {
      state.cardDeck = state.cardDeck + 1;
    },
    setPlayerCount: (state, data) => {
      state.playerCard = state.playerCard + 1;
    },
    setGameCount: (state, data) => {
      state.playerCard = data.payload;
    },
  },
});

export const { setCompCount, setPlayerCount, setGameCount } =
  matchResultsReducer.actions;

export default matchResultsReducer.reducer;
