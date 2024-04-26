import React, {useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {CartContext} from '../../CartContext';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const Product = ({product}) => {

  const Añadirmaspress = useNavigation();

  const onAñadirMasPress = () => {
    
    Añadirmaspress.navigate('Menu');
  };

  return (
    <View style={styles.product}>
      <Image source={product.image} style={styles.image} />
      <View style={styles.body}>
        <Text style={styles.price}>${product.price.toFixed(2)}</Text>
        <Text style={styles.productTitle}>{product.name}</Text>
        <Text
          style={styles.productTitle}>{`Cantidad: ${product.quantity}`}</Text>
        <TouchableOpacity
          onPress={onAñadirMasPress}>
          <Text style={styles.addText}>Añadir Mas</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const CanastaScreen = () => {
  const {cart} = useContext(CartContext);
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  

  const onDiscoverPress = () => {
    navigation.navigate('Inicio');
    Añadirmaspress.navigate('Menu');
  };
  
  if (!cart || cart.length === 0) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Cesta</Text>
        <View style={styles.contentContainer}>
          <Image
            source={require('../resources/assets/images/CarritoVacio.png')} // Debes reemplazar esto con la URL o recurso local de tu imagen
            style={styles.cartImage}
          />
          <Text style={styles.emptyCartText}>Cesta vacía</Text>
          <Text style={styles.descriptionText}>
            Aún no tienes ningún artículo en la cesta, descubre todo lo que
            tenemos para ti
          </Text>
          <TouchableOpacity
            style={styles.discoverButton}
            onPress={onDiscoverPress}>
            <Text style={styles.discoverButtonText}>DESCUBRIR</Text>
          </TouchableOpacity>
        </View>
        {/* Aquí agregarías tu componente de menú o navegación si lo tienes */}
      </SafeAreaView>
    );
  }

  const total = cart.reduce((acc, product) => {
    // Verificar si el precio del producto está definido y es un número
    if (
      product.price !== undefined &&
      product.quantity !== undefined &&
      typeof product.price === 'number' &&
      typeof product.quantity === 'number'
    ) {
      return acc + product.price * product.quantity;
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
        <Text style={styles.totalLabel}>Total</Text>
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
    fontFamily: 'Exo2-Bold',
    fontSize: 20,
  },
  productTitle: {
    fontSize: 18,
    flexWrap: 'wrap',
    flex: 1,
    fontFamily: 'IndieFlower-Regular',
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
    marginVertical: 10,
    marginLeft: 20,
    fontFamily: 'Caveat-Bold',
  },
  totalLabel: {
    fontSize: 20,
    fontWeight: '300',
    fontFamily: 'IndieFlower-Regular',
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Exo2-Bold',
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
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  cartImage: {
    width: 150, // Ajusta el tamaño según tu diseño
    height: 150, // Ajusta el tamaño según tu diseño
    resizeMode: 'contain',
  },
  emptyCartText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  descriptionText: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  discoverButton: {
    marginTop: 30,
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
  },
  discoverButtonText: {
    color: 'white',
    fontSize: 18,
  },
});
