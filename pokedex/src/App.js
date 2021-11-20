import { Router } from './router/Router';

import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
          <Router />
      </div>
    </ThemeProvider>
  )
}

export default App;
