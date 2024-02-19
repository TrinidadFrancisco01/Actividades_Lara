import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Alert, ActivityIndicator, Image } from 'react-native';

const App = () => {
  const [prod, setProd] = useState(null);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const randomId = Math.floor(Math.random() * 898) + 1; // 898 es el número total de Pokémon en la API
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
      .then((res) => res.json())
      .then((obj) => {
        setProd(obj);
        setLoad(true);
      })
      .catch((err) => {
        console.error(err);
        Alert.alert('Ocurrió un error');
      });
  }, []);

  const screenL = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Nombre: {prod.name}</Text>
        <Text style={styles.price}>Altura: {prod.height}</Text>
        <Text style={styles.price}>Peso: {prod.weight}</Text>
        <Text style={styles.price}>Tipo: {prod.types.map(type => type.type.name).join(', ')}</Text>
        <Image source={{ uri: prod.sprites.front_default }} style={styles.image} />
      </View>
    );
  };

  const screenU = () => {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <Text style={styles.loadingText}>Cargando Datos...</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {load ? screenL() : screenU()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F1CB98',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: 'Helvetica',
  },
  price: {
    fontSize: 20,
    marginBottom: 20,
    fontFamily: 'Helvetica',
  },
  image: {
    height: 150,
    width: 150,
    marginBottom: 10,
    borderRadius: 10,
  },
  loadingText: {
    fontSize: 18,
    marginTop: 10,
    fontFamily: 'Helvetica',
  },
});

export default App;
