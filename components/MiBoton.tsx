import React from 'react';
import { Alert, StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const MiBoton = () => {
  // Funciones para manejar las acciones de los botones de redes sociales
  const handleFacebook = () => {
    Alert.alert('Redirección a Facebook...');
  };

  const handleInstagram = () => {
    Alert.alert('Redirección a Instagram...');
  };

  const handleTwitter = () => {
    Alert.alert('Redirección a X...');
  };

  return (
    <View style={styles.container}>
      {/* Texto principal */}

  
      <Text style={styles.title}>  Edisson Fierro</Text>

      {/* Texto de redes sociales */}
      <Text style={styles.subtitle}>Follow me:</Text>

      {/* Botones de redes sociales */}
      <View style={styles.buttonGroup}>
        <TouchableOpacity style={[styles.button, styles.facebook]} onPress={handleFacebook}>
          <Text style={styles.buttonText}>Facebook</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.instagram]} onPress={handleInstagram}>
          <Text style={styles.buttonText}>Instagram</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.twitter]} onPress={handleTwitter}>
          <Text style={styles.buttonText}>X</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Estilos para el componente
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  buttonGroup: {
    flexDirection: 'row', // Alinea los botones en fila
    justifyContent: 'space-between',
    width: '80%',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  facebook: {
    backgroundColor: '#3b5998', // Color azul de Facebook
  },
  instagram: {
    backgroundColor: '#E1306C', // Color rosa de Instagram
  },
  twitter: {
    backgroundColor: '#1DA1F2', // Color azul de X (Twitter)
  },
});

export default MiBoton;
