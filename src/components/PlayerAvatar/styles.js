import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  playerAvatarContainer: {
    width: 125,
    background: "#ffffff73",
    border: "1px solid #fff",
    display: "flex",
    padding: 5,
    borderRadius: 15,
  },
  avatarContainer: {
    "& img": {
      width: 50,
      height: 50,
    },
  },
  scoreContainer: {
    padding: "5px 10px",
    "& h5": {
      margin: 0,
    },
    "& h6": {
      margin: 0,
    },
  },
}));
