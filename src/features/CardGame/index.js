import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useStyles } from "./styles";
import cardDeck from "../../assets/images/cards-deck.png";
import { shuffleCards, drawCards } from "../../api/card-api";
import { setCardDeck, setPlayersCard } from "../../store/cardReducer";
import PlayerAvatar from "../../components/PlayerAvatar";

export default function CardGame() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { remainingCards, deckId } = useSelector((state) => state.cards);
  const handleStartGame = () => {
    shuffleCards().then((data) => {
      dispatch(setCardDeck(data.payload));
    });
  };
  const handleDrawCard = (e) => {
    e.preventDefault();
    drawCards(deckId).then((data) => {
      dispatch(setPlayersCard(data.payload));
    });
  };
  function handleDragOver(e) {
    e.preventDefault();
  }
  return (
    <div className={classes.container}>
      <div className={classes.cardTable}>
        {/* ----------------------computer field section---------------------------- */}
        <div className={classes.playersField}>
          <div className={classes.compScoreContainer}>
            <PlayerAvatar type="comp" score={0} />
          </div>
          <div className={classes.cardShowContainer}></div>
        </div>
        {/* ----------------------Card Deck section---------------------------- */}
        <div className={classes.cardField}>
          <div className={classes.cardDeckContainer}>
            {remainingCards > 0 ? (
              <img src={cardDeck} alt="cards deck" draggable />
            ) : (
              <div className={classes.cardShowContainer}/>
            )}
            <h5>{remainingCards} - cards left</h5>
          </div>
        </div>
        {/* ----------------------Player field section---------------------------- */}
        <div
          className={classes.playersField}
          style={{ alignItems: "flex-end" }}
        >
          <div className={classes.playerScoreContainer}>
            <PlayerAvatar type="player" score={0} />
          </div>

          <div
            className={classes.cardShowContainer}
            onDrop={handleDrawCard}
            onDragOver={handleDragOver}
          ></div>
        </div>
      </div>
      <button type="button" onClick={handleStartGame}>
        start the game
      </button>
    </div>
  );
}
