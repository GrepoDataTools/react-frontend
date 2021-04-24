import { createMuiTheme } from '@material-ui/core';
import colors from '../utils/colors';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.seaGreen,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {},
    },
  },
});
