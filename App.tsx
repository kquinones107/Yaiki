import React from 'react';
import { View } from 'react-native';
import LoginScreen from './src/screens'; // Ajusta la ruta según la ubicación real de tu archivo MiPantalla.tsx

function App() {
  return (
    <View style={{ flex: 1 }}>
      <LoginScreen />
    </View>
  );
}

export default App
