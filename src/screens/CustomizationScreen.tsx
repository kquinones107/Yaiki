import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TextInput, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useTheme } from '../resources/assets/colors/ThemeContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';

const CustomizationScreen = ({ navigation }) => {
  const { theme } = useTheme();
  const [points, setPoints] = useState(0);
  const [designs, setDesigns] = useState([]);
  const [designName, setDesignName] = useState('');
  const [designType, setDesignType] = useState('Collar');
  const [designColor, setDesignColor] = useState('Rojo');
  const [attempts, setAttempts] = useState(0);
  const maxAttempts = 2;

  useEffect(() => {
    const loadAttempts = async () => {
      const today = new Date().toISOString().split('T')[0];
      const storedAttempts = await AsyncStorage.getItem(`attempts_${today}`);
      setAttempts(storedAttempts ? parseInt(storedAttempts, 10) : 0);
    };

    loadAttempts();
  }, []);

  const handleCreateDesign = async () => {
    if (attempts >= maxAttempts) {
      Alert.alert('Límite alcanzado', 'Has alcanzado el límite de intentos para hoy.');
      return;
    }

    if (designName) {
      setDesigns([...designs, { id: designs.length + 1, name: designName, type: designType, color: designColor }]);
      setPoints(points + 20);
      setDesignName('');
      setDesignType('Collar');
      setDesignColor('Rojo');
      const today = new Date().toISOString().split('T')[0];
      const newAttempts = attempts + 1;
      await AsyncStorage.setItem(`attempts_${today}`, newAttempts.toString());
      setAttempts(newAttempts);
    } else {
      Alert.alert('Error', 'Por favor, ingrese un nombre para el diseño.');
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.header}>
        <Icon name="arrow-back" size={30} color={theme.text} onPress={() => navigation.goBack()} />
      </View>
      <Text style={[styles.title, { color: theme.text }]}>Personalización de Accesorios</Text>
      <TextInput
        style={[styles.input, { color: theme.text, borderColor: theme.text }]}
        placeholder="Nombre del Diseño"
        placeholderTextColor={theme.text}
        value={designName}
        onChangeText={setDesignName}
      />
      <Picker
        selectedValue={designType}
        style={[styles.picker, { color: theme.text }]}
        onValueChange={(itemValue) => setDesignType(itemValue)}
      >
        <Picker.Item label="Collar" value="Collar" />
        <Picker.Item label="Pulsera" value="Pulsera" />
        <Picker.Item label="Anillo" value="Anillo" />
      </Picker>
      <Picker
        selectedValue={designColor}
        style={[styles.picker, { color: theme.text }]}
        onValueChange={(itemValue) => setDesignColor(itemValue)}
      >
        <Picker.Item label="Rojo" value="Rojo" />
        <Picker.Item label="Azul" value="Azul" />
        <Picker.Item label="Verde" value="Verde" />
      </Picker>
      <Button title="Crear Nuevo Diseño" onPress={handleCreateDesign} />
      {designs.map((design) => (
        <Text key={design.id} style={[styles.design, { color: theme.text }]}>
          {design.name} - {design.type} - {design.color}
        </Text>
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
  header: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '80%',
  },
  picker: {
    height: 50,
    width: '80%',
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
