import { createSlice } from "@reduxjs/toolkit";

export const gameResultsReducer = createSlice({
  name: "gameResults",
  initialState: {
    roundCompCount: 0,
    roundPlayerCount: 0,
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
    setRoundCompCount: (state) => {
      state.roundCompCount = state.roundCompCount +1;
      state.compCount = 0;
      state.playerCount = 0;
    },
    setRoundPlayerCount: (state) => {
      state.roundPlayerCount = state.roundPlayerCount +1;
      state.compCount = 0;
      state.playerCount = 0;
    },
  },
});

export const { setCompCount, setPlayerCount, setRoundPlayerCount, setRoundCompCount } =
  gameResultsReducer.actions;

export default gameResultsReducer.reducer;
