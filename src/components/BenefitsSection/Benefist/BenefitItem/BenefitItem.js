import {makeStyles} from "@material-ui/core";
import theme from "../../../../styles/theme";
import BenefitLogo from "./BenefitLogo";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  root:{
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    width: "320px",
    height: "218px",
    padding: "16px 24px 16px 24px",
    gap: "16px",
    borderRadius: "5px 0px 0px 5px",
    border: "1px solid rgba(114, 46, 209, 1)",
    opacity: 1,
},p: {
    width: "270px",
    height: "120px",
    gap: "0px",
    fontFamily: "Metropolis",
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: "24px",
    textAlign: "center",
    color: "rgba(137, 137, 162, 1)",
  },logo:{
    width: "50px",
    height: "50px",
    gap: "0px",
    opacity: 1,
    border: "1px",

  }
});


const BenefitItem = ({ texto , imageSource }) => {
  const classes = useStyles(theme);
  return (
    <div className={classes.root}>
      <BenefitLogo imageSource={imageSource} />
      <p className={classes.p}>{texto}</p>
    </div>
  );
};

BenefitItem.propTypes = {
  texto: PropTypes.string.isRequired,
  imageSource: PropTypes.string.isRequired
};

export default BenefitItem;