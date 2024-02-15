import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import ScrollTop from 'src/hooks/useScrollTop';

import { SnackbarProvider } from 'notistack';
import 'nprogress/nprogress.css';
import { Provider } from 'react-redux';
import App from 'src/App';
import { AuthProvider } from 'src/contexts/JWTAuthContext';
import { SidebarProvider } from 'src/contexts/SidebarContext';
import * as serviceWorker from 'src/serviceWorker';
import store from 'src/store';

ReactDOM.render(
  <HelmetProvider>
    <SnackbarProvider
      maxSnack={6}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
    >
      <Provider store={store}>
        <SidebarProvider>
          <BrowserRouter>
            <ScrollTop />
            <AuthProvider>
              <App />
            </AuthProvider>
          </BrowserRouter>
        </SidebarProvider>
      </Provider>
    </SnackbarProvider>
  </HelmetProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
