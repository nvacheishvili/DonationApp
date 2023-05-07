import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from './navigation/MainNavigation';

// Importing the Provider component from the React Redux library
// The Provider component is a higher-order component that provides the Redux store to all components in the app
import {Provider} from 'react-redux';

import store from './redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor} from './redux/store';

const App = () => {
  // Rendering the App component with a Provider and NavigationContainer component
  // We're passing in the store prop to the Provider component, making the store available to all child components
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <NavigationContainer>
          <MainNavigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
