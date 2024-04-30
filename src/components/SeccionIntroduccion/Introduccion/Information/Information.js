import {makeStyles} from "@material-ui/core";
import theme from "../../../../styles/theme";
import DownloadButton from "./DownloadButton/DownloadButton";
import LogoVersion from "./LogoV3/LogoVersion";


const useStyles = makeStyles((theme)=>({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: '472px',
    height: '342px',
    padding: "20px",
    gap: '24px',
    opacity: 1,
  },
  h1: {
    width: "472px",
    height: "96px",
    fontFamily: "Metropolis",
    fontSize: "48px",
    fontWeight: 700,
    lineHeight: "48px",
    textAlign: "left",
    color: "rgba(0, 0, 0, 1)",
  },
  h3: {
    width: "472px",
    height: "96px",
    gap: "0px",
    opacity: 0.5,
    fontFamily: "Metropolis",
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: "24px",
    textAlign: "left",
    color: "rgba(0, 0, 0, 1)",
  },

}));

const Information = () =>{
  const classes = useStyles(theme)
  return(
    <div className={classes.root}>
      <LogoVersion />
      <h1 className={classes.h1}>Descarga Masiva de XML</h1>
      <h3 className={classes.h3}>Con MiAdminXML Descarga, Administra y Controla de Forma masiva tus XML Emitidos y Recibidos directamente desde el portal del SAT, además genera reportes a Excel de tu información</h3>
      <DownloadButton name="Descargar MiAdminXML" variant="secondary" />
    </div>
  )
}

export default Information;

