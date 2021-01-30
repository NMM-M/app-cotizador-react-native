import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';
const Formulario = () => {
    //#region DEFINICION DE STATES
    const [moneda, setMoneda] = useState('');
    const [criptomoneda, setCriptoMoneda] = useState('');
    const [criptomonedasAPI, setCriptoMonedasAPI] = useState('');
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
    //#endregion
    return (
        <View>
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
            <Picker>
                <Picker.Item label="- Seleccione una -" value="" />
                {criptomonedasAPI.map(cripto => (
                    <Picker.Item
                        key={cripto.CoinInfo.Id}
                        label={cripto.CoinInfo.FullName}
                        value={cripto.CoinInfo.Name}
                    />
                ))}
            </Picker>
        </View >
    );
}
const styles = StyleSheet.create({
    label: {
        fontSize: 22,
        fontFamily: 'Lato-Black',
        marginVertical: 20,
    }
});
export default Formulario;