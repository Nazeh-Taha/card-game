import { createSlice } from "@reduxjs/toolkit";

export const cardReducer = createSlice({
  name: "cards",
  initialState: {
    remainingCards: 0,
    deckId: null,
    compCard: null,
    playerCard: null,
  },
  reducers: {
    setCardDeck: (state, data) => {
      state.remainingCards = data.payload.remaining;
      state.deckId = data.payload.deck_id;
    },
    setPlayersCard: (state, data) => {
      state.playerCard = data.payload.cards[0];
      state.compCard = data.payload.cards[1];
      state.remainingCards = data.payload.remaining;
    },
    setResetPlayersCard: (state) => {
      state.playerCard = null;
      state.compCard = null;
    },
  },
});

export const { setCardDeck, setPlayersCard, setResetPlayersCard } = cardReducer.actions;

export default cardReducer.reducer;
