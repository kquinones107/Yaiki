import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../resources/assets/colors/ThemeContext';

const FindAccessoryScreen = () => {
  const { theme } = useTheme();
  const [points, setPoints] = useState(0);

  const accessories = [
    // Coordenadas x, y de los accesorios en la imagen
    { id: 1, x: 50, y: 100, found: false },
    { id: 2, x: 120, y: 120, found: false },
    // Añadir más accesorios aquí
  ];

  const handlePress = (accessory) => {
    if (!accessory.found) {
      accessory.found = true;
      setPoints(points + 10);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.title, { color: theme.text }]}>Encuentra los Accesorios</Text>
      <Image source={require('../resources/assets/photos/Aretes_4.jpg')} style={styles.image} />
      {accessories.map((accessory) => (
        <TouchableOpacity
          key={accessory.id}
          style={[styles.accessory, { top: accessory.y, left: accessory.x }]}
          onPress={() => handlePress(accessory)}
        />
      ))}
      <Text style={[styles.points, { color: theme.text }]}>Puntos: {points}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 400,
    resizeMode: 'contain',
  },
  accessory: {
    position: 'absolute',
    width: 20,
    height: 20,
    backgroundColor: 'rgba(255, 0, 0, 0.5)',
    borderRadius: 10,
  },
  points: {
    fontSize: 20,
    marginTop: 20,
  },
});

export default FindAccessoryScreen;