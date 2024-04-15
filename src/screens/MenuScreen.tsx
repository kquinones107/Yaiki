import { View, Text } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PulserasScreen from './PulserasScreen';

const Tab = createMaterialTopTabNavigator();

//const Drawer = createDrawerNavigator();

const MenuScreen = () => {
  return (
   <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Pulseras" component={PulserasScreen}/>
    </Tab.Navigator>
   </NavigationContainer>
    //  <Drawer.Navigator>
  //   <Drawer.Screen name="Pulseras" component={PulserasScreen} />
  //  </Drawer.Navigator>
  );
};

export default MenuScreen