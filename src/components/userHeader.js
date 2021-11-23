import React, { useState, useEffect } from 'react';
import { Text, Button } from 'react-native-paper';
import { StyleSheet, View, ImageBackground, Image } from "react-native";
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { USERBALANCE } from '../services/user.service';


const UserHeaderComponent = () => {

    const { getItem, setItem } = useAsyncStorage('@storage_Key');
    const [amount, setAmount] = useState('');

    const readItemFromStorage = async () => {
        const item = await getItem();
        const res = await USERBALANCE(item);

        if (res.data) { 
                setAmount(res.data.amount)
        }

      };

    useEffect(() => {
        readItemFromStorage();
      }, []);



    return (
        <View style={styles.header} >
            <ImageBackground source={require('../assets/bg.png')} resizeMode="cover" style={styles.imageBg}>
                <Text style={{color:'#fff', fontSize: 20, position: 'absolute', left:22, top:30}}>Olá,Anderson</Text>
                <Text style={{color:'#fff', fontSize: 35, position: 'absolute', fontWeight:'bold', left:10, top:65}}> R$ {amount}</Text>
                <Text style={{color:'#fff', fontSize: 22, position: 'absolute', left:15, top:105}}> de saldo</Text>

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