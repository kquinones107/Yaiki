import { View, Text, Image, Button, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import CanastaScreen from './CanastaScreen';


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

  const [cart, setCart] = useState([]);
  const [showMessage, setShowMessage] = useState(false);


  const handleAddToCart = (productId) => {
    // Encuentra el producto con el ID correspondiente en la lista de productos
    const productToAdd = products.find((product) => product.id === productId);
    if (productToAdd) {
      // Agrega el producto al carrito
      setCart([...cart, productToAdd]);
      setShowMessage(true);
      console.log(`Producto ${productId} agregado a la canasta.`);
      setTimeout(() => {
        setShowMessage(false);
      }, 3000);
    } else {
      console.warn(`No se encontró ningún producto con el ID ${productId}`);
    }
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
      {showMessage && (
        <Text style={styles.message}>Producto agregado a la canasta exitosamente</Text>
      )}
      <CanastaScreen cart={cart} />
    </View>
  );
};

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
  message: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
    marginTop: 10,
  },
});

export default PulserasScreen;