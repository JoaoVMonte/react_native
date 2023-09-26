import { View, Text, StyleSheet, Button } from "react-native"
import React, { useState } from "react";

export default function NumeroAleatorio(props) {

    const [numeroAleatorio, setNumeroAleatorio] = useState(null);

    const gerarNumeroAleatorio = () => {
        setNumeroAleatorio(Math.floor(Math.random() * 100) + 1);
    };

    return (
        <View style={styles.Container}>
            <Text style={[styles.texto]}>O número aleatório é {numeroAleatorio}</Text>
            <Button title="Gerar número aleatório" onPress={gerarNumeroAleatorio} />
        </View>
    );
};

const styles = StyleSheet.create({
    
    Container: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        padding: 10,
        marginTop: 350,
        
        
    },
    texto: {
        fontSize: 19

    },

})
