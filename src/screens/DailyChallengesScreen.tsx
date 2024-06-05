import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useTheme } from '../resources/assets/colors/ThemeContext';

const DailyChallengesScreen = () => {
  const { theme } = useTheme();
  const [points, setPoints] = useState(0);
  const [challenges, setChallenges] = useState([
    { id: 1, text: 'Compra un anillo hoy', completed: false },
    { id: 2, text: 'Comparte nuestra app en redes sociales', completed: false },
    // Añadir más desafíos aquí
  ]);

  const handleCompleteChallenge = (challengeId) => {
    const updatedChallenges = challenges.map((challenge) => {
      if (challenge.id === challengeId && !challenge.completed) {
        challenge.completed = true;
        setPoints(points + 50);
      }
      return challenge;
    });
    setChallenges(updatedChallenges);
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.title, { color: theme.text }]}>Desafíos Diarios</Text>
      {challenges.map((challenge) => (
        <View key={challenge.id} style={styles.challenge}>
          <Text style={[styles.challengeText, { color: theme.text }]}>{challenge.text}</Text>
          <Button
            title="Completar"
            onPress={() => handleCompleteChallenge(challenge.id)}
            disabled={challenge.completed}
          />
        </View>
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