import { createTheme } from '@material-ui/core';
import colors from '../utils/colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.seaGreen,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 2,
        },
      },
    },
  },
});
