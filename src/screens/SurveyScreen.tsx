import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { useTheme } from '../resources/assets/colors/ThemeContext';

const SurveyScreen = () => {
  const { theme } = useTheme();
  const [points, setPoints] = useState(0);
  const [satisfaction, setSatisfaction] = useState('');

  const handleCompleteSurvey = () => {
    if (satisfaction) {
      setPoints(points + 30);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.title, { color: theme.text }]}>Encuesta de Satisfacción</Text>
      <Text style={[styles.question, { color: theme.text }]}>¿Cómo calificarías tu experiencia de compra?</Text>
      <TextInput
        style={[styles.input, { backgroundColor: theme.inputBackground, color: theme.text }]}
        value={satisfaction}
        onChangeText={setSatisfaction}
        placeholder="Escribe tu opinión aquí"
        placeholderTextColor={theme.placeholderText}
      />
      <Button title="Enviar" onPress={handleCompleteSurvey} />
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
  question: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    width: '100%',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  points: {
    fontSize: 20,
    marginTop: 20,
  },
});

export default SurveyScreen;