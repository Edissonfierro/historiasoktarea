// components/MiComponente.tsx
import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, ImageBackground, Animated, TouchableOpacity, Modal, FlatList } from 'react-native';

// Importamos la imagen desde la carpeta 'assets'
const fondo = require('../assets/estrellas.jpg'); // Cambia el path si es necesario

const MiComponente = () => {
  // Referencia para la animación de movimiento
  const moveAnim = useRef(new Animated.Value(0)).current;

  // Referencia para la animación de brillo
  const shineAnim = useRef(new Animated.Value(1)).current;

  // Estado para manejar las selecciones de personaje, lugar y acción
  const [personaje, setPersonaje] = useState('');
  const [lugar, setLugar] = useState('');
  const [accion, setAccion] = useState('');

  // Estado para manejar la visibilidad de los modales
  const [showPersonajesModal, setShowPersonajesModal] = useState(false);
  const [showLugaresModal, setShowLugaresModal] = useState(false);
  const [showAccionesModal, setShowAccionesModal] = useState(false);

  // Listas de opciones
  const personajes = ['Héroe', 'Villano', 'Sabio'];
  const lugares = ['Bosque', 'Ciudad', 'Castillo'];
  const acciones = ['Salvar el mundo', 'Robar un tesoro', 'Entrenar para la batalla'];

  // Animación para mover el texto
  useEffect(() => {
    Animated.loop(
      Animated.sequence([ 
        Animated.timing(moveAnim, {
          toValue: 100,  // Mueve el texto 100 unidades hacia la derecha
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(moveAnim, {
          toValue: 0,  // Vuelve el texto a su posición original
          duration: 2000,
          useNativeDriver: true,
        }),
      ])
    ).start();

    // Animación para el brillo del texto
    Animated.loop(
      Animated.sequence([
        Animated.timing(shineAnim, {
          toValue: 2,  // Aumenta el brillo
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(shineAnim, {
          toValue: 1,  // Restaura el brillo
          duration: 1000,
          useNativeDriver: false,
        }),
      ])
    ).start();
  }, [moveAnim, shineAnim]);

  // Función para manejar el clic del botón "Selecciona"
  const handleBotonPress = () => {
    alert('¡Vamos a empezar la historia!');
  };

  // Funciones para abrir los modales de selección
  const openPersonajesModal = () => setShowPersonajesModal(true);
  const openLugaresModal = () => setShowLugaresModal(true);
  const openAccionesModal = () => setShowAccionesModal(true);

  // Función para crear la historia
  const handleCrearHistoria = () => {
    if (personaje && lugar && accion) {
      alert(`Historia: Un/a ${personaje} va al ${lugar} a ${accion}.`);
    } else {
      alert('Por favor, selecciona un personaje, lugar y acción.');
    }
  };

  // Generar la historia combinando las selecciones
  const generarHistoria = () => {
    if (personaje && lugar && accion) {
      return `Un/a ${personaje} va al ${lugar} a ${accion}.`;
    } else {
      return 'Por favor, selecciona un personaje, lugar y acción para crear la historia.';
    }
  };

  return (
    <ImageBackground source={fondo} style={styles.container} resizeMode="cover">
      {/* Animación de movimiento y brillo del texto */}
      <Animated.Text
        style={[
          styles.text,
          { transform: [{ translateX: moveAnim }] },  // Aplica la animación de movimiento
          { opacity: shineAnim },  // Aplica la animación de brillo
        ]}
      >
        Vamos a crear una historia 
      </Animated.Text>

      {/* Botón blanco "Selecciona" alineado a la izquierda */}
      <TouchableOpacity style={styles.botonBlanco} onPress={handleBotonPress}>
        <Text style={styles.botonText}>Selecciona  👋</Text>
      </TouchableOpacity>

      {/* Vista para los otros botones alineados en el centro */}
      <View style={styles.botonesCentro}>
        <TouchableOpacity style={styles.boton} onPress={openPersonajesModal}>
          <Text style={styles.botonText}>Personaje</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.boton} onPress={openLugaresModal}>
          <Text style={styles.botonText}>Lugar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.boton} onPress={openAccionesModal}>
          <Text style={styles.botonText}>Acción</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.boton} onPress={handleCrearHistoria}>
          <Text style={styles.botonText}>Crear Historia</Text>
        </TouchableOpacity>
      </View>

      {/* Modal para seleccionar personaje */}
      <Modal visible={showPersonajesModal} transparent={true} animationType="slide">
        <View style={styles.modal}>
          <FlatList
            data={personajes}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.modalButton} onPress={() => { setPersonaje(item); setShowPersonajesModal(false); }}>
                <Text style={styles.botonText}>{item}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </Modal>

      {/* Modal para seleccionar lugar */}
      <Modal visible={showLugaresModal} transparent={true} animationType="slide">
        <View style={styles.modal}>
          <FlatList
            data={lugares}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.modalButton} onPress={() => { setLugar(item); setShowLugaresModal(false); }}>
                <Text style={styles.botonText}>{item}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </Modal>

      {/* Modal para seleccionar acción */}
      <Modal visible={showAccionesModal} transparent={true} animationType="slide">
        <View style={styles.modal}>
          <FlatList
            data={acciones}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.modalButton} onPress={() => { setAccion(item); setShowAccionesModal(false); }}>
                <Text style={styles.botonText}>{item}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </Modal>

      {/* Contenedor para mostrar la historia */}
      <View style={styles.historiaContainer}>
        <Text style={styles.historiaText}>{generarHistoria()}</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  // Estilo para ImageBackground
  container: {
    flex: 1,  // Hace que el ImageBackground ocupe todo el espacio disponible
    justifyContent: 'center',  // Centra el contenido de la pantalla verticalmente
    alignItems: 'center',  // Centra el contenido de la pantalla horizontalmente
    paddingLeft: 20,  // Agrega espacio a la izquierda para el botón "Selecciona"
    width: '100%',  // Asegura que la imagen cubra el ancho completo de la pantalla
    height: '100%',  // Asegura que la imagen cubra el alto completo de la pantalla
  },
  text: {
    fontSize: 24,  // Ajusta el tamaño de la fuente
    color: 'white',  // Blanco para que resalte sobre el fondo
    fontWeight: 'bold',  // Hace que el texto sea más destacado
    marginBottom: 20,  // Da un espacio entre el texto y el botón
  },
  // Estilo del botón blanco "Selecciona"
  botonBlanco: {
    backgroundColor: 'white',  // Fondo blanco para el botón
    paddingVertical: 10,  // Espaciado vertical
    paddingHorizontal: 30,  // Espaciado horizontal
    borderRadius: 20,  // Bordes redondeados
    marginBottom: 10, // Espacio entre el botón y los otros
  },
  // Estilo del botón rojo
  boton: {
    backgroundColor: 'red',  // Fondo rojo para el botón
    paddingVertical: 10,  // Espaciado vertical
    paddingHorizontal: 30,  // Espaciado horizontal
    borderRadius: 20,  // Bordes redondeados
    marginBottom: 10, // Espacio entre botones
  },
  // Estilo del texto dentro del botón
  botonText: {
    color: 'black',  // Texto negro para los botones con fondo blanco y texto blanco para los otros
    fontSize: 18,  // Tamaño de fuente del texto del botón
    fontWeight: 'bold',  // Hace que el texto sea más destacado
  },
  // Vista para los botones centrados
  botonesCentro: {
    alignItems: 'center',  // Centra los botones dentro de esta vista
    justifyContent: 'center',
    width: '100%',  // Asegura que ocupe todo el ancho de la pantalla
  },
  // Estilo para los modales
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalButton: {
    backgroundColor: 'white',
    padding: 15,
    margin: 5,
    borderRadius: 10,
  },
  // Contenedor para la historia generada
  historiaContainer: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  historiaText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default MiComponente;
