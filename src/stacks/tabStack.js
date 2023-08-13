// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/
import * as React from 'react';

import
 MaterialCommunityIcons
from 'react-native-vector-icons/MaterialCommunityIcons';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStack from './homeStack';
import SearchScreen from '../screens/searchScreen';
import AccountScreen from '../screens/accountScreen';
import FavouriteScreen from '../screens/favouriteScreen';

const Tab = createBottomTabNavigator();

function TabStack() {
  return (
    
      <Tab.Navigator
        initialRouteName="Feed"
        screenOptions={({ route }) => ({
          headerStyle: { backgroundColor: '#42f44b' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'HomeStack') {
              iconName = focused
                ? 'home-circle'
                : 'home-circle-outline';
            } else if (route.name === 'SettingsStack') {
              iconName = focused
                ? 'account-settings'
                : 'account-settings-outline';
            }else if (route.name === 'FavouriteStack') {
              iconName = focused
                ? 'account-settings'
                : 'account-settings-outline';
            }else if (route.name === 'AccountStack') {
              iconName = focused
                ? 'account-settings'
                : 'account-settings-outline';
            }
            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            );
          }
        })}>
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarLabel: 'Home',
            title: 'HomePage',
            headerShown: false,

          }}  />
        <Tab.Screen
          name="SearchStack"
          component={SearchScreen}
          options={{
            tabBarLabel: 'Search',
            title: 'Search',
            headerShown: false
          }} />
          <Tab.Screen
          name="FavouriteStack"
          component={FavouriteScreen}
          options={{
            tabBarLabel: 'Favorite',
            title: 'Favorite',
            headerShown: false
          }} />
          <Tab.Screen
          name="AccountStack"
          component={AccountScreen}
          options={{
            tabBarLabel: 'Account',
            title: 'Account',
            headerShown: false
          }} />
      </Tab.Navigator>
  );
}
export default TabStack;