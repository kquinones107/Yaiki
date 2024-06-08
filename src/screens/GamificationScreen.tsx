import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../resources/assets/colors/ThemeContext';

const GamificationScreen = () => {
  const navigation = useNavigation();
  const { theme } = useTheme();
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Yaiki Game</Text>
      <Text style={styles.text}> 
        Juega, diviértete, gana puntos y obtendrás descuentos en el valor total de tus compras. ¿Qué esperas para jugar?</Text>
      <Text> </Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Quiz')}>
        <Text style={styles.buttonText}>Realizar Quiz</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('FindAccessory')}>
        <Text style={styles.buttonText}>Encuentra los Accesorios</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Customization')}>
        <Text style={styles.buttonText}>Personaliza tu Accesorio</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('DailyChallenges')}>
        <Text style={styles.buttonText}>Desafíos Diarios</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Survey')}>
        <Text style={styles.buttonText}>Encuesta de Satisfacción</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GamificationScreen;


const getStyles = () => {
    const { theme } = useTheme();
    return StyleSheet.create({
      content: {
        backgroundColor: theme.background,
      },
      container: {
        flex: 1,
        backgroundColor: theme.background,
        //justifyContent: 'center',
        alignItems: 'center',
      },
        title: {
            fontSize: 36,
            color: theme.text,
            margin: 20,
            fontFamily: 'Caveat-Bold'
        },
        button: {
            backgroundColor: theme.logo,
            padding: 10,
            margin: 10,
            borderRadius: 5,
            width: '50%',
            alignItems: 'center',
        },
        buttonText: {
            color: theme.accent,
            textAlign: 'center',
            fontFamily: 'Exo2-Bold'
        },
        text: {
            color: theme.text,
            fontSize: 18,
            textAlign: 'center',
            margin: 20,
            fontFamily: 'Exo2-Bold'
        }
    });
  };