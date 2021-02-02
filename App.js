import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Cotizacion from './components/Cotizacion';
import axios from 'axios';

const App = () => {
  //#region DEFINICION DE STATES
  const [moneda, setMoneda] = useState('');
  const [criptomoneda, setCriptoMoneda] = useState('');
  const [error, setError] = useState(false);
  const [consultarAPI,setConsultarAPI] = useState(false);
  const [resultado, setResultado] = useState({});

  //#endregion
  //#region USE EFFECT
  useEffect(() => {
    const cotizarCriptomoneda = async () =>{
      if (consultarAPI) {
      //consultar la api para obtener la cotizacion
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
        const respuesta = await axios.get(url);
        setResultado(respuesta.data.DISPLAY [criptomoneda][moneda]);
        console.log(respuesta.data.DISPLAY [criptomoneda][moneda]);
        setConsultarAPI(false);
      }
    }
    cotizarCriptomoneda();
  }, [consultarAPI])
  //#endregion 


  return (
    <>
    <View style={styles.contendor}>
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
          setConsultarAPI={setConsultarAPI}
          />
          {error 
            ? 
            null
            :
            <Cotizacion resultado={resultado}/>
          }
      </View>
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
  contendor:{
    backgroundColor:'#9497ff',
    flex:1,
  },
  contenido: {
    marginHorizontal: '2.5%'
  },
});

export default App;
