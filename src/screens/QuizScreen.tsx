import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { useTheme } from '../resources/assets/colors/ThemeContext';
import questions from '../resources/assets/basesdatos/questions.json';

const QuizScreen = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [isLoading, setIsLoading] = useState(false); // No necesitas cargar, ya tienes las preguntas
  const { theme } = useTheme();
  const styles = getStyles(theme);

  const handleAnswerPress = (answer) => {
    if (answer.correct) {
      setScore(score + 10);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleRetryPress = () => {
    setCurrentQuestionIndex(0);
    setShowResults(false);
    setScore(0);
  };

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={theme.text} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {!showResults ? (
        <View>
          <Text style={styles.question}>
            {questions[currentQuestionIndex].question}
          </Text>
          {questions[currentQuestionIndex].answers.map((answer, index) => (
            <TouchableOpacity
              key={index}
              style={styles.answerButton}
              onPress={() => handleAnswerPress(answer)}
            >
              <Text style={styles.answerButtonText}>{answer.text}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ) : (
        <View>
          <Text style={styles.resultText}>¡Quiz completado!</Text>
          <Text style={styles.scoreText}>Puntuación Total: {score}</Text>
          <TouchableOpacity style={styles.retryButton} onPress={handleRetryPress}>
            <Text style={styles.retryButtonText}>Volver a Intentarlo</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const getStyles = (theme) => StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.background,
  },
  question: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.text,
    marginBottom: 20,
  },
  answerButton: {
    backgroundColor: theme.accent,
    padding: 10,
    margin: 10,
    borderRadius: 5,
    width: '80%',
  },
  answerButtonText: {
    color: theme.white,
    textAlign: 'center',
    fontSize: 18,
  },
  resultText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.text,
    marginBottom: 20,
  },
  scoreText: {
    fontSize: 20,
    color: theme.text,
    marginBottom: 20,
  },
  retryButton: {
    backgroundColor: theme.primary,
    padding: 10,
    borderRadius: 5,
    width: '80%',
  },
  retryButtonText: {
    color: theme.secondary,
    textAlign: 'center',
    fontSize: 18,
  },
});

export default QuizScreen;