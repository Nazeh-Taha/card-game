import React, { useCallback, useEffect } from "react";
import { useStyles } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import {
  setRoundCompCount,
  setRoundPlayerCount,
} from "../../../store/gameResultsReducer";
import { setResetPlayersCard } from "../../../store/cardReducer";

export default function ResultBoard(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { handleStartGame, remainingCards } = props;
  const { playerCount, compCount, roundCompCount, roundPlayerCount } =
    useSelector((state) => state.gameResults);

  const handleCountGameResult = useCallback(() => {
    // the round is finished and get the round results
    if (remainingCards === 0 && (playerCount !== 0 || compCount !== 0)) {
      if (playerCount > compCount) {
        dispatch(setRoundPlayerCount());
      } else if (playerCount < compCount) {
        dispatch(setRoundCompCount());
      }
      dispatch(setResetPlayersCard()) // reset the players cards
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [remainingCards]);
  
  useEffect(() => {
    handleCountGameResult();
  }, [handleCountGameResult]);

  return (
    <div className={classes.container}>
      <div className={classes.resultBoardContainer}>
        <h4>Result Board</h4>
        <div className={classes.resultBoard}>
          <h5>Computer</h5>
          <h5>Player</h5>
          <h5>{roundCompCount}</h5>
          <h5>{roundPlayerCount}</h5>
        </div>
      </div>
      {remainingCards === 0 && (
        <button
          type="button"
          onClick={handleStartGame}
          className={classes.button}
        >
          let's start
        </button>
      )}
    </div>
  );
}
