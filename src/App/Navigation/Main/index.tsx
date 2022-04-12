import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ArticleDetailsScreen} from '../../Screens';
import {Tabs} from '../Tabs';
import {useColorScheme} from 'react-native';
import {useTranslation} from 'react-i18next';

export type RootStackParamList = {
  Home: undefined;
  ArticleDetails: {articleId: string | undefined};
};
const MainStackNavigator = createNativeStackNavigator<RootStackParamList>();

export const MainNavigator = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const {t} = useTranslation();

  return (
    <MainStackNavigator.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerBackTitle: t('Back'),
      }}>
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
          title: t('Article Details'),
        }}
      />
    </MainStackNavigator.Navigator>
  );
};
