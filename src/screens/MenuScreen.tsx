import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import PulserasScreen from './PulserasScreen';
import AnillosScreen from './AnillosScreen';
import AretesScreen from './AretesScreen';
import PersonalizadosScreen from './PersonalizadosScreen';
import PlayaScreen from './PlayaScreen';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import CollaresScreen from './CollaresScreen';

const Tab = createMaterialTopTabNavigator();

const MenuScreen = () => {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarScrollEnabled: true,
        tabBarLabelStyle: {...styles.label, paddingTop: insets.top},
      }} // Habilita el desplazamiento vertical
    >
      <Tab.Screen name="Pulseras" component={PulserasScreen} />
      <Tab.Screen name="Anillos" component={AnillosScreen} />
      <Tab.Screen name="Collares" component={CollaresScreen} />
      <Tab.Screen name="Aretes" component={AretesScreen} />
      <Tab.Screen name="Personalizados" component={PersonalizadosScreen} />
      <Tab.Screen name="Playa" component={PlayaScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  sceneContainer: {
    flexGrow: 1, // Para permitir el contenido se expanda verticalmente
  },
  label: {
    fontSize: 14, // Ajusta el tamaño de la fuente según sea necesario
    width: 110,
    fontFamily: 'Caveat-Bold',
  },
});

export default MenuScreen;
