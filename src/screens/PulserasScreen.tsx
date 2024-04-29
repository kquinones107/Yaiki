import React, {useContext, useState} from 'react';
import {View, Text, Button, Image, ScrollView, StyleSheet} from 'react-native';
import {CartContext} from '../../CartContext';
import Toast from 'react-native-toast-message';

const products = [
  {
    id: 1,
    name: 'Pulsera 1',
    price: 14990,
    image: require('../resources/assets/photos/Pulsera_1.jpg'),
  },
  {
    id: 2,
    name: 'Pulsera 2',
    price: 14990,
    image: require('../resources/assets/photos/Pulsera_2.jpg'),
  },
  {
    id: 3,
    name: 'Pulsera 3',
    price: 14990,
    image: require('../resources/assets/photos/Pulsera_3.jpg'),
  },
  {
    id: 4,
    name: 'Pulsera 4',
    price: 14990,
    image: require('../resources/assets/photos/Pulsera_4.jpg'),
  },
  {
    id: 5,
    name: 'Pulsera 5',
    price: 11990,
    image: require('../resources/assets/photos/Pulsera_5.jpg'),
  },
  {
    id: 6,
    name: 'Pulsera 6',
    price: 14990,
    image: require('../resources/assets/photos/Pulsera_6.jpg'),
  },
  {
    id: 7,
    name: 'Pulsera 7',
    price: 11990,
    image: require('../resources/assets/photos/Pulsera_7.jpg'),
  },
  {
    id: 8,
    name: 'Pulsera 8',
    price: 21990,
    image: require('../resources/assets/photos/Pulsera_8.jpg'),
  },
  {
    id: 9,
    name: 'Pulsera 9',
    price: 14990,
    image: require('../resources/assets/photos/Pulsera_9.jpg'),
  },
  {
    id: 10,
    name: 'Pulsera 10',
    price: 14990,
    image: require('../resources/assets/photos/Pulsera_10.jpg'),
  },
  {
    id: 11,
    name: 'Pulsera 11',
    price: 21990,
    image: require('../resources/assets/photos/Pulsera_11.jpg'),
  },
  {
    id: 12,
    name: 'Pulsera 12',
    price: 14990,
    image: require('../resources/assets/photos/Pulsera_12.jpg'),
  },
  {
    id: 13,
    name: 'Pulsera 13',
    price: 14990,
    image: require('../resources/assets/photos/Pulsera_13.jpg'),
  },
  {
    id: 14,
    name: 'Pulsera 14',
    price: 14990,
    image: require('../resources/assets/photos/Pulsera_14.jpg'),
  },
  // Agregar más productos según sea necesario
];

const ProductItem = ({product, onPressAddToCart}) => {
  return (
    <View style={styles.card}>
      <Image source={product.image} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <Button title="Comprar" onPress={onPressAddToCart} />
    </View>
  );
};

const PulserasScreen = () => {
  const {addToCart, showSuccessMessage} = useContext(CartContext);

  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Agregado exitosamente a la canasta',
      position: 'bottom',
    });
  };

  const handleAddToCart = product => {
    showToast();
    addToCart(product);
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {products.map(product => (
          <ProductItem
            key={product.id}
            product={product}
            onPressAddToCart={() => handleAddToCart(product)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
  },

  card: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    alignItems: 'center',
    width: 250,
    backgroundColor: 'pink',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    marginBottom: 5,
    fontFamily: 'IndieFlower-Regular',
  },
  price: {
    fontSize: 14,
    marginBottom: 10,
    fontFamily: 'Exo2-Regular',
  },
  message: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'pink',
    marginTop: 10,
  },
});

export default PulserasScreen;
