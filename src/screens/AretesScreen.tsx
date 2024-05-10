import GeneralScreen from './GeneralScreen';

const products = [
  {
    id: 91,
    name: 'Aretes 1',
    price: 14990,
    image: require('../resources/assets/photos/Aretes_1.jpeg'),
  },
  {
    id: 92,
    name: 'Aretes 2',
    price: 16990,
    image: require('../resources/assets/photos/Aretes_2.jpeg'),
  },
  {
    id: 93,
    name: 'Aretes 3',
    price: 14990,
    image: require('../resources/assets/photos/Aretes_3.jpg'),
  },
  {
    id: 94,
    name: 'Aretes 4',
    price: 14990,
    image: require('../resources/assets/photos/Aretes_4.jpg'),
  },
  
  // Agregar más productos según sea necesario
];


const AretesScreen = () => {
  return <GeneralScreen products={products} />
};

export default AretesScreen;
