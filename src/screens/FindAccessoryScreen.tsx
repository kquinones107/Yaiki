// import React, { useState, useEffect } from 'react';
// import { View, Text, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
// import { useTheme } from '../resources/assets/colors/ThemeContext';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import Icon from 'react-native-vector-icons/Ionicons';

// const FindAccessoryScreen = ({ navigation }) => {
//   const { theme } = useTheme();
//   const [points, setPoints] = useState(0);
//   const [attempts, setAttempts] = useState(0);
//   const [accessories, setAccessories] = useState([
//     { id: 1, x: 50, y: 100, found: false },
//     { id: 2, x: 120, y: 120, found: false },
//     { id: 3, x: 200, y: 150, found: false },
//     { id: 4, x: 300, y: 200, found: false },
//     { id: 5, x: 400, y: 250, found: false },
//     // Añadir más accesorios aquí
//   ]);
//   const maxAttempts = 2;

//   useEffect(() => {
//     const loadAttempts = async () => {
//       const today = new Date().toISOString().split('T')[0];
//       const storedAttempts = await AsyncStorage.getItem(`findAttempts_${today}`);
//       setAttempts(storedAttempts ? parseInt(storedAttempts, 10) : 0);
//     };

//     loadAttempts();
//   }, []);

//   const handlePress = (accessoryId) => {
//     if (attempts >= maxAttempts) {
//       Alert.alert('Límite alcanzado', 'Has alcanzado el límite de intentos para hoy.');
//       return;
//     }

//     setAccessories((prevAccessories) =>
//       prevAccessories.map((acc) => {
//         if (acc.id === accessoryId && !acc.found) {
//           const updatedAcc = { ...acc, found: true };
//           setPoints(points + 10);
//           updateAttempts();
//           return updatedAcc;
//         }
//         return acc;
//       })
//     );
//   };

//   const updateAttempts = async () => {
//     const today = new Date().toISOString().split('T')[0];
//     const newAttempts = attempts + 1;
//     await AsyncStorage.setItem(`findAttempts_${today}`, newAttempts.toString());
//     setAttempts(newAttempts);
//   };

//   return (
//     <View style={[styles.container, { backgroundColor: theme.background }]}>
//       <View style={styles.header}>
//         <Icon name="arrow-back" size={30} color={theme.text} onPress={() => navigation.goBack()} />
//       </View>
//       <Text style={[styles.title, { color: theme.text }]}>Encuentra los Accesorios</Text>
//       <Image source={require('../resources/assets/photos/Aretes_4.jpg')} style={styles.image} />
//       {accessories.map((accessory) => (
//         <TouchableOpacity
//           key={accessory.id}
//           style={[styles.accessory, { top: accessory.y, left: accessory.x, backgroundColor: accessory.found ? 'rgba(0, 255, 0, 0.5)' : 'rgba(255, 0, 0, 0.5)' }]}
//           onPress={() => handlePress(accessory.id)}
//         />
//       ))}
//       <Text style={[styles.points, { color: theme.text }]}>Puntos: {points}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   header: {
//     position: 'absolute',
//     top: 40,
//     left: 20,
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 20,
//   },
//   image: {
//     width: '100%',
//     height: 400,
//     resizeMode: 'contain',
//   },
//   accessory: {
//     position: 'absolute',
//     width: 20,
//     height: 20,
//     borderRadius: 10,
//   },
//   points: {
//     fontSize: 20,
//     marginTop: 20,
//   },
// });

// export default FindAccessoryScreen;