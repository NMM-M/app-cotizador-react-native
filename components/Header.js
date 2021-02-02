import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';
const Header = () => {
    return (
        <>
            <Text style={styles.encabezado}>Criptomonedas</Text>
        </>
    );
}

const styles = StyleSheet.create({
    encabezado: {
        marginTop: 10,
        marginHorizontal: '1.5%',
        fontSize: 20,
        color: '#fff',
        paddingTop: Platform.OS === 'ios' ? 50 : 10,
        textAlign: 'center',
        fontFamily: 'Lato-Black',
        backgroundColor: '#5e49e2',
        paddingVertical: 10,
        textTransform: 'uppercase',
        marginBottom: 30,
        borderRadius: 4,
    },
});

export
    default Header;