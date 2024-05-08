import React from 'react';
import {NavigationContainer, RouteConfig} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LoginScreen from './src/screens/LoginScreen';
import Welcome from './src/screens/Welcome';
import Home from './src/screens/Home';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import MenuScreen from './src/screens/MenuScreen';
import {Text, View} from 'react-native';
import CanastaScreen from './src/screens/CanastaScreen';
import {CartProvider} from './CartContext';
import Toast from 'react-native-toast-message';
import WhatsappScreen from './src/screens/WhatsappScreen';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack: React.FC = () => {
  return (
    <Tab.Navigator initialRouteName="" screenOptions={({ route }) => ({
      tabBarActiveTintColor: 'pink',
      tabBarInactiveTintColor: 'gray',
    })}>
      <Tab.Screen
        name="Inicio"
        component={Home}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <FontAwesomeIcon name="home" size={30} color={color} />
          ),
          
        }}
      />
      <Tab.Screen
        name="Menu"
        component={MenuScreen}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Entypo  name="menu" size={30} color={color} /> 
          ),
        }}
      />
      <Tab.Screen
        name="Canasta"
        component={CanastaScreen}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Entypo name="shopping-cart" size={30} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const App: React.FC = () => {
  return (
    <CartProvider>
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
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Whatsapp"
            component={WhatsappScreen}
          />
        </Stack.Navigator>
        <Toast />
      </NavigationContainer>
    </CartProvider>
  );
};

export default App;
