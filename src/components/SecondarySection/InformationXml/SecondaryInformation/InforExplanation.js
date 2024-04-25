import {makeStyles} from "@material-ui/core";
import theme from "../../../../styles/theme";

const useStyles = makeStyles((theme)=>({
  root:{

  }
}))
const InforExplanation = () =>{
  const classes = useStyles (theme)
  return(
    <div className={classes.root}>

    </div>
  )
}

export default InforExplanation