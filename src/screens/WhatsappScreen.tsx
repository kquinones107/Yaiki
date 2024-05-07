import React, {useContext} from 'react';
import { TouchableOpacity, Text, Linking, Alert, StyleSheet, View } from 'react-native';
import { CartContext } from '../../CartContext';



const WhatsappScreen = ({ phoneNumber, message, route }) => {
    const { cart } = useContext(CartContext); 
    const products = route.params.products; 
  
    const sendMessage = async () => {
      try {
        // Verificar si products está definido
        if (products) {
          // Encode the message to ensure that spaces and special characters are handled correctly
          const encodedMessage = encodeURIComponent(`${message}\n\nProductos:\n${cart.map(product => `${product.name} - ${product.price}`).join('\n')}`);
  
          // Create the WhatsApp link
          const url = `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`;
  
          // Check if the device can handle this URL
          const canOpen = await Linking.canOpenURL(url);
          if (canOpen) {
            Linking.openURL(url);
          } else {
            Alert.alert('Error', 'Unable to open WhatsApp. Please ensure it is installed on your device.');
          }
        } else {
          console.error('Error: Products is undefined');
          Alert.alert('Error', 'No products available for sending message.');
        }
      } catch (error) {
        console.error('Error sending message:', error);
        Alert.alert('Error', 'An error occurred while sending the message.');
      }
    };
  
    return (
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Text style={styles.header}>Para poder enviarle sus accesorios a casa, por favor pulse el botón "FINALIZAR COMPRA"</Text>
          </View>
          <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
             <Text style={styles.sendButtonText}>FINALIZAR COMPRA</Text>
          </TouchableOpacity>
          <View style={styles.notaContainer}>
            <Text style={styles.nota}>Nota: te comunicarás con Yaiki para enviarte toda la información del envío de sus productos.</Text>
          </View>
        </View>
      );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between', // Esto hará que los elementos se distribuyan verticalmente
      alignItems: 'center',
      paddingVertical: 50, // Espacio vertical entre los elementos
    },
    headerContainer: {
      alignItems: 'center', // Alinea el texto en el centro horizontal
    },
    sendButton: {
      backgroundColor: 'pink',
      padding: 10,
      borderRadius: 5,
    },
    sendButtonText: {
      color: 'gray',
      fontSize: 22,
      fontFamily: 'Caveat-Bold',
    },
    header: {
      fontSize: 18,
      textAlign: 'center',
      fontFamily: 'IndieFlower-Regular',
    },
    notaContainer: {
      alignSelf: 'stretch', // Asegura que la vista abarque todo el ancho
      paddingHorizontal: 20, // Espaciado horizontal
    },
    nota: {
      fontSize: 12,
      marginTop: 25, // Espacio entre el botón y el mensaje de nota
    },
  });
  
  export default WhatsappScreen;