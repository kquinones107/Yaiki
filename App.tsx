import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import MiPantalla from './src/screens/MiPantalla';
import Home from './src/screens/Home';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName=''>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="MiPantalla" component={MiPantalla} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App; 




