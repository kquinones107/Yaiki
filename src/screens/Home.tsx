import React, {useState, useEffect} from 'react';
import {
  View,  
  Text,
  ScrollView,
  Image,
  StyleSheet,
  ImageBackground,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Video from 'react-native-video';



const ProductSection = ({title, products}) => {
  return (
    <View style={styles.sectionContainer}>
       <Text style={styles.sectionTitle}>{title}</Text>
       <ScrollView 
       horizontal
       showsHorizontalScrollIndicator={false}
       contentContainerStyle={styles.productScrollView}
       >
        {products.map((product, index) => (
          <Image key={index} source={product} style={styles.productImage} />
        ))}
       </ScrollView>
    </View>
  );
};

const Home = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const backgrounds = [
    require('../resources/assets/photos/Foto_1.jpg'),
    require('../resources/assets/photos/Foto_2.jpg'),
    require('../resources/assets/photos/Foto_3.jpg'),
  ];
  const categories = [
    {
      title: 'Pulseras',
      products: [require('../resources/assets/photos/Foto_1.jpg')],
    },
    {
      title: 'Aretes',
      products: [require('../resources/assets/photos/Foto_1.jpg')],
    },
    {
      title: 'Anillos',
      products: [require('../resources/assets/photos/Foto_1.jpg')],
    },
    {
      title: 'Collares',
      products: [require('../resources/assets/photos/Foto_1.jpg')],
    },
    {
      title: 'Pulseras para la playa',
      products: [require('../resources/assets/photos/Foto_1.jpg')],
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setBackgroundIndex(prevIndex => (prevIndex + 1) % backgrounds.length);
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
        renderItem={({item}) => (
          <ImageBackground source={item} style={styles.background}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>YAIKI ACESORIOS</Text>
            </View>
          </ImageBackground>
        )}
        onMomentumScrollEnd={event => {
          const index = Math.floor(
            event.nativeEvent.contentOffset.x /
              event.nativeEvent.layoutMeasurement.width,
          );
          setBackgroundIndex(index);
          console.log('Índice actual:', index);
        }}
      />
      <FlatList
        data={categories}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => (
          <ProductSection
            key={index}
            title={item.title}
            products={item.products}
          />
        )}
        onMomentumScrollEnd={event => {
          const index = Math.floor(
            event.nativeEvent.contentOffset.x /
              event.nativeEvent.layoutMeasurement.width,
          );
          setBackgroundIndex(index);
        }}
      />
      <View style={styles.videoContainer}> 
        <Text style={styles.videoTitle}>Combo de pulsera y anillos</Text>
          <Video
            source={require('../resources/assets/video/Video_1.mp4')}
            
            style={styles.video}
            controls={true}
            resizeMode='cover'
        />
      </View>
      <View style={styles.videoContainer}> 
        <Text style={styles.videoTitle}>Titulo del video</Text>
          <Video
            source={require('../resources/assets/video/Video_2.mp4')}
            // paused={!isPlaying}
            style={styles.video}
            controls={true}
            resizeMode='cover'
        />
      </View>
      <View style={styles.videoContainer}> 
        <Text style={styles.videoTitle}>Titulo del video</Text>
          <Video
            source={require('../resources/assets/video/Video_3.mp4')}
            
            style={styles.video2}
            controls={true}
            resizeMode='cover'
        />
        
      </View>
      <View style={styles.videoContainer}> 
        <Text style={styles.videoTitle}>Titulo del video</Text>
       
          <Video
            source={require('../resources/assets/video/Video_4.mp4')}
           
            style={styles.video2}
            controls={true}
            resizeMode='cover'
        />
       
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
    marginRight: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    paddingTop: 30,
  },
  productItem: {
    fontSize: 16,
    marginBottom: 5,
  },
  productSectionContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 30, // Espacio entre la imagen de fondo y la sección de productos
    paddingHorizontal: 30,
  },
  productImage: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  categoryItem: {
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
  productScrollView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  videoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    paddingTop: 20,
  },
  video: {
    width: '100%',
    aspectRatio: 16 / 12, // Proporción de aspecto común para videos
  },
  video2: {
    width: '100%',
    aspectRatio: 16 / 18, // Proporción de aspecto común para videos
  },
});

export default Home;

