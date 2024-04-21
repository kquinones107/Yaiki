import React, {useContext} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {CartContext} from '../../CartContext';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';

const Product = ({product}) => {
  console.log('🚀 ~ Product ~ product:', product);
  return (
    <View style={styles.product}>
      <Image source={product.image} style={styles.image} />
      <View style={styles.body}>
        <Text style={styles.price}>${product.price.toFixed(2)}</Text>
        <Text style={styles.productTitle}>{product.name}</Text>
        <Text
          style={styles.productTitle}>{`Cantidad: ${product.quantity}`}</Text>
        <TouchableOpacity>
          <Text style={styles.addText}>Añadir Mas</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const CanastaScreen = () => {
  const {cart} = useContext(CartContext);
  const insets = useSafeAreaInsets();

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
    <ScrollView
      style={{marginTop: insets.top}}
      showsVerticalScrollIndicator={false}>
      <Text style={styles.header}>{`Cesta(${cart.length})`}</Text>

      {cart.map((product, index) => (
        <View key={`${product.id}${index}`}>
          <Product product={product} />
        </View>
      ))}
      <View style={styles.divider} />
      <View style={styles.totalContainer}>
        <Text style={styles.totalLabel}>Total (Antes de impuestos)</Text>
        <Text style={styles.totalPrice}>${total.toFixed(2)}</Text>
      </View>
      <Text style={styles.importText}>
        Recuerde que los costes de importación corresponden a los derechos,
        aranceles e impuestos establecidos por cada gobierno local. Más Info.
      </Text>
      <TouchableOpacity style={styles.checkoutButton}>
        <Text style={styles.checkoutButtonText}>TRAMITAR PEDIDO</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default CanastaScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignContent: 'center',
    flexGrow: 1,
  },
  imageContainer: {
    padding: 10,
    flex: 1,
  },
  image: {
    maxHeight: 150,
    maxWidth: 150,
  },
  body: {flexDirection: 'column', flex: 1, marginLeft: 20},
  product: {
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row',
    marginBottom: 10,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  productTitle: {
    fontSize: 16,
    flexWrap: 'wrap',
    flex: 1,
  },
  totalContainer: {
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#e1e1e1',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
    marginLeft: 20,
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: '300',
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: '600',
  },
  importText: {
    fontSize: 12,
    color: 'grey',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  checkoutButton: {
    backgroundColor: 'green',
    paddingVertical: 15,
    marginHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  checkoutButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
  divider: {
    height: 1,
    backgroundColor: '#e1e1e1',
    marginVertical: 20,
  },
  promoCodeText: {
    fontSize: 16,
  },
  addText: {
    fontSize: 16,
    color: 'blue',
  },
});
