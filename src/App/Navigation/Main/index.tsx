import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {FeedScreen, ArticleDetails} from '../../Screens';
const MainStackNavigator = createNativeStackNavigator();

export const MainNavigator = () => {
  return (
    <MainStackNavigator.Navigator initialRouteName="Feed">
      <MainStackNavigator.Screen name="Feed" component={FeedScreen} />
      <MainStackNavigator.Screen
        name="ArticleDetails"
        component={ArticleDetails}
        options={{
          title: 'Article Details',
        }}
      />
    </MainStackNavigator.Navigator>
  );
};
