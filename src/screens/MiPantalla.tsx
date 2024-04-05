import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MiPantalla = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bienvenido a</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop:50,
  },
  text: {
    marginTop: 20,
    fontFamily: 'serif',
    color: 'pink',
    fontSize: 26,
  },
});

export default MiPantalla;