import GeneralScreen from './GeneralScreen';

const products = [
  {
    id: 81,
    name: 'Pulseras con nombre',
    price: 44990,
    image: require('../resources/assets/photos/Personalizada_1.jpg'),
  },
  {
    id: 82,
    name: 'Pulsera con inicial ',
    price: 14990,
    image: require('../resources/assets/photos/Personalizada_2.jpg'),
  },
  {
    id: 83,
    name: 'Pulsera con nombre',
    price: 14990,
    image: require('../resources/assets/photos/Personalizada_3.jpg'),
  },
  {
    id: 84,
    name: 'Pulseras para parejas',
    price: 29990,
    image: require('../resources/assets/photos/Personalizada_4.jpeg'),
  },
  // Agregar más productos según sea necesario
];

const PersonalizadosScreen = () => {
  return <GeneralScreen products={products} />
};

export default PersonalizadosScreen;