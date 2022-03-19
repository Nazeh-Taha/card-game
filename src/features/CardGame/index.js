import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useStyles } from "./styles";
import cardDeck from "../../assets/images/cards-deck.png";
import { shuffleCards, drawCards } from "../../api/card-api";
import { setCardDeck, setPlayersCard } from "../../store/cardReducer";
import PlayerAvatar from "../../components/PlayerAvatar";
import { setCompCount, setNoteMessage, setPlayerCount } from "../../store/gameResultsReducer";
import ResultBoard from "./ResultBoard";
import { formatCardsValue } from "../../utils";

export default function CardGame() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { remainingCards, deckId, compCard, playerCard } = useSelector(
    (state) => state.cards
  );
  const { playerCount, compCount, noteMessage } = useSelector((state) => state.gameResults);

  function handleStartGame(){
    shuffleCards().then((data) => {
      dispatch(setCardDeck(data.payload));
      handleShowMessage("Drag or click on cards deck for card draw")
    });
  }
  function handleShowMessage(message) {
    dispatch(setNoteMessage(message))
  }

  function handleDrawCard(){
    drawCards(deckId).then((data) => {
      dispatch(setPlayersCard(data.payload));
      handleFindTheWinner(data.payload.cards);
    });
  }

  function handleDragOver(e) {
    e.preventDefault();
  }

  function handleFindTheWinner(cards) {
    if (formatCardsValue(cards[0].value) > formatCardsValue(cards[1].value)) {
      dispatch(setPlayerCount());
      remainingCards > 2 && handleShowMessage("You win - Draw!");
    } else if (
      formatCardsValue(cards[0].value) < formatCardsValue(cards[1].value)
    ) {
      dispatch(setCompCount());
      remainingCards > 2 && handleShowMessage("Computer wins - Draw!");
    }else{
      remainingCards > 2 && handleShowMessage("Tie - Draw!");
    }
  }

  return (
    <div className={classes.container}>
      <div className={classes.cardTable}>
        {/* ----------------------computer field section---------------------------- */}
        <div className={classes.playersField}>
          <div className={classes.compScoreContainer}>
            <PlayerAvatar type="comp" score={compCount} />
          </div>
          <div className={classes.cardShowContainer}>
            {compCard && (
              <img
                src={compCard?.image}
                alt="card"
                width="100%"
                height="100%"
              />
            )}
          </div>
        </div>
        {/* ----------------------Card Deck section---------------------------- */}
        <div className={classes.cardField}>
          <ResultBoard handleStartGame={handleStartGame} remainingCards={remainingCards}/>
          <h3 style={{ textAlign: 'center', color:"#fff" }}>{noteMessage}</h3>
          <div className={classes.cardDeckContainer}>
            {remainingCards > 0 ? (
              <img src={cardDeck} alt="cards deck" draggable onClick={handleDrawCard}/>
            ) : (
              <div className={classes.cardShowContainer} />
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
            <PlayerAvatar type="player" score={playerCount} />
          </div>

          <div
            className={classes.cardShowContainer}
            onDrop={handleDrawCard}
            onDragOver={handleDragOver}
            onClick={handleDrawCard}
          >
            {playerCard && (
              <img
                src={playerCard?.image}
                alt="card"
                width="100%"
                height="100%"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
