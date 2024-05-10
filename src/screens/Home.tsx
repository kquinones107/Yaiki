import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  Linking,
} from 'react-native';
import Video from 'react-native-video';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import * as GoogleFonts from 'react-native-google-fonts';

const ProductSection = ({ title, products }) => {
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

  const handleFacebookPress = () => {
    Linking.openURL('https://www.facebook.com/profile.php?id=100091678115327');
  };

  const handleInstagramPress = () => {
    Linking.openURL('https://www.instagram.com/yaiki_accesories?igsh=MThlMzloaTdkNmxlaA==');
  };

  const handleWhatsAppPress = () => {
    Linking.openURL('https://wa.me/+573187887223');
  };

  // Estado de reproducción para cada video
  const [videoStates, setVideoStates] = useState({
    video1: false,
    video2: false,
    video3: false,
    video4: false,
  });

  // Función para manejar la reproducción de un video específico
  const handlePlayPause = (videoId) => {
    setVideoStates(prevStates => ({
      ...prevStates,
      [videoId]: !prevStates[videoId],
    }));
  };

  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const backgrounds = [
    require('../resources/assets/photos/Playa_1.jpg'),
    require('../resources/assets/photos/Pulsera_2.jpg'),
    require('../resources/assets/photos/Anillos_0.jpg'),
    require('../resources/assets/photos/CollarCategory.jpeg'),
    require('../resources/assets/photos/PersonalizadoCategory.jpg'),
  ];
  const categories = [
    {
      title: 'Pulseras',
      products: [require('../resources/assets/photos/PulserasCategory.jpg')],
    },
    {
      title: 'Aretes',
      products: [require('../resources/assets/photos/Aretes_1.jpeg')],
    },
    {
      title: 'Anillos',
      products: [require('../resources/assets/photos/AnillosCategory.jpeg')],
    },
    {
      title: 'Collares',
      products: [require('../resources/assets/photos/Collar_1.jpeg')],
    },
    {
      title: 'Pulseras para la playa',
      products: [require('../resources/assets/photos/Playa_1.jpg')],
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
        renderItem={({ item }) => (
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
        renderItem={({ item, index }) => (
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
        <Text style={styles.textDesciption}>La unión perfecta entre la delicadeza de la pulsera y el brillo de los anillos.</Text>
        <TouchableOpacity onPress={() => handlePlayPause('video1')}>
          <ImageBackground
            source={require('../resources/assets/photos/Anillos_0.jpg')} // Placeholder image
            style={styles.video}
            resizeMode='cover'>
            <Video
              source={require('../resources/assets/video/Video_1.mp4')}
              style={StyleSheet.absoluteFill} // This makes the video fill the space of the container
              resizeMode='cover'
              paused={!videoStates.video1}
            />
          </ImageBackground>
        </TouchableOpacity>
      </View>
      <View style={styles.videoContainer}>
        <Text style={styles.videoTitle}>Pulseras Personalizadas</Text>
        <Text style={styles.textDesciption}>Para tu mejor estilo, en Yaiki Accesorios pulseras personalizadas encontrarás</Text>
        <TouchableOpacity onPress={() => handlePlayPause('video2')}>
          <ImageBackground
            source={require('../resources/assets/photos/Anillos_0.jpg')} // Placeholder image
            style={styles.video}
            resizeMode='cover'>
            <Video
              source={require('../resources/assets/video/Video_2.mp4')}
              style={styles.video}
              resizeMode='cover'
              paused={!videoStates.video2}
            />
          </ImageBackground>
        </TouchableOpacity>
      </View>
      <View style={styles.videoContainer}>
        <Text style={styles.videoTitle}>Elegancia en Detalle: Anillos y Belleza</Text>
        <Text style={styles.textDesciption}> Anillos que Encantan, Belleza que Deslumbra. </Text>
        <TouchableOpacity onPress={() => handlePlayPause('video3')}>
          <ImageBackground
            source={require('../resources/assets/photos/Anillos_0.jpg')} // Placeholder image
            style={styles.video}
            resizeMode='cover'>
            <Video
              source={require('../resources/assets/video/Video_3.mp4')}
              style={styles.video2}
              resizeMode='cover'
              paused={!videoStates.video3}
            />
          </ImageBackground>
        </TouchableOpacity>
      </View>
      <View style={styles.videoContainer}>
        <Text style={styles.videoTitle}> Pulseras para la playa </Text>
        <Text style={styles.textDesciption}>Con las olas y energias del mar en tu muñeca, en Yaiki Accesorios encontrarás pulseras que bailan con la brisa playera.</Text>
        <TouchableOpacity onPress={() => handlePlayPause('video4')}>
          <ImageBackground
            source={require('../resources/assets/photos/Anillos_0.jpg')} // Placeholder image
            style={styles.video}
            resizeMode='cover'>
            <Video
              source={require('../resources/assets/video/Video_4.mp4')}
              style={styles.video2}
              resizeMode='cover'
              paused={!videoStates.video4}
            />
          </ImageBackground>
        </TouchableOpacity>
      </View>
      <View style={styles.redesContainer}>
        <Text style={styles.textRedesSociales}>
          Mis redes sociales
        </Text>
      </View>
      <View style={styles.Icon}>
        <TouchableOpacity onPress={handleFacebookPress}>
          <MaterialIcon name="facebook" size={30} color="#3b5998" />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleInstagramPress}>
          <Entypo name="instagram" size={30} color="#c13584" />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleWhatsAppPress}>
          <FontAwesomeIcon name="whatsapp" size={30} color="#25D366" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
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
    color: 'black',

    fontFamily: 'Caveat-Bold',
  },
  sectionContainer: {
    marginBottom: 20,
    marginRight: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontFamily: 'Caveat-Bold',
    marginBottom: 10,
    paddingTop: 30,
    color: 'pink',
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
    marginBottom: 10,
    fontFamily: 'Caveat-Regular',

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
    fontSize: 24,
    marginBottom: 20,
    paddingTop: 20,
    color: 'pink',
    fontFamily: 'Caveat-Bold'
  },
  video: {
    width: '100%',
    aspectRatio: 16 / 12, // Proporción de aspecto común para videos
  },
  video2: {
    width: '100%',
    aspectRatio: 16 / 18, // Proporción de aspecto común para videos
  },
  textDesciption: {
    fontSize: 20,
    marginBottom: 20,
    color: 'pink',
    fontFamily: 'IndieFlower-Regular',
  },
  redesContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textRedesSociales: {
    fontSize: 20,
    marginBottom: 20,
    color: 'pink',
    paddingTop: 20,
    fontFamily: 'Exo2-Regular',
  },
  Icon: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
});

export default Home;

