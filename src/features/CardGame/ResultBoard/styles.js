import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
  },
  resultBoardContainer: {
    background: "#ffffff73",
    border: "1px solid #fff",
    padding: 5,
    borderRadius: 15,
    "& h5": {
      textAlign: "center",
      width: "100%",
      margin: 0,
    },
    "& h4": {
      textAlign: "center",
      width: "100%",
      paddingBottom: 5,
      borderBottom: "1px solid #fff",
      margin: 0,
      color: "#FFFFFF",
    },
  },
  resultBoard: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
  },
  button: {
    background: "#1f8dcd",
    border: "1px solid #fff",
    color: "#fff",
    padding: 5,
    borderRadius: 15,
    cursor: "pointer",
    "&:hover": {
        background: "#3ea868",
        transition: "all 0.3s"
    }
  },
}));
