import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useTheme } from '../resources/assets/colors/ThemeContext';

const CustomizationScreen = () => {
  const { theme } = useTheme();
  const [points, setPoints] = useState(0);
  const [designs, setDesigns] = useState([]);

  const handleCreateDesign = () => {
    // Lógica para crear un nuevo diseño
    setDesigns([...designs, { id: designs.length + 1, name: `Diseño ${designs.length + 1}` }]);
    setPoints(points + 20);
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.title, { color: theme.text }]}>Personalización de Accesorios</Text>
      <Button title="Crear Nuevo Diseño" onPress={handleCreateDesign} />
      {designs.map((design) => (
        <Text key={design.id} style={[styles.design, { color: theme.text }]}>{design.name}</Text>
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
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  design: {
    fontSize: 20,
    marginTop: 10,
  },
  points: {
    fontSize: 20,
    marginTop: 20,
  },
});

export default CustomizationScreen;