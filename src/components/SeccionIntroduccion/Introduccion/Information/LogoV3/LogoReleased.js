import LogoMayor from "./LogoMayor";
import {makeStyles} from "@material-ui/core";
import LogoMenor from "./LogoMenor";
import theme from "../../../../../styles/theme";

const useStyles = makeStyles((theme)=>({
  root: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "flex-start",
    flexDirection: "column",
    width: "16px",
    height: "16px",

  },
  LV3_1: {
    width: "6px",
    height: "6px",
    position: "absolute",
    top: "12px",
    left: "26px",
    background: "rgba(114, 46, 209, 1)",
  },
  LV3: {
    width: "12px",
    height: "12px",
    position: "absolute",
    top: "16px",
    left: "16px",
    background: "rgba(114, 46, 209, 1)",
  },

}));

const LogoReleased = () =>{
  const classes = useStyles(theme)
  return(
    <div className={classes.root}>
      <LogoMayor className={classes.LV3} size={12} />
        <LogoMenor className={classes.LV3_1} size={6} />
    </div>
  )
}

export default LogoReleased
