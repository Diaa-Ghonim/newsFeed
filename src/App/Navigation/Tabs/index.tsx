import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FeedScreen, SettingScreen} from '../../Screens';
import Icon from 'react-native-vector-icons/Ionicons';
import {Platform, useColorScheme} from 'react-native';
import {useTranslation} from 'react-i18next';

const Tab = createBottomTabNavigator();

export function Tabs() {
  const isDarkMode = useColorScheme() === 'dark';
  const {t} = useTranslation();
  return (
    <Tab.Navigator
      screenOptions={{
        headerTintColor: isDarkMode ? '#fff' : '#000',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: isDarkMode ? '#000' : '#c2bebe',
          borderBottomWidth: 1,
          borderBottomColor: '#c2bebe',
        },
        tabBarStyle: {
          borderTopWidth: 1,
          borderTopColor: '#ddd',
          backgroundColor: isDarkMode ? '#000' : '#c2bebe',
          paddingBottom: Platform.OS === 'android' ? 10 : 25,
          paddingTop: 5,
          height: Platform.OS === 'ios' ? 80 : 70,
        },
        tabBarInactiveTintColor: isDarkMode ? '#fff' : '#000',
      }}>
      <Tab.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          title: t('Feed'),
          tabBarIcon: ({focused}) => {
            let color = focused ? '#1e90ff' : '#000';
            if (isDarkMode) {
              color = focused ? '#1e90ff' : '#fff';
            }
            return <Icon name="home" size={25} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          title: t('Setting'),
          tabBarIcon: ({focused}) => {
            let color = focused ? '#1e90ff' : '#000';
            if (isDarkMode) {
              color = focused ? '#1e90ff' : '#fff';
            }
            return <Icon name="settings-outline" size={25} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
