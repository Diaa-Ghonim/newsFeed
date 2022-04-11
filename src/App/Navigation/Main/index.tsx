import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ArticleDetailsScreen} from '../../Screens';
import {Tabs} from '../Tabs';

export type RootStackParamList = {
  Feed: undefined;
  ArticleDetails: {articleId: string | undefined};
};
const MainStackNavigator = createNativeStackNavigator<RootStackParamList>();

export const MainNavigator = () => {
  return (
    <MainStackNavigator.Navigator initialRouteName="Feed">
      <MainStackNavigator.Screen
        name="Feed"
        component={Tabs}
        options={{headerShown: false}}
      />
      <MainStackNavigator.Screen
        name="ArticleDetails"
        component={ArticleDetailsScreen}
        options={{
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: '#222'},
          title: 'Article Details',
        }}
      />
    </MainStackNavigator.Navigator>
  );
};
