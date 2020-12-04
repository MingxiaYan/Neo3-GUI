//customize material-UI basic style
import { createMuiTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#00AF92",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#000",
      main: "#333",
      dark: "#000",
      contrastText: "#000",
    },
  },
  overrides: {
    MuiButton: {
      text: {
        // background: "#00AF92",
      },
    },
    // MuiInput: {
    //   input: {
    //     // background: "#00AF92",
    //     border: "1px solid #000",
    //     marginTop: "10px",
    //     padding: "6px 15px",
    //   },
    // },
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
    MuiFormControl: {
      fullWidth: true,
    },
    MuiInputBase: {
      color: "secondary",
    },
    MuiInputLabel: {
      shrink: true,
      color: "secondary",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export { theme, useStyles };
