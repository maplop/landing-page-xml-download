import theme from "../../../../styles/theme";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme)=>({
  root:{
    display: "flex",
    flexDirection:"column",
    justifyContent:"center",
    width: "672px",
    height: "88px",
    gap: "24px",
    opacity: 1,

},h1:{
    width: "372px",
    height: "40px",
    gap: "0px",
    opacity: 1,
    fontFamily: "Metropolis",
    fontSize: "32px",
    fontWeight: 700,
    lineHeight:  "40px",
    textAlign: "center",
    color: "rgba(22, 6, 55, 1)",

},h3:{
    width: "672px",
    height: "24px",
    gap: "0px",
    opacity: 1,
    fontFamily: "Metropolis",
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: "24px",
    textAlign: "center",
    color: "rgba(137, 137, 162, 1)",
}
}))

const Question = () => {
  const classes = useStyles(theme)
  return (
    <div className={classes.root}>
      <h1 className={classes.h1}>¿No te has convencido?</h1>
      <h3 className={classes.h3}>Descubre el Poder de MiAdminXML: Tu Aliado en la Contabilidad</h3>
    </div>
  );
};

export default Question;