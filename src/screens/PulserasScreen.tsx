import { View, Text, Image, Button, StyleSheet, ScrollView } from 'react-native'
import React from 'react'


const ProductItem = ({ name, price, onPressAddToCart, image }) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>${price}</Text>
      <Button title="Agregar a la Canasta" onPress={onPressAddToCart} />
    </View>
  );
};

const PulserasScreen = () => {
  
  const products = [
    { id: 1, name: 'Producto 1', price: 10.99, image: require('../resources/assets/photos/Foto_1.jpg') },
    { id: 2, name: 'Producto 2', price: 15.99, image: require('../resources/assets/photos/Foto_2.jpg') },
    { id: 3, name: 'Producto 2', price: 15.99, image: require('../resources/assets/photos/Foto_3.jpg') },
    // Agregar más productos según sea necesario
  ];

  const handleAddToCart = (productId) => {
    // Lógica para agregar el producto al carrito
    console.log(`Producto ${productId} agregado a la canasta.`);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            onPressAddToCart={() => handleAddToCart(product.id)}
        />
      ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    width: 250,
    alignItems: 'center',
  },
});

export default PulserasScreen;