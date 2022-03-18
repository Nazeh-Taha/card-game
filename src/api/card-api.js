import { endPointCallCreator } from "../utils";

export const shuffleCards = () =>
  endPointCallCreator({
    url: `/api/deck/new/shuffle/?deck_count=1`,
  });

  export const drawCards = (deckId) =>
  endPointCallCreator({
    url: `/api/deck/${deckId}/draw/?count=2`,
  });