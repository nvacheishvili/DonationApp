import React, {useEffect, useRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from './navigation/RootNavigation';
import {AppState} from 'react-native';
// Importing the Provider component from the React Redux library
// The Provider component is a higher-order component that provides the Redux store to all components in the app
import {Provider} from 'react-redux';

import store from './redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor} from './redux/store';
import {checkToken} from './api/user';

const App = () => {
  // Rendering the App component with a Provider and NavigationContainer component
  // We're passing in the store prop to the Provider component, making the store available to all child components
  const appState = useRef(AppState.currentState);
  useEffect(() => {
    const subscription = AppState.addEventListener(
      'change',
      async nextAppState => {
        if (
          appState.current.match(/inactive|background/) &&
          nextAppState === 'active'
        ) {
          console.log('You have come back into the app');
          await checkToken();
          //we are coming from background to the foreground
        }

        appState.current = nextAppState;
      },
    );
    checkToken();
    console.log('Application has rendered');
  }, []);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <NavigationContainer>
          <RootNavigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
