import * as React from 'react';
import { Text, Button } from 'react-native-paper';
import { StyleSheet, View, ImageBackground, Image } from "react-native";



const UserHeaderComponent = () => {

    return (
        <View style={styles.header} >
            <ImageBackground source={require('../assets/bg.png')} resizeMode="cover" style={styles.imageBg}>
                <Text style={{color:'#fff', fontSize: 20, position: 'absolute', left:22, top:30}}>Olá,Anderson</Text>
                <Text style={{color:'#fff', fontSize: 18, position: 'absolute', fontWeight:'bold', left:20, top:65}}> R$ 170,33</Text>
                <Text style={{color:'#fff', fontSize: 18, position: 'absolute', left:110, top:65}}> de saldo</Text>
                <Text style={{color:'#fff', fontSize: 18, position: 'absolute', fontWeight:'bold', left:22, top:95}}>435</Text>
                <Text style={{color:'#fff', fontSize: 18, position: 'absolute', left:62, top:95}}>km percorridos</Text>
                <Button type="text" color="#fff" style={styles.button} onPress={() => console.log('Pressed')}>
                    + ver seu perfil
                </Button>
            </ImageBackground>
    
                <Image source={require('../assets/user.png')} style={{borderRadius:100, width:90, height:90 ,position:'absolute', top:30, right:10}} />

        </View>
    );
};

const styles = StyleSheet.create({
    imageBg: {
        resizeMode: 'cover', // or 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        position:'relative',height:180 
    },
    button: {
        position: 'absolute', width: '100%', flex: 1, bottom: 0, backgroundColor: 'rgba(6, 140, 76, 0.3)', color: "#fff", alignSelf: 'stretch',
    },
    header: { flex:1, position:'relative', height:180  }
});

export default UserHeaderComponent;