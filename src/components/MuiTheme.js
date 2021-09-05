import { createTheme } from "@material-ui/core/styles";
import yellow from "@material-ui/core/colors/yellow";
import green from "@material-ui/core/colors/green";
import blue from "@material-ui/core/colors/yellow";
import red from "@material-ui/core/colors/red";

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: "#97724d",
    },
    text: {
      primary: "#ffffff",
    },
  },
});
export const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#19199c",
    },
  },
});
