import React from 'react';
import {NavigationContainer, RouteConfig } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LoginScreen from './src/screens/LoginScreen';
import Welcome from './src/screens/Welcome';
import Home from './src/screens/Home';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MenuScreen from './src/screens/MenuScreen';
import { Text, View } from 'react-native';
import CanastaScreen from './src/screens/CanastaScreen';
import 'react-native-gesture-handler';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();




const HomeStack: React.FC = () => {
  return (
    <Tab.Navigator initialRouteName="">
      <Tab.Screen
        name="Inicio"
        component={Home}
        options={{
          headerShown: false,  
          tabBarIcon: ({color, size}) => (
            <FontAwesomeIcon name="rocket" size={30} color="#900" />
          )
        }}
      />
      <Tab.Screen
        name="Menu"
        component={MenuScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
           <View>
            <Text>Menu</Text>
           </View>
          )
        }}
      />
      <Tab.Screen
        name="Canasta"
        component={CanastaScreen}
        options={{
          headerShown: false,  
          tabBarIcon: ({color, size}) => (
            <FontAwesomeIcon name="rocket" size={30} color="#900" />
          )
        }}
      />
    </Tab.Navigator>
  );
};
const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Welcome"
          component={Welcome}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Home"
          component={HomeStack}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
