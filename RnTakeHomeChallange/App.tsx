import React from 'react';
import {Provider} from 'react-redux';
import AppNavigator from './src/Navigators/AppNavigator';
import {store} from './src/Store/store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}

export default App;
