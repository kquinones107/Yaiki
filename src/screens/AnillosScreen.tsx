import GeneralScreen from './GeneralScreen';

const products = [
  {
    id: 20,
    name: 'Combo de 4 Anillos',
    price: 19990,
    image: require('../resources/assets/photos/Anillos_1.jpeg'),
  },
  {
    id: 21,
    name: 'Anillos felices :)',
    price: 11990,
    image: require('../resources/assets/photos/Anillos_2.jpeg'),
  },
  {
    id: 23,
    name: 'Anillos de flores',
    price: 14990,
    image: require('../resources/assets/photos/Anillos_3.jpeg'),
  },
  {
    id: 24,
    name: 'Anillos de media luna',
    price: 11990,
    image: require('../resources/assets/photos/Anillos_4.jpeg'),
  },
  {
    id: 25,
    name: 'Anillo blanco',
    price: 5990,
    image: require('../resources/assets/photos/Anillos_5.jpeg'),
  },{
    id: 26,
    name: 'Anillo de flor',
    price: 5990,
    image: require('../resources/assets/photos/Anillos_6.jpg'),
  },


];


const AnillosScreen = () => {
  return <GeneralScreen products={products} />
};

export default AnillosScreen;