// App.tsx
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import MiComponente from './components/MiComponente';
import MiBoton from './components/MiBoton'; // A


const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <MiComponente />
      <MiBoton /> {/* MiBoton agregado */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;