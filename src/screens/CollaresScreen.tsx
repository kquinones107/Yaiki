import React, {useContext, useState} from 'react';
import {View, Text, Button, Image, ScrollView, StyleSheet} from 'react-native';
import {CartContext} from '../../CartContext';
import Toast from 'react-native-toast-message';

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

const  AnillosScreen = () => {
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


export default AnillosScreen;
