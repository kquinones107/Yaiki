import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from '../resources/assets/colors/ThemeContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import Share from 'react-native-share';

const DailyChallengesScreen = () => {
  const { theme } = useTheme();
  const navigation = useNavigation();
  const [points, setPoints] = useState(0);
  const [challenges, setChallenges] = useState([
    { id: 1, text: 'Compra un anillo hoy', completed: false, action: 'buy' },
    { id: 2, text: 'Comparte nuestra app en redes sociales', completed: false, action: 'share' },
    // Añadir más desafíos aquí
  ]);
  const maxChallenges = 2;

  useEffect(() => {
    const loadState = async () => {
      const today = new Date().toISOString().split('T')[0];
      const storedChallenges = await AsyncStorage.getItem(`challenges_${today}`);
      const storedPoints = await AsyncStorage.getItem('points');
      if (storedChallenges) {
        setChallenges(JSON.parse(storedChallenges));
      }
      if (storedPoints) {
        setPoints(parseInt(storedPoints, 10));
      }
    };

    loadState();
  }, []);

  useEffect(() => {
    const saveState = async () => {
      const today = new Date().toISOString().split('T')[0];
      await AsyncStorage.setItem(`challenges_${today}`, JSON.stringify(challenges));
      await AsyncStorage.setItem('points', points.toString());
    };

    saveState();
  }, [challenges, points]);

  const handleCompleteChallenge = (challenge) => {
    const completedChallenges = challenges.filter(c => c.completed).length;
    if (completedChallenges >= maxChallenges) {
      Alert.alert('Límite alcanzado', 'Has alcanzado el límite de desafíos completados para hoy.');
      return;
    }

    if (challenge.action === 'buy') {
      navigation.navigate('Menu'); // Asegúrate de tener la ruta configurada
    } else if (challenge.action === 'share') {
      handleShare();
    }

    const updatedChallenges = challenges.map((c) => {
      if (c.id === challenge.id && !c.completed) {
        setPoints(points + 50);
        return { ...c, completed: true };
      }
      return c;
    });
    setChallenges(updatedChallenges);
  };

  const handleShare = async () => {
    try {
      const shareOptions = {
        message: '¡Echa un vistazo a esta increíble aplicación!',
      };
      await Share.open(shareOptions);
    } catch (error) {
      console.log('Error al compartir:', error);
    }
  };

  const handleRetry = () => {
    const resetChallenges = challenges.map(challenge => ({ ...challenge, completed: false }));
    setChallenges(resetChallenges);
    setPoints(0);
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={24} color={theme.text} />
      </TouchableOpacity>
      <Text style={[styles.title, { color: theme.text }]}>Desafíos Diarios</Text>
      {challenges.map((challenge) => (
        <View key={challenge.id} style={styles.challenge}>
          <Text style={[styles.challengeText, { color: theme.text }]}>{challenge.text}</Text>
          <Button
            title={challenge.completed ? 'Completado' : 'Completar'}
            onPress={() => handleCompleteChallenge(challenge)}
            disabled={challenge.completed}
          />
        </View>
      ))}
      <Text style={[styles.points, { color: theme.text }]}>Puntos: {points}</Text>
      <Button title="Volver a Intentarlo" onPress={handleRetry} />
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
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  challenge: {
    marginVertical: 10,
    alignItems: 'center',
  },
  challengeText: {
    fontSize: 18,
    marginBottom: 10,
  },
  points: {
    fontSize: 20,
    marginTop: 20,
  },
});

export default DailyChallengesScreen;
