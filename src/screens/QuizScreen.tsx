import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useTheme } from '../resources/assets/colors/ThemeContext';

const questions = [
  {
    question: "¿Cuál es el material más utilizado en nuestras pulseras?",
    options: ["Oro", "Plata", "Cuero"],
    correctOption: "Cuero",
  },
  // Añade más preguntas aquí
];

const QuizScreen = () => {
  const { theme } = useTheme();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [points, setPoints] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestionIndex].correctOption) {
      setPoints(points + 10);
    }
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {showResult ? (
        <Text style={[styles.result, { color: theme.text }]}>
          ¡Has terminado el quiz! Puntos totales: {points}
        </Text>
      ) : (
        <View>
          <Text style={[styles.question, { color: theme.text }]}>
            {questions[currentQuestionIndex].question}
          </Text>
          {questions[currentQuestionIndex].options.map((option, index) => (
            <Button
              key={index}
              title={option}
              onPress={() => handleAnswer(option)}
            />
          ))}
        </View>
      )}
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
  question: {
    fontSize: 24,
    marginBottom: 20,
  },
  result: {
    fontSize: 24,
    marginTop: 20,
  },
});

export default QuizScreen;