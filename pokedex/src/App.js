import { Router } from './router/Router';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme';
import GlobalState from './global/GlobalState';

function App() {
  return (
    <GlobalState> 
      <ThemeProvider theme={theme}>
        <div className="App">
            <Router />
        </div>
      </ThemeProvider>
    </GlobalState>
  )
}

export default App;
