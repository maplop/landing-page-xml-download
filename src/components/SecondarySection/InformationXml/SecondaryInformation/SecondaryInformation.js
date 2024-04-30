import {makeStyles} from "@material-ui/core";
import Inform from "./Inform";
import theme from "../../../../styles/theme";
import InforExplanation from "./InforExplanation";

const useStyles = makeStyles((theme)=>({
  root:{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    width: "960px",
    height: "451px",
    top: "1363px",
    left: "240px",
    gap: "31px",
    opacity: 1,
}
}));

const SecundaryInformation = () =>{
  const classes = useStyles(theme)
  return(
    <div className={classes.root}>
      <Inform />
      <InforExplanation />
    </div>
  )
}

export default SecundaryInformation