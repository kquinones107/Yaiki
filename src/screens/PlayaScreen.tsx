import GeneralScreen from './GeneralScreen';

const products = [
  {
    id: 71,
    name: 'Pulsera con una estrella de mar',
    price: 14990,
    image: require('../resources/assets/photos/Playa_1.jpg'),
  },
  {
    id: 72,
    name: 'Pulsera colorida con estrella de mar',
    price: 14990,
    image: require('../resources/assets/photos/Playa_2.jpg'),
  },
  {
    id: 73,
    name: 'Combo de pulsera y collar con estrella y conchas de mar',
    price: 29990,
    image: require('../resources/assets/photos/Playa_3.jpg'),
  },
  {
    id: 74,
    name: 'Pulsera de estrellitas de mar',
    price: 14990,
    image: require('../resources/assets/photos/Playa_4.jpg'),
  },
  // Agregar más productos según sea necesario
];


const PlayaScreen = () => {
  return <GeneralScreen products={products} />
};

export default PlayaScreen;