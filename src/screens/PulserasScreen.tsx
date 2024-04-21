import React, { useContext, useState } from 'react';
import { View, Text, Button, Image, ScrollView, StyleSheet } from 'react-native';
import { CartContext } from '../../CartContext';


const products = [
  { id: 1, name: 'Producto 1', price: 10.99, image: require('../resources/assets/photos/Foto_1.jpg') },
  { id: 2, name: 'Producto 2', price: 15.99, image: require('../resources/assets/photos/Foto_2.jpg') },
  { id: 3, name: 'Producto 3', price: 15.99, image: require('../resources/assets/photos/Foto_3.jpg') },
  // Agregar más productos según sea necesario
];


const ProductItem = ({ product, onPressAddToCart }) => {
  return (
    <View style={styles.card}>
      <Image source={product.image} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <Button title="Agregar a la Canasta" onPress={onPressAddToCart} />
    </View>
  );
};

const PulserasScreen = () => {
  const { addToCart, showSuccessMessage } = useContext(CartContext);
  

  const handleAddToCart = (product) => {
    addToCart(product);
    
  };

  return (
    <ScrollView>
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onPressAddToCart={() => handleAddToCart(product)}
        />
      ))}
      
    </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
    marginTop: 10,
  },
});

export default PulserasScreen;