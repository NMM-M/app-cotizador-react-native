import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, View, Text, Image } from 'react-native';
import Header from './components/Header';
import Formulario from './components/Formulario';
import axios from 'axios';
const App = () => {
  //#region DEFINICION DE STATES
  const [moneda, setMoneda] = useState('');
  const [criptomoneda, setCriptoMoneda] = useState('');
  const [error, setError] = useState(false);

  //#endregion
  //#region USE EFFECT
  useEffect(() => {
    if (error) {
      const url = `https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD,EUR`;
    }
  }, [error])
  //#endregion 


  return (
    <>
      <Header />
      <Image
        style={styles.imagen}
        source={require('./assets/img/cryptomonedas.png')}
      />
      <View style={styles.contenido}>
        <Formulario
          moneda={moneda}
          setMoneda={setMoneda}
          criptomoneda={criptomoneda}
          setCriptoMoneda={setCriptoMoneda}
          error={error}
          setError={setError}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  imagen: {
    width: '100%',
    height: 150,
    marginHorizontal: '1.5%'
  },
  contenido: {
    marginHorizontal: '2.5%'
  },
});

export default App;
