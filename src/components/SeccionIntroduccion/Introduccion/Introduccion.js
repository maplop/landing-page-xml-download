import {makeStyles} from "@material-ui/core";
import Information from "./Information/Information";
import ImageIntroduccion from "./ImageIntroduccion/ImageIntroduccion";

const useStyles = makeStyles(()=>({
  root:{
    position:"relative",
    display: "flex",
    width: "960px",
    minHeight: "370px",
    paddingTop: "168px",
    left: "240px",
    justifyContent: "space-between",
  }
}))

const Introduccion = () =>{
  const classes = useStyles()
  return(
    <div className={classes.root}>
      <Information />
      <ImageIntroduccion />
    </div>
  )
}
export default Introduccion;