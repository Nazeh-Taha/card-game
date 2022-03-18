import { endPointCallCreator } from "../utils";

export const shuffleCards = () =>
    endPointCallCreator({
      url: `/api/deck/new/shuffle/?deck_count=1`,
    });