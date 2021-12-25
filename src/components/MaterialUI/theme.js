import { createTheme } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#44f",
    },
    secondary: {
      main: green[500],
    },
  },
});

export default theme;
