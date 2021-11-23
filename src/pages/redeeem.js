import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from "react-native";
import { TextInput, Button } from 'react-native-paper';
import { TextInputMask } from 'react-native-masked-text';
import { useHistory } from "react-router-native";
import {USERBALANCE} from '../services/user.service';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

const RedeemPage = () => {

    const [credit, setCredit] = useState('');
    const [amount, setAmount] = useState('');

    let history = useHistory();
    const { getItem, setItem } = useAsyncStorage('@storage_Key');

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
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{color:'#fff', fontSize: 20, position: 'absolute', left:22, top:30}}>Resgatar</Text>
                <Text style={{color:'#fff', fontSize: 18, position: 'absolute', fontWeight:'bold', left:20, top:65}}> R$ {amount}</Text>
             </View>

            <View style={{flex:4}}>
            <TextInput
                mode="flat"
                label="Digite o valor a ser resgatado"
                style={styles.form} 
                theme={inputTheme}
                render={props =>
                    <TextInputMask
                        {...props}
                        type={'money'}
                        value={credit}
                        onChangeText={(text) => {
                            props.onChangeText?.(text);
                            setCredit(text);
                        }}
                    />
                }
            />

            <Button mode="contained" style={styles.button} theme={inputThemesec} onPress={() => history.push('/credit')}>
                RESGATAR
            </Button>
            </View>
        </View>
    )
}

const inputThemesec = { colors: { primary: '#08592D' } }
const inputTheme = { colors: { primary: 'green' } }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#fff'
    },
    header: { flex:1, position:'relative', height:180,backgroundColor:'#35DC81' },
    form: {
        width: '90%',
        backgroundColor: 'rgba(255,255,255,0.7)',
        alignSelf: 'center',
        borderColor: 'white',
        marginTop: 60,
        marginBottom: 0
    },
    button: {
        marginTop: 20,
        width: '90%',
        height: 40,
        fontSize: 20,
        alignSelf: 'center'
    },
    buttonBack: {
        position:'absolute',
        width: '90%',
        height: 40,
        fontSize: 20,
        alignSelf: 'center',
        bottom:30,
    },
});

export default RedeemPage