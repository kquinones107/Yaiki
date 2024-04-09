import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  Image, 
  TouchableOpacity, 
  StyleSheet, 
  ImageBackground, 
  FlatList 
} from 'react-native';

const Home = () => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const backgrounds = [require('../resources/assets/photos/Foto_1.jpg'), require('../resources/assets/photos/Foto_2.jpg'), require('../resources/assets/photos/Foto_3.jpg')];

  useEffect(() => {
    const timer = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
     
    }, 2000); // Cambia la imagen cada 5 segundos (5000 ms)

    return () => clearInterval(timer); // Limpia el temporizador al desmontar el componente
  }, []);

  return (
    <View style={styles.container}>
      {/* FlatList para mostrar múltiples imágenes de fondo */}
      <FlatList
        data={backgrounds}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <ImageBackground source={item} style={styles.background}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>YAIKI ACESORIOS</Text>
            </View>
          </ImageBackground>
        )}
        onMomentumScrollEnd={(event) => {
          const index = Math.floor(event.nativeEvent.contentOffset.x / event.nativeEvent.layoutMeasurement.width);
          setBackgroundIndex(index);
          console.log('Índice actual:', index);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    width: 400,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // fondo semi-transparente
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  title: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Home;

