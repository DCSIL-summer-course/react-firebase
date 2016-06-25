import React, { Component } from 'react';
import { render } from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { IntlProvider } from 'react-intl';
import rootReducer from './reducers/index.js';
import SignIn from './components/SignIn.js';
import Messages from './components/Messages.js';
import SendMessage from './components/SendMessage.js';

const store = createStore(
  rootReducer,
  {},
  applyMiddleware(thunkMiddleware)
);

if (module.hot) {
  module.hot.accept('./reducers', () =>{
    const nextRootReducer = require('./reducers/index')
    store.replaceReducer(nextRootReducer);
  });
}

class App extends Component {
  render(){
    return (
      <IntlProvider locale="en">
        <Provider store={store}>
          <div>
            <SignIn />
            <Messages />
            <SendMessage />
          </div>
        </Provider>
      </IntlProvider>
    );
  }
}

export default App;
