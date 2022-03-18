import { createSlice } from "@reduxjs/toolkit";

export const cardReducer = createSlice({
  name: "Cards",
  initialState: {
    cardDeck: null,
    compCard: null,
    playerCard: null,
  },
  reducers: {
    setCardDeck: (state, data) => {
      state.cardDeck = data.payload;
    },
    setCompCard: (state, data) => {
      state.years = data.payload;
    },
    setPlayerCard: (state, data) => {
      state.playerCard = data.payload;
    }
  },
});

export const { setCardDeck, setCompCard, setPlayerCard } = cardReducer.actions;

export default cardReducer.reducer;