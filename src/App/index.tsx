// import 'react-native-gesture-handler';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StatusBar, Text, useColorScheme} from 'react-native';
// import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Provider} from 'react-redux';
import store from '../state/store';
import {NavigationContainer} from '@react-navigation/native';
import {MainNavigator} from './Navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {linking} from '../linking';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NavigationContainer
          linking={linking}
          fallback={<Text>Loading...</Text>}>
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor="#6a51ae"
          />
          <MainNavigator />
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
