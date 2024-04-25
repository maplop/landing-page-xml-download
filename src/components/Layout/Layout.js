import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) =>({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    padding: theme.spacing(2),
    backgroundColor: "rgba(255, 255, 255, 1)",
    boxSizing: "border-box",
    gap: "0px",
  }
}));

const Layout = ({children}) => {
  const classes = useStyles()
  return(
    <div className={classes.root}>
      {children}
    </div>
  )
}

export default Layout;

