import React from 'react';
import { useStyles } from "./styles";
import compAvatar from "../../assets/images/comp-avatar.png";
import playerAvatar from "../../assets/images/player-avatar.png";

export default function PlayerAvatar(props){
    const classes = useStyles();
    const {type, score} = props;

    return (
        <div className={classes.playerAvatarContainer}>
            <div className={classes.avatarContainer}><img src={type === "player" ? playerAvatar : compAvatar} alt="Avatar"/></div>
            <div className={classes.scoreContainer}>
                <h5>{type === "player" ? "player" : "Computer"}</h5>
                <h6>{"Score: " + score }</h6>
            </div>
        </div>
    );
};
