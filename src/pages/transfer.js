import React, { useState } from 'react';
import { View, StyleSheet, Text } from "react-native";
import { TextInput, Button } from 'react-native-paper';
import { TextInputMask } from 'react-native-masked-text';
import { useHistory } from "react-router-native";

const TransferPage = () => {

    const [credit, setCredit] = useState('');
    let history = useHistory();


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{color:'#fff', fontSize: 20, position: 'absolute', left:22, top:30}}>Transferir</Text>
             </View>

            <View style={{flex:4}}>
            <TextInput
                mode="flat"
                label="Digite o nome do usuário para transferir"
                style={styles.form} 
                theme={inputTheme}
            />

<TextInput
                mode="flat"
                label="Digite o valor"
                style={styles.formVal} 
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
                TRANSFERIR
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
    formVal: {
        width: '90%',
        backgroundColor: 'rgba(255,255,255,0.7)',
        alignSelf: 'center',
        borderColor: 'white',
        marginTop: 10,
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

export default TransferPage