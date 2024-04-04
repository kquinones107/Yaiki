import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MiPantalla = () => {
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

export default MiPantalla;