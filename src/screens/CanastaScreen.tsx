import React, { useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Alert,
  Linking,
} from 'react-native';
import { CartContext } from '../../CartContext';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../resources/assets/colors/ThemeContext';
import { Button } from 'react-native';

const Product = ({ product }) => {
  const { removeFromCart } = useContext(CartContext);
  const styles = getStyles();

  const Añadirmaspress = useNavigation();

  const onAñadirMasPress = () => {

    Añadirmaspress.navigate('Menu');
  };

  const deletePress = () => {
    removeFromCart(product.id);
  }

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
      <View style={styles.delete}>
        <TouchableOpacity
          onPress={deletePress}>
          <MaterialIcon name="delete" size={23} color="#3b5998" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const CanastaScreen = () => {
  const { cart } = useContext(CartContext);
  const {toggleTheme} = useTheme();
  const styles = getStyles();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const CheckoutPress = useNavigation();

  const onDiscoverPress = () => {
    navigation.navigate('Inicio');
  };
  const phoneNumber = '+573187887223';
  const message = '¡Hola! Me gustaría comprar los siguientes productos:';

  const sendMessage = async () => {
    try {
      // Verificar si products está definido
      if (cart) {
        // Encode the message to ensure that spaces and special characters are handled correctly
        const encodedMessage = encodeURIComponent(
          `${message}\n\nProductos:\n${cart
            .map(
              (product: { name: any; price: any }) =>
                `${product.name} - ${product.price}`,
            )
            .join('\n')}`,
        );

        // Create the WhatsApp link
        const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        Linking.openURL(url);
      } else {
        console.error('Error: Products is undefined');
        Alert.alert('Error', 'No products available for sending message.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      Alert.alert('Error', 'An error occurred while sending the message.');
    }
  };

  const onCheckoutPress = () => {
    CheckoutPress.navigate('Whatsapp', { products: cart });
  };

  if (!cart || cart.length === 0) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Carrito</Text>
        <View style={styles.contentContainer}>
          <Image
            source={require('../resources/assets/images/CarritoVacio.png')} // Debes reemplazar esto con la URL o recurso local de tu imagen
            style={styles.cartImage}
          />
          <Text style={styles.descriptionText}>
            Aún no tienes ningún artículo en la cesta, descubre todo lo que
            tenemos para ti
          </Text>
          <TouchableOpacity
            style={styles.discoverButton}
            onPress={onDiscoverPress}>
            <Text style={styles.discoverButtonText}>DESCUBRIR</Text>
          </TouchableOpacity>
        <Button title="Toggle Theme" onPress={toggleTheme} />
        </View>
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
      style={[styles.container, { paddingTop: insets.top },]}
      showsVerticalScrollIndicator={false}>
      <View>
        <Text style={styles.header}>{`Carrito(${cart.length})`}</Text>

        {cart.map((product, index) => (
          <View key={`${product.id}${index}`}>
            <Product product={product} />
          </View>
        ))}
      </View>
      <View style={styles.divider} />
      <View style={styles.totalContainer}>
        <Text style={styles.totalLabel}>Total</Text>
        <Text style={styles.totalPrice}>${total.toFixed(2)}</Text>
      </View>
      <Text style={styles.importText}>
        Recuerde que los costes de importación corresponden a los derechos,
        aranceles e impuestos establecidos por cada gobierno local. Más Info.
      </Text>
      <TouchableOpacity
        style={styles.checkoutButton}
        onPress={sendMessage}>
        <Text style={styles.checkoutButtonText}>TRAMITAR PEDIDO</Text>
      </TouchableOpacity>
      <View style={{ height: 200 }}/>
    </ScrollView>
  );
};

export default CanastaScreen;

const getStyles = () => {
  const { theme } = useTheme();
  return StyleSheet.create({
    content: {
      backgroundColor: theme.background,
    },
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    imageContainer: {
      padding: 10,
      flex: 1,
      borderRadius: 20,
    },
    image: {
      height: '100%',
      maxWidth: 150,
      borderEndStartRadius: 20,
      borderTopStartRadius: 20,
    },
    body: { flexDirection: 'column', flex: 1, marginLeft: 20, paddingVertical:20 },
    delete: {paddingVertical: 20},
    product: {
      marginLeft: 20,
      marginRight: 20,
      flexDirection: 'row',
      marginBottom: 10,
      backgroundColor: theme.white,
      borderRadius: 20,
      paddingRight: 10,
    },
    price: {
      fontFamily: 'Exo2-Bold',
      fontSize: 20,
      color: theme.text,
    },
    productTitle: {
      fontSize: 18,
      flexWrap: 'wrap',
      flex: 1,
      fontFamily: 'IndieFlower',
      color: theme.accent,
    },
    totalContainer: {
      flexGrow: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 20,
      borderTopWidth: 1,
      color: theme.accent,
    },
    header: {
      fontSize: 22,
      marginVertical: 10,
      marginLeft: 20,
      fontFamily: 'Caveat-Bold',
      color: theme.primary,
    },
    totalLabel: {
      fontSize: 20,
      fontWeight: '300',
      fontFamily: 'IndieFlower',
      color: theme.primary,
    },
    totalPrice: {
      fontSize: 18,
      fontWeight: '600',
      fontFamily: 'Exo2-Bold',
      color: theme.text,
    },
    importText: {
      fontSize: 12,
      color: theme.accent,
      paddingHorizontal: 20,
      marginBottom: 20,
    },
    checkoutButton: {
      backgroundColor: theme.primary,
      paddingVertical: 15,
      marginHorizontal: 20,
      borderRadius: 5,
      marginBottom: 10,
    },
    checkoutButtonText: {
      color: theme.logo,
      textAlign: 'center',
      fontSize: 16,
      fontWeight: '600',
      fontFamily: 'Caveat-Bold',
    },
    divider: {
      height: 1,
      backgroundColor: '#e1e1e1',
      marginVertical: 20,
    },
    addText: {
      fontSize: 16,
      color: theme.link,
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
      fontSize: 26,
      fontFamily: 'Caveat-Bold',
      marginVertical: 20,
    },
    descriptionText: {
      fontSize: 16,
      textAlign: 'center',
      paddingHorizontal: 20,
      fontFamily: 'Exo2-Regular',
      color: 'grey',
    },
    discoverButton: {
      marginTop: 30,
      backgroundColor: theme.logo,
      padding: 10,
      borderRadius: 5,
      width: '90%',
    },
    discoverButtonText: {
      color: theme.accent,
      fontSize: 22,
      fontFamily: 'Caveat-Bold',
      textAlign: 'center',
    },
  });
};
