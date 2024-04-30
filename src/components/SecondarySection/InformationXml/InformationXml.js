import {makeStyles} from "@material-ui/core";
import theme from "../../../styles/theme";
import Question from "./Question/Question";
import SecondaryInformation from "./SecondaryInformation/SecondaryInformation";


const useStyles = makeStyles((theme)=>({
  root:{
    display:"flex",
    justifyContent: "space-between",
    width: "960px",
    height: "332px",
    gap: "0px",
    opacity: 1,

}
}))

const InformationXml = () =>{
  const classes = useStyles(theme)
  return(
    <div className={classes.root}>
      <Question />
      <SecondaryInformation />
    </div>
  )
}

export default InformationXml