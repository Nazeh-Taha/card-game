import { createSlice } from "@reduxjs/toolkit";

export const matchResultsReducer = createSlice({
  name: "matchResults",
  initialState: {
    matchCount: { player: 0, comp: 0 },
    compCount: 0,
    playerCount: 0,
  },
  reducers: {
    setCompCount: (state) => {
      state.compCount = state.compCount + 1;
    },
    setPlayerCount: (state) => {
      state.playerCount = state.playerCount + 1;
    },
    setGameCount: (state, data) => {
      state.matchCount = data.payload;
    },
  },
});

export const { setCompCount, setPlayerCount, setGameCount } =
  matchResultsReducer.actions;

export default matchResultsReducer.reducer;
