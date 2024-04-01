import { Image, View, StyleSheet, Dimensions } from 'react-native';
const imagenFuente = require('./src/resources/assets/images/YaikiLogo.png');

const LoginScreen = () => {
  return (
      <View style={styles.container}>
          <Image source={imagenFuente} style={styles.imagen} />
      </View>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
      backgroundColor: 'pink',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
  imagen: {
      width: 200, // ajusta el ancho según sea necesario
      height: 200, // ajusta la altura según sea necesario
  },
});

export default LoginScreen;

