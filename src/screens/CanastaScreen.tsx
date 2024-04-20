import React from 'react';
import { View, Text } from 'react-native';

const CanastaScreen = ({ cart }) => {
  // Verifica si el carrito está definido antes de intentar usar reduce
  if (!cart || cart.length === 0) {
    return <Text>El carrito está vacío</Text>;
  }

  // Calcula el total sumando los precios de los productos en el carrito
  const total = cart.reduce((acc, product) => {
    // Verifica si el precio del producto está definido
    if (typeof product.price === 'number') {
      return acc + product.price;
    }
    return acc;
  }, 0);

  return (
    <View>
      <Text>Total de la Canasta: ${total.toFixed(2)}</Text>
      {/* Renderiza los productos en el carrito */}
      {cart.map((product) => (
        <View key={product.id}>
          <Text>{product.name} - ${product.price ? product.price.toFixed(2) : 'Precio no disponible'}</Text>
        </View>
      ))}
    </View>
  );
}

export default CanastaScreen;