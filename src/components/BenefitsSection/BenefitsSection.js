import {makeStyles} from "@material-ui/core";
import Benefist from "./Benefist/Benefist";

const useStyles = makeStyles((theme) =>({
  root : {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: 'center',
    height: "330px",
    width: "960px",
    paddingTop:"200px",
    gap: "24px",
    opacity: 1,


},
  h1 : {
    width: "759px",
    height: "40px",
    gap: "0px",
    opacity: 1,
    fontFamily: "Metropolis",
    fontSize: "32px",
    fontWeight: 700,
    lineHeight: "40px",
    textAlign: "center",
    Color: "rgba(22, 6, 55, 1)",
  },
  h3 :{
    fontFamily: "Metropolis",
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: "24px",
    textAlign: "center",
    opacity: 1,
    color: "rgba(137, 137, 162, 1)",
  }

}));


const BenefistSection = () =>{
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <h1 className={classes.h1}>¿Estás listo para dar un gran paso en tu trabajo?</h1>
      <h3 className={classes.h3}>MiAdminXML te desafía a evolucionar tu forma de trabajar en solo 30 días.</h3>
      <Benefist />
    </div>
  )
}

export default BenefistSection;




