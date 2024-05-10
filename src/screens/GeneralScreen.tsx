import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import Toast from 'react-native-toast-message';
import { CartContext } from '../../CartContext';
import { useTheme } from '../resources/assets/colors/ThemeContext';


const ProductItem = ({ product, onPressAddToCart }) => {
    const { theme } = useTheme();
    const styles = getStyles();
    return (
      <View style={styles.card}>
        <Image source={product.image} style={styles.image} />
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
        <Button title="Agregar al carrito" onPress={onPressAddToCart} color={theme.logo}/>
      </View>
    );
  };
  
  const GeneralScreen = ({products}) => {
    const styles = getStyles();
    const { addToCart, showSuccessMessage } = useContext(CartContext);
  
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
          <View style={{ height: 100 }} />
        </ScrollView>
      </View>
    );
  };
  
  const getStyles = () => {
    const { theme } = useTheme();
    return StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.background,
      },
      card: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 10,
        marginBottom: 20,
        alignItems: 'center',
        minWidth: '90%',
        backgroundColor: theme.primary,
        marginHorizontal: 20,
        paddingBottom: 15,
      },
      image: {
        maxWidth: '100%',
        maxHeight: 200,
        marginBottom: 10,
        borderRadius: 10,
      },
      name: {
        fontSize: 28,
        marginBottom: 5,
        fontWeight: 'bold',
        fontFamily: 'IndieFlower',
        color: theme.secondary,
      },
      price: {
        fontSize: 14,
        marginBottom: 10,
        fontFamily: 'Exo2-Regular',
        color: theme.secondary,
      },
      message: {
        fontSize: 16,
        fontWeight: 'bold',
        color: theme.secondary,
        marginTop: 10,
      },
      button: {
        color: theme.secondary,
      },
    });
  };
  
  export default GeneralScreen;
  