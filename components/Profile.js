import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Profile() {
  
    const pessoa = {
        imgUri: 'https://www.fakepersongenerator.com/Face/female/female20171026233708526.jpg',
        genero: 'Feminino',
        nome: 'Elba Coelho',
        email: 'elbinha123@gmail.com',
        telefone: '237-289-2089',
        data: '26/7/1929 (94 anos)'

    }
    
    return (
        
        <View style={styles.container}>
        
        <Image source={{ uri: pessoa.imgUri }} style={styles.img}/>

            {
                (pessoa && pessoa.nome) && (
                    <View style={styles.labelContainer}>
                        <Text style={[styles.texto, styles.textoLabel]}>Nome:</Text>
                        <Text style={styles.texto}>{pessoa.nome}</Text>
                    </View>
                )
            }

            <View style={styles.labelContainer}>
                <Text style={[styles.texto, styles.textoLabel]}>Telefone:</Text>
                <Text style={styles.texto}>{pessoa.telefone}</Text>
            </View>

            <View style={styles.labelContainer}>
                <Text style={[styles.texto, styles.textoLabel]}>Email:</Text>
                <Text style={styles.texto}>{pessoa.email}</Text>
            </View>

            <View style={styles.labelContainer}>
                <Text style={[styles.texto, styles.textoLabel]}>Data de Nascimento:</Text>
                <Text style={styles.texto}>{pessoa.data}</Text>
            </View>
        
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        
        backgroundColor: '#99D9EA',
        
    }, img: {
        width: 300,
        height: 300,
        borderWidth: 10,
        borderColor: 'gray',
        borderRadius: 250,
        alignSelf: 'center',
        marginTop: 150
        
    },
    labelContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        padding: 10,
        
        
    },
    texto: {
        fontSize: 19
    },
    textoLabel: {
        color: 'gray',
        fontWeight: 'bold'
    }
})