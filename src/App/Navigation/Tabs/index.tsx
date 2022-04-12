import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FeedScreen, SettingScreen} from '../../Screens';
import Icon from 'react-native-vector-icons/Ionicons';
import {Platform, useColorScheme} from 'react-native';
import {useTranslation} from 'react-i18next';
import {Colors} from '../../../constants/Colors';

const Tab = createBottomTabNavigator();

export function Tabs() {
  const isDarkMode = useColorScheme() === 'dark';
  const {t} = useTranslation();
  return (
    <Tab.Navigator
      screenOptions={{
        headerTintColor: isDarkMode ? Colors.light : Colors.dark,
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: isDarkMode ? Colors.dark : Colors.cadetblue,
          borderBottomWidth: 1,
          borderBottomColor: '#c2bebe',
        },
        tabBarStyle: {
          borderTopWidth: 1,
          borderTopColor: '#ddd',
          backgroundColor: isDarkMode ? Colors.dark : Colors.cadetblue,
          paddingBottom: Platform.OS === 'android' ? 10 : 25,
          paddingTop: 5,
          height: Platform.OS === 'ios' ? 80 : 70,
        },
        tabBarInactiveTintColor: isDarkMode ? Colors.light : Colors.dark,
        tabBarActiveTintColor: isDarkMode ? Colors.blue : Colors.light,
      }}>
      <Tab.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          title: t('Feed'),
          tabBarIcon: ({focused}) => {
            let color = focused ? Colors.light : Colors.dark;
            if (isDarkMode) {
              color = focused ? Colors.blue : Colors.light;
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
            let color = focused ? Colors.light : Colors.dark;
            if (isDarkMode) {
              color = focused ? Colors.blue : Colors.light;
            }
            return <Icon name="settings-outline" size={25} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
