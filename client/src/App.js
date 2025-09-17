import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AppRouter from './routes/AppRouter';

const theme = createTheme({
  palette: {
    primary: {
      main: '#5E35B1',
    },
    secondary: {
      main: '#FFC107',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;