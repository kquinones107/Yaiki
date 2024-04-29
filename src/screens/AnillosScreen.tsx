import React, {useContext, useState} from 'react';
import {View, Text, Button, Image, ScrollView, StyleSheet} from 'react-native';
import {CartContext} from '../../CartContext';
import Toast from 'react-native-toast-message';

const products = [
  {
    id: 20,
    name: 'Combo de 4 Anillos',
    price: 19990,
    image: require('../resources/assets/photos/Anillos_1.jpeg'),
  },
  {
    id: 21,
    name: 'Anillos felices :)',
    price: 11990,
    image: require('../resources/assets/photos/Anillos_2.jpeg'),
  },
  {
    id: 23,
    name: 'Anillos de flores',
    price: 14990,
    image: require('../resources/assets/photos/Anillos_3.jpeg'),
  },
  {
    id: 24,
    name: 'Anillos de media luna',
    price: 11990,
    image: require('../resources/assets/photos/Anillos_4.jpeg'),
  },
  {
    id: 25,
    name: 'Anillo blanco',
    price: 5990,
    image: require('../resources/assets/photos/Anillos_5.jpeg'),
  },{
    id: 26,
    name: 'Anillo de flor',
    price: 5990,
    image: require('../resources/assets/photos/Anillos_6.jpg'),
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