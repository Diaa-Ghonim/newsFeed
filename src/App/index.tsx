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
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
// import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Provider} from 'react-redux';
import store from '../state/store';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  console.log(isDarkMode);
  console.log(styles);

  return (
    <SafeAreaView>
      <Provider store={store}>
        <View>
          <Text>News App</Text>
        </View>
      </Provider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
