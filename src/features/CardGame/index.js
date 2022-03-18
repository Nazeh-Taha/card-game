import React from "react";
import { useStyles } from "./styles";
import cardDeck from "../../assets/images/cards-deck.png";

export default function CardGame() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.cardTable}>
          <div className={classes.playersField}>
              <div className={classes.cardShowContainer}></div>
          </div>
          <div className={classes.cardField}>
              <div className={classes.cardDeckContainer}>
              <img src={cardDeck} alt="cards deck"  draggable/>
              <h5>52 - cards left</h5>
              </div>
          </div>
          <div className={classes.playersField} style={{alignItems: "flex-end"}}>
          <div className={classes.cardShowContainer}></div>
          </div>
      </div>
    </div>
  );
}
