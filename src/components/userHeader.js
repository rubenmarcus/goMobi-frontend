import * as React from 'react';
import { Text, Button } from 'react-native-paper';
import { StyleSheet, View, ImageBackground } from "react-native";



const UserHeaderComponent = () => {

    return (
        <View style={styles.header} >
            <ImageBackground source={require('../assets/bg.png')} resizeMode="cover" style={styles.imageBg}>
                <Text>Olá,James</Text>
                <Text>170,33</Text>
                <Text>435</Text>
                <Button type="text" color="#fff" style={styles.button} onPress={() => console.log('Pressed')}>
                    + ver seu perfil
                </Button>
            </ImageBackground>
            <View style={{ flex: 3, backgroundColor: '#fff' }}>



            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    imageBg: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    button: {
        position: 'absolute', width: '100%', flex: 1, bottom: 0, backgroundColor: 'green', color: "#fff", alignSelf: 'stretch',
    },
    header: { flex: 1, height: 30 }
});

export default UserHeaderComponent;