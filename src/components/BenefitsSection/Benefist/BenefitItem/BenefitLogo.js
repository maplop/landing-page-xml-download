import download1 from "../../../../assets/images/downloadLogo.png";
import theme from "../../../../styles/theme";
import {makeStyles} from "@material-ui/core";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  root:{
    width: "50px",
    height: "50px",
    gap: "0px",
    opacity: 1,
    border: "1px",

  }
})

const BenefitLogo = ({imageSource = download1}) =>{
  const classes = useStyles(theme)
  return(
    <div className={classes.root}>
      <img src={imageSource} alt="Logo" width={50} height={50} className={classes.dw1}/>
    </div>
  )
};
BenefitLogo.propTypes = {
  imageSource: PropTypes.string.isRequired,
};

export default BenefitLogo;