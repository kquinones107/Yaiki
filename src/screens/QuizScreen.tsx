import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTheme } from '../resources/assets/colors/ThemeContext';
import questions from '../resources/assets/basesdatos/questions.json';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const QuizScreen = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(5);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const { theme } = useTheme();
  const styles = getStyles(theme);
  const navigation = useNavigation();

  const totalQuestions = 7;

  useEffect(() => {
    const initializeQuiz = async () => {
      const shuffledQuestions = shuffleArray(questions).slice(
        0,
        totalQuestions
      );
      setSelectedQuestions(shuffledQuestions);
      setIsLoading(false);
    };

    initializeQuiz();
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      handleNextQuestion();
    }
    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setTimeLeft(5);
    } else {
      setShowResults(true);
    }
  };

  const handleAnswerPress = (answer) => {
    if (answer.correct) {
      setScore(score + 10);
    }
    handleNextQuestion();
  };

  const handleRetryPress = () => {
    setCurrentQuestionIndex(0);
    setShowResults(false);
    setScore(0);
    setTimeLeft(5);
    const shuffledQuestions = shuffleArray(questions).slice(0, totalQuestions);
    setSelectedQuestions(shuffledQuestions);
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
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Icon name="arrow-back" size={30} color={theme.text} />
      </TouchableOpacity>
      {!showResults ? (
        <View>
          <Text style={styles.question}>
            {selectedQuestions[currentQuestionIndex].question}
          </Text>
          <Text style={styles.timer}>Tiempo restante: {timeLeft}s</Text>
          {selectedQuestions[currentQuestionIndex].answers.map(
            (answer, index) => (
              <TouchableOpacity
                key={index}
                style={styles.answerButton}
                onPress={() => handleAnswerPress(answer)}
              >
                <Text style={styles.answerButtonText}>{answer.text}</Text>
              </TouchableOpacity>
            )
          )}
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

const getStyles = (theme) =>
  StyleSheet.create({
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
    timer: {
      fontSize: 20,
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
    backButton: {
      position: 'absolute',
      top: 40,
      left: 20,
      backgroundColor: 'transparent', // No background color
      padding: 10,
    },
  });

export default QuizScreen;
