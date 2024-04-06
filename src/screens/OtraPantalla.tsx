import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OtraPantalla = () => {
  return (
    <View style={styles.container}>
      <Text>¡Hola desde MiPantalla!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default OtraPantalla;