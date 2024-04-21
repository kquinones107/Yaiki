import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { CartContext } from '../../CartContext';

const CanastaScreen = () => {
  const { cart } = useContext(CartContext);

  if (!cart || cart.length === 0) {
    return <Text>El carrito está vacío</Text>;
  }

  const total = cart.reduce((acc, product) => {
    // Verificar si el precio del producto está definido y es un número
    if (product.price !== undefined && typeof product.price === 'number') {
      return acc + product.price;
    }
    return acc;
  }, 0);

  return (
    <View style={{flexGrow: 1, alignItems: 'center' , alignContent: 'center'}}>
      <Text>Total de la Canasta: ${total.toFixed(2)}</Text>
      {cart.map((product, index) => (
        <View key={`${product.id}${index}`}>
          <Text>{product.name} - ${product.price.toFixed(2)}</Text>
        </View>
      ))}
    </View>
  );
};

export default CanastaScreen;