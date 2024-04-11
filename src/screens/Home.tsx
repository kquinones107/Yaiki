import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  Image, 
  TouchableOpacity, 
  StyleSheet, 
  ImageBackground, 
  FlatList, 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ProductSection = ({title, products}) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style= {styles.sectionTitle}>{title}</Text>
      <FlatList 
        data={products}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Image source={item} style={styles.productImage}/>
          //<Text style={styles.productItem}>{item}</Text>
        )}
      />  
    </View>
  );
};

const Home = () => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const backgrounds = [require('../resources/assets/photos/Foto_1.jpg'), require('../resources/assets/photos/Foto_2.jpg'), require('../resources/assets/photos/Foto_3.jpg')];
  const categories = [
    { title: 'Pulseras', products: [require('../resources/assets/photos/Foto_1.jpg')]},
    { title: 'Aretes', products: [require('../resources/assets/photos/Foto_1.jpg')]},
    { title: 'Anillos', products: [require('../resources/assets/photos/Foto_1.jpg')]},
    { title: 'Collares', products: [require('../resources/assets/photos/Foto_1.jpg')]},
    { title: 'Pulseras para la playa', products: [require('../resources/assets/photos/Foto_1.jpg')]},
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
     
    }, 2000); // Cambia la imagen cada 5 segundos (5000 ms)

    return () => clearInterval(timer); // Limpia el temporizador al desmontar el componente
  }, []);

  return (
    <ScrollView style={styles.container}>
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
      <View style = {styles.productSectionContainer}>
        {categories.map((category, index) => (
          <ProductSection key={index} title={category.title} products={category.products} />
        ))}
      </View>
     
    </ScrollView>
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
    backgroundColor: 'rgba(0, 0, 0, 0.2)', // fondo semi-transparente
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  title: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  sectionContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productItem:{
    fontSize: 16,
    marginBottom: 5,
  },
  productSectionContainer: {
    flex: 1,
    paddingTop: 20, // Espacio entre la imagen de fondo y la sección de productos
    paddingHorizontal: 20,
  },
  productImage: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  categoryItem:{
    marginBottom: 20, // Espacio entre categorías
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: 'lightgray', // Color de fondo de la barra inferior
  },

});

export default Home;

