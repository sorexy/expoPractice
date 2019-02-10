import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import AddHugScreen from '../screens/AddHugScreen';
import AuthenticationScreen from '../screens/AuthenticationScreen';

const HomeStack = createStackNavigator({
  // 'Home' is a reference to the screen
  // HomeScreen is the imported screen
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-flame`
          : 'md-flame'
      }
    />
  ),
};

export const AddHugStack = createStackNavigator({
  AddHug: AddHugScreen,
});

AddHugStack.navigationOptions = {
  tabBarLabel: 'Add Coupons',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-key' : 'md-key'}
    />
  ),
};

const AuthenticationStack = createStackNavigator({
  Authenticate: AuthenticationScreen,
});

AuthenticationStack.navigationOptions = {
  tabBarLabel: 'Authenticate',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-key' : 'md-key'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  AuthenticationStack
});
