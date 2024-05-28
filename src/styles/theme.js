import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: ["Metropolis", "sans-serif"].join(","),
    fontSize: 16,
  },
  palette: {
    primary: {
      main: "#722ED1",
      light: "#F7F1FF",
    },
    secondary: {
      main: "#1890FF",
      light: "#E2F1FF",
    },
    title: {
      main: "#160637",
    },
    text: {
      main: "#8989A2",
    },
    greenIcon: {
      main: "#52C41A",
      light: "#F2FFE4",
    },
    redIcon: {
      main: "#F5222D",
      light: "#FFF1F0",
    },
    black: {
      main: "#000000",
    },
    white: {
      main: "#FFFFFF",
    },
  },
});
export default theme;
