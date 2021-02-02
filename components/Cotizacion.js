import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Cotizacion = ({ resultado }) => {
    return (
        <>
            <View style={styles.contenedor}>
                <Text style={[styles.texto, styles.precio]}>Precio actual:
                    <Text style={styles.span}> {resultado.PRICE}</Text>
                </Text>
                <Text style={styles.texto}>Precio más alto del día:
                    <Text style={styles.span}> {resultado.HIGHDAY}</Text>
                </Text>
                <Text style={styles.texto}>Precio más bajo del día:
                    <Text style={styles.span}> {resultado.LOWDAY}</Text>
                </Text>
                <Text style={styles.texto}>Variación ultimas 24h:
                    <Text style={styles.span}> {resultado.CHANGEPCT24HOUR} %</Text>
                </Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    contenedor: {
        marginTop: 10,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#5e49e2'
    },
    precio: {
        fontSize: 20
    },
    span: {
        fontWeight: 'bold'
    },
    texto: {
        color: '#fff',
        fontSize: 15,
        marginTop: 2,
    }

});

export default Cotizacion;