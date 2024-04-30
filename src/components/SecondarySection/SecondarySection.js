import {makeStyles} from "@material-ui/core";
import theme from "../../styles/theme";
import InformationXml from "./InformationXml/InformationXml";
import rectangle from "../../assets/images/Rectangle.png"


const useStyles = makeStyles({
  root: {
    width: "1200px",
    height: "626px",
    top: "1270px",
    gap: "0px",
    opacity: 1,

  },img:{
    width: "728px",
    height: "626px",
    top: "1270px",
    gap: "0px",
    opacity: 1,
    margin: "0px, 0px, 0px, 472px",

  }
})
const SecondarySection = () => {
  const classes = useStyles(theme);
  return (
    <div className={classes.root}>
      <InformationXml />
      <img className={classes.img} src={rectangle} alt='' />
    </div>
  );
};

export default SecondarySection;

