import { createTheme } from "@material-ui/core/styles";

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
      main: "#fafafc",
    },
  },
});
