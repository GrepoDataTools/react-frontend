import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store';
import { setAutoFreeze } from 'immer';
import AppContainer from './components/App/App.container';
import { ThemeProvider } from '@material-ui/core';
import { theme } from './utils/theme.utils';
import { history } from './utils/url.utils';

setAutoFreeze(false);

history.listen((location) => {
  store.dispatch({ type: 'LOCATION_CHANGE' });
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
