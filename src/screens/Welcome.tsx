import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useTheme } from '../resources/assets/colors/ThemeContext';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';



const Welcome = () => {
  const styles = getStyles();
  const navigation = useNavigation();
  const handleComencemosPress = () => {
    console.log('Navegando a Home...');
    navigation.navigate('Home');
  };


  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bienvenido a</Text>
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>YAIKI</Text>
        <Text style={styles.logo2}>accesorios</Text>
      </View>
      <Text style={styles.subtittle}> Dale un toque extra a tu oufit con estos espectaculares accesorios</Text>
      <TouchableOpacity style={styles.button} onPress={handleComencemosPress}>
        <Text style={styles.buttonText}>COMENCEMOS</Text>
      </TouchableOpacity>
    </View>
  );
};

const getStyles = () => {
  const { theme } = useTheme();
  const insets = useSafeAreaInsets();
  return StyleSheet.create({
    container: {
      backgroundColor: theme.background,
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingTop: insets.top,
    },
    text: {
      flex: 1,
      marginTop: 20,
      fontFamily: 'Caveat-Regular',
      color: theme.text,
      fontSize: 60,
    },
    logoContainer:
    {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    logo: {
      fontFamily: 'Honk-Regular',
      color: theme.text,
      fontSize: 120,
      marginBottom: -60,
    },
    logo2: {
      fontFamily: 'Honk-Regular',
      color: theme.text,
      fontSize: 45,
    },
    subtittle: {
      flex: 1,
      fontSize: 32,
      textAlign: 'center',
      fontFamily: 'Caveat-Regular',
    },
    button: {
      flex: 1,
      backgroundColor: theme.primary,
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      width: '80%',
      maxHeight: 50,
      marginBottom: insets.bottom,
    },
    buttonText: {
      color: theme.secondary,
      fontSize: 24,
      fontFamily: 'Caveat-Bold',
      textAlign: 'center',
    },
  });
}

export default Welcome;