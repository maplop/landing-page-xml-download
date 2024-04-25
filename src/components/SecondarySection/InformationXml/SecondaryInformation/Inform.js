import {makeStyles} from "@material-ui/core";
import theme from "../../../../styles/theme";


const useStyles = makeStyles({
  root:{
    width: "472px",
    height: "64px",
    gap: "0px",
    opacity: 1,
},line1:{
    width: "472px",
    height: "32px",
    gap: "0px",
    opacity: 1,
},line2:{
    width: "323px",
    height: "32px",
    gap: "0px",
    opacity: 1,
},line1Black:{
    width: "309px",
    height: "32px",
    gap: "0px",
    opacity: 1,
    fontFamily: "Metropolis",
    fontSize: "24px",
    fontWeight: 700,
    lineHeight: "32px",
    textAlign: "left",
    color:"rgba(22, 6, 55, 1)",
},line2Black:{
    width: "127px",
    height: "32px",
    gap: "0px",
    opacity: 1,
    fontFamily: "Metropolis",
    fontSize: "24px",
    fontWeight: 700,
    lineHeight: "32px",
    textAlign: "left",
    color: "rgba(22, 6, 55, 1)",
},line1Purple:{
    width: "159px",
    height: "32px",
    gap: "0px",
    opacity: 1,
    fontFamily: "Metropolis",
    fontSize: "24px",
    fontWeight: 700,
    lineHeight: "32px",
    textAlign: "left",
    color: "rgba(114, 46, 209, 1)",
},line2Purple:{
    width: "196px",
    height: "32px",
    gap: "0px",
    opacity: 1,
    fontFamily: "Metropolis",
    fontSize: "24px",
    fontWeight: 700,
    lineHeight: "32px",
    textAlign: "left",
    color: "rgba(114, 46, 209, 1)",
}
});

const Inform = () =>{
  const classes = useStyles(theme)
  return(
    <div className={classes.root}>
      <div className={classes.line1}>
        <h1 className={classes.line1Black}></h1>
        <h1 className={classes.line1Purple}></h1>
      </div>
      <div className={classes.line2}>
        <h1 className={classes.line2Purple}></h1>
        <h1 className={classes.line2Black}></h1>
      </div>

    </div>
  )
}

export default Inform;