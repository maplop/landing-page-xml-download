import {makeStyles} from "@material-ui/core";
import LogoReleased from "./LogoReleased";
import theme from "../../../../../styles/theme";

const useStyles = makeStyles(()=> ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "160px",
    height: "40px",
    padding: "8px 16px 8px 16px",
    gap: "12px",
    borderRadius: "20px",
    background: "rgba(247, 241, 255, 1)",

  },
  h3: {
    width: "100px",
    height: "24px",
    fontFamily: "Metropolis",
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: "24px",
    textAlign: "left",
    color: "rgba(114, 46, 209, 1)",
  }
}));


const LogoVersion = () =>{
  const classes = useStyles(theme)
  return(
    <div className={classes.root}>
      <LogoReleased />
      <h3 className={classes.h3}>v3.1 released</h3>
    </div>
  )
}

export default LogoVersion;

