import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import AddHugScreen from '../screens/AddHugScreen';

const HomeStack = createStackNavigator({
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

const AddHugStack = createStackNavigator({
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

export default createBottomTabNavigator({
  HomeStack,
  AddHugStack
});
