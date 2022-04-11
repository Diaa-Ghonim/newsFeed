import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {FeedScreen, ArticleDetails} from '../../Screens';

export type RootStackParamList = {
  Feed: undefined;
  ArticleDetails: {articleId: string | undefined};
};
const MainStackNavigator = createNativeStackNavigator<RootStackParamList>();

export const MainNavigator = () => {
  return (
    <MainStackNavigator.Navigator
      initialRouteName="Feed"
      screenOptions={{
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
        headerStyle: {backgroundColor: '#222'},
      }}>
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
