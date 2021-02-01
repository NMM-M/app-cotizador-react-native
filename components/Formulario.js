import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';
import Alert from './Alert';
const Formulario = ({ moneda, setMoneda, criptomoneda, setCriptoMoneda, error, setError, setConsultarAPI }) => {
    //#region DEFINICION DE STATES
    const [criptomonedasAPI, setCriptoMonedasAPI] = useState([]);
    const [mensaje, setMensaje] = useState('');
    //#endregion

    //#region USE Effect
    useEffect(() => {
        const consultarAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const resultado = await axios.get(url);
            setCriptoMonedasAPI(resultado.data.Data);
        }

        consultarAPI()
    }, []);
    //#endregion

    //#region FUNCIONES
    const obtenerMoneda = moneda => {
        setMoneda(moneda);
    }
    const obtenerCriptoMoneda = criptomoneda => {
        setCriptoMoneda(criptomoneda);
    }
    const cotizarPrecio = () => {
        //Validacion
        if (moneda.trim() === '' || criptomoneda.trim() === '') {
            setError(true)
            setMensaje('Ambos campos son obligatorios')
            return;
        }

        setConsultarAPI(true);
        setError(false);

    }

    //#endregion
    return (
        <View>
            {error
                ?
                <Alert
                    mensaje={mensaje}
                />
                :
                null
            }
            <Text style={styles.label}>Moneda</Text>
            <Picker
                selectedValue={moneda}
                onValueChange={moneda => obtenerMoneda(moneda)}
            >
                <Picker.Item label="- Seleccione una -" value="" />
                <Picker.Item label="Dolar Estados Unidos" value="USD" />
                <Picker.Item label="Euro" value="EUR" />
                <Picker.Item label="Peso Chileno" value="CLP" />
                <Picker.Item label="Peso Mexicano" value="MXN" />
                <Picker.Item label="Libra Esterlina" value="GBP" />
            </Picker>

            <Text style={styles.label}>Criptomoneda</Text>
            <Picker
                selectedValue={criptomoneda}
                onValueChange={cripto => obtenerCriptoMoneda(cripto)}
            >
                <Picker.Item label="- Seleccione una -" value="" />
                {criptomonedasAPI.map(cripto => (
                    <Picker.Item
                        key={cripto.CoinInfo.Id}
                        label={cripto.CoinInfo.FullName}
                        value={cripto.CoinInfo.Name}
                    />
                ))}
            </Picker>
            <TouchableHighlight
                style={styles.btnCotizar}
                onPress={() => cotizarPrecio()}
            >
                <Text
                    style={styles.txtCotizar}
                >Cotizar</Text>
            </TouchableHighlight>
        </View >
    );
}
const styles = StyleSheet.create({
    label: {
        fontSize: 22,
        fontFamily: 'Lato-Black',
        marginVertical: 20,
    },
    btnCotizar: {
        marginTop: 15,
        width: '100%',
        padding: 10,
        borderRadius: 4,
        backgroundColor: '#5e49e2',
    },
    txtCotizar: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
    },
});
export default Formulario;