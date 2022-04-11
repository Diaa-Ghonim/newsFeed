import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ArticleDetailsScreen} from '../../Screens';
import {Tabs} from '../Tabs';
import {useColorScheme} from 'react-native';

export type RootStackParamList = {
  Home: undefined;
  ArticleDetails: {articleId: string | undefined};
};
const MainStackNavigator = createNativeStackNavigator<RootStackParamList>();

export const MainNavigator = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <MainStackNavigator.Navigator initialRouteName="Home">
      <MainStackNavigator.Screen
        name="Home"
        component={Tabs}
        options={{headerShown: false}}
      />
      <MainStackNavigator.Screen
        name="ArticleDetails"
        component={ArticleDetailsScreen}
        options={{
          headerTintColor: isDarkMode ? '#fff' : '#000',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: isDarkMode ? '#000' : '#c2bebe',
          },
          title: 'Article Details',
        }}
      />
    </MainStackNavigator.Navigator>
  );
};
