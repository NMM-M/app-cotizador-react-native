import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const Alert = ({ mensaje }) => {
    return (
        <View style={styles.contenedor}>
            <Text style={styles.txtMensaje}>{mensaje}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    contenedor: {
        width: '100%',
        padding: 15,
        backgroundColor: '#ff6a6a',
        borderRadius: 5,
    },
    error: {
        backgroundColor: '#ff3e3e'
    },
    success: {
        backgroundColor: '#6aff6a'
    },
    txtMensaje: {
        color: '#fff',
        fontSize: 18
    },

});

export default Alert;