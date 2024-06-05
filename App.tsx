import React, { useEffect } from 'react';
import { NavigationContainer, RouteConfig } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './src/screens/LoginScreen';
import Welcome from './src/screens/Welcome';
import Home from './src/screens/Home';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import MenuScreen from './src/screens/MenuScreen';
import { Text, View } from 'react-native';
import CanastaScreen from './src/screens/CanastaScreen';
import { CartProvider } from './CartContext';
import Toast from 'react-native-toast-message';
import { ThemeProvider, useTheme } from './src/resources/assets/colors/ThemeContext';
import analytics from '@react-native-firebase/analytics';
import GamificationScreen from './src/screens/GamificationScreen';
import QuizScreen from './src/screens/QuizScreen';
import FindAccessoryScreen from './src/screens/FindAccessoryScreen';
import CustomizationScreen from './src/screens/CustomizationScreen';
import DailyChallengesScreen from './src/screens/DailyChallengesScreen';
import SurveyScreen from './src/screens/SurveyScreen';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack: React.FC = () => {
  const {theme} = useTheme();
  return (
    <Tab.Navigator initialRouteName="" screenOptions={({ route }) => ({
      tabBarActiveTintColor: theme.accent,
      tabBarInactiveTintColor: theme.primary,
      tabBarStyle: {
        height: 90,
        paddingHorizontal: 5,
        paddingTop: 0,
        backgroundColor: 'rgba(34,36,40,1)',
        position: 'absolute',
        borderTopWidth: 0,
      },
    })}>
      <Tab.Screen
        name="Inicio"
        component={Home}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon name="home" size={30} color={color} />
          ),

        }}
      />
      <Tab.Screen
        name="Gamificacion"
        component={GamificationScreen}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon name="gamepad" size={30} color={color} />
          ),

        }}
      />
      <Tab.Screen
        name="Menu"
        component={MenuScreen}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Entypo name="menu" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Canasta"
        component={CanastaScreen}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Entypo name="shopping-cart" size={30} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const App: React.FC = () => {

  useEffect(() => {
    const logAppOpen = async () => {
      await analytics().logAppOpen();
    };
    logAppOpen();
  }, []);

  return (
    <ThemeProvider>
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
              name="Quiz"
              component={QuizScreen}
            />
            <Stack.Screen
            options={{
              headerShown: false,
            }} 
            name="FindAccessory" 
            component={FindAccessoryScreen} 
            />
            <Stack.Screen
            options={{
              headerShown: false,
            }}   
            name="Customization" 
            component={CustomizationScreen} 
            />
            <Stack.Screen 
            options={{
              headerShown: false,
            }}
            name="DailyChallenges" 
            component={DailyChallengesScreen} 
            />
            <Stack.Screen
            options={{
              headerShown: false,
            }} 
            name="Survey" 
            component={SurveyScreen} />
          </Stack.Navigator>
          <Toast />
        </NavigationContainer>
      </CartProvider>
    </ThemeProvider>
  );
};

export default App;
