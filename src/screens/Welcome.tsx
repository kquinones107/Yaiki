import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import * as GoogleFonts from 'react-native-google-fonts';



const Welcome = ({ navigation }) => {
  const handleComencemosPress = () => {
    console.log('Navegando a Home...');
    navigation.navigate('Home');
  };


  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bienvenido a</Text>
      <Image source={require('../resources/assets/images/Logo_1.png')} style={styles.logo} />
      <Text style={styles.subtittle}> Dale un toque extra a tu oufit con estos espectaculares accesorios</Text>
      <TouchableOpacity style={styles.button} onPress={handleComencemosPress}>
        <Text style={styles.buttonText}>Comencemos</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop:50,
  },
  text: {
    marginTop: 20,
    fontFamily: 'Caveat-Regular',
    color: 'pink',
    fontSize: 30,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  subtittle: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'IndieFlower-Regular'
  },
  button: {
    backgroundColor: 'pink',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 24,
    color: 'gray',
    fontFamily: 'Caveat-Bold',
  },
});

export default Welcome;