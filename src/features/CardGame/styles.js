import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  container: {
    background: "#052a01",
    width: "100%",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  cardTable: {
    background:
      "radial-gradient(circle, rgba(66,171,108,1) 0%, rgba(20,127,62,1) 59%, rgba(15,115,55,1) 100%)",
    boxShadow: "-3px 2px 48px 5px rgba(0,0,0,0.59)",
    height: "90%",
    width: "60%",
    outline: "15px ridge #6a2b0e",
    borderRadius: 100,
    boxSizing: "border-box",
    padding: 20,
  },
  playersField: {
    width: "100%",
    height: "calc(100% / 3)",
    display: "flex",
    justifyContent: "center",
    position: "relative",
  },
  cardField: {
    width: "100%",
    height: "calc(100% / 3)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardDeckContainer: {
    height: "100%",
    cursor: "pointer",
    "& h5": {
      color: "#fff",
      textAlign: "center",
      margin: "10px 0",
    },
    "& img": {
      height: "100%",
      width: 120,
    },
  },
  cardShowContainer: {
    width: 120,
    border: "3px solid #fff",
    height: "100%",
    borderRadius: 30,
  },
  compScoreContainer: {
    position: "absolute",
    top: -40,
    right: -15,
  },
  playerScoreContainer: {
    position: "absolute",
    bottom: -40,
    left: -15,
  },
}));
