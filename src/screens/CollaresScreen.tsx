import React, {useContext, useState} from 'react';
import {View, Text, Button, Image, ScrollView, StyleSheet} from 'react-native';
import {CartContext} from '../../CartContext';
import Toast from 'react-native-toast-message';
import GeneralScreen from './GeneralScreen';

const products = [
  {
    id: 30,
    name: 'Collar 1',
    price: 13990,
    image: require('../resources/assets/photos/Collar_1.jpeg'),
  },
  {
    id: 31,
    name: 'Collar 2',
    price: 13990,
    image: require('../resources/assets/photos/Collar_2.jpeg'),
  },
  {
    id: 33,
    name: 'Collar 3',
    price: 13990,
    image: require('../resources/assets/photos/Collar_3.jpeg'),
  },
  {
    id: 34,
    name: 'Collar 4',
    price: 13990,
    image: require('../resources/assets/photos/Collar_4.jpeg'),
  },
  {
    id: 35,
    name: 'Collar 5',
    price: 13990,
    image: require('../resources/assets/photos/Collar_5.jpeg'),
  },
  {
    id: 36,
    name: 'Collar 6',
    price: 13990,
    image: require('../resources/assets/photos/Collar_6.jpeg'),
  },
  {
    id: 37,
    name: 'Collar 7',
    price: 13990,
    image: require('../resources/assets/photos/Collar_7.jpg'),
  },
  {
    id: 38,
    name: 'Collar 8',
    price: 13990,
    image: require('../resources/assets/photos/Collar_8.jpg'),
  },
  {
    id: 39,
    name: 'Collar 9',
    price: 13990,
    image: require('../resources/assets/photos/Collar_9.jpg'),
  },
  {
    id: 400,
    name: 'Collar 10',
    price: 13990,
    image: require('../resources/assets/photos/Collar_10.jpg'),
  },
  {
    id: 401,
    name: 'Collar 11',
    price: 13990,
    image: require('../resources/assets/photos/Collar_11.jpg'),
  },
  {
    id: 402,
    name: 'Collar 12',
    price: 13990,
    image: require('../resources/assets/photos/Collar_12.jpg'),
  },
  {
    id: 403,
    name: 'Collar 13',
    price: 13990,
    image: require('../resources/assets/photos/Collar_13.jpg'),
  },
  
  // Agregar más productos según sea necesario
];


const CollaresScreen = () => {
  return <GeneralScreen products={products} />
};

export default CollaresScreen;