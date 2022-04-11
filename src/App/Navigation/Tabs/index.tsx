import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FeedScreen, SettingScreen} from '../../Screens';
import Icon from 'react-native-vector-icons/AntDesign';
import {Platform, useColorScheme} from 'react-native';

const Tab = createBottomTabNavigator();

export function Tabs() {
  const isDarkMode = useColorScheme() === 'dark';

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
          paddingBottom: Platform.OS === 'android' ? 10 : 30,
          paddingTop: 5,
          height: Platform.OS === 'ios' ? 90 : 70,
        },
        tabBarInactiveTintColor: isDarkMode ? '#fff' : '#000',
      }}>
      <Tab.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          tabBarIcon: ({focused}) => {
            let color = focused ? '#1e90ff' : '#000';
            if (isDarkMode) {
              color = focused ? '#1e90ff' : '#fff';
            }
            return <Icon name="home" size={30} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          tabBarIcon: ({focused}) => {
            let color = focused ? '#1e90ff' : '#000';
            if (isDarkMode) {
              color = focused ? '#1e90ff' : '#fff';
            }
            return <Icon name="setting" size={30} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
