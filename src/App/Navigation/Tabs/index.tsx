import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FeedScreen, SettingScreen} from '../../Screens';
import Icon from 'react-native-vector-icons/AntDesign';
import {Platform} from 'react-native';

// export type RootStackParamList = {
//   Feed: undefined;
//   ArticleDetails: {articleId: string | undefined};
// };
const Tab = createBottomTabNavigator();

export function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
        headerStyle: {backgroundColor: '#222'},
        tabBarStyle: {
          borderTopWidth: 1,
          borderTopColor: '#ddd',
          paddingBottom: Platform.OS === 'android' ? 10 : 30,
          paddingTop: 5,
          height: Platform.OS === 'ios' ? 90 : 70,
        },
      }}>
      <Tab.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          //   headerShown: false,
          tabBarIcon: ({focused}) => (
            <Icon name="home" size={30} color={focused ? '#1e90ff' : ''} />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon name="setting" size={30} color={focused ? '#1e90ff' : ''} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
