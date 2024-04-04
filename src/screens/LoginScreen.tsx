// src/screens/LoginScreen.tsx

import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
const imagenFuente = require('../resources/assets/images/YaikiLogo.png'); // Importa la imagen correctamente

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={imagenFuente} style={styles.imagen} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagen: {
    width: 200,
    height: 200,
  },
});

export default LoginScreen;



