import React from 'react';

import { StyleSheet, View, ImageBackground, Text, Image} from "react-native";
import { TextInput, Button  } from 'react-native-paper';
import { LANG_PTBR } from '../language/pt-br';
import { useHistory } from "react-router-native";


export const LoginPage = () => {

    const [text, setText] = React.useState('');
    const [password, setPassword] = React.useState('');
    let history = useHistory();

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/Login.png')} resizeMode="cover" style={styles.imageBg}>
            <Image source={require('../assets/logo.png')} style={styles.image}/>

                <Text style={styles.text}> {LANG_PTBR.LOGIN.HEADER} </Text>
                <Text style={styles.text}> {LANG_PTBR.LOGIN.DESCRIPTION} </Text>
                <TextInput
                    label="Email"
                    value={text}
                    mode="flat"
                    onChangeText={text => setText(text)}
                    theme={inputTheme}
                    style={styles.form}
                />


                <TextInput
                    label="Senha"
                    value={password}
                    mode="flat"
                    onChangeText={password => setPassword(password)}
                    theme={inputTheme}
                    secureTextEntry={true}
                    style={styles.form}
                />
  <Button mode="contained"      style={styles.button} theme={inputTheme} onPress={() =>   history.push("/dashboard")}>
    ENTRAR
  </Button>
            </ImageBackground>
        </View>
    )
}
const inputTheme = { colors: { primary: 'green' } }

const styles = StyleSheet.create({
    button:{
        marginTop: 20,
        width: '90%',
        height: 40,
        fontSize: 20
    },
    form: {
        width: '90%',
        backgroundColor: 'rgba(255,255,255,0.7)',
        alignSelf: 'center',
        borderColor: 'white',
        marginTop: 20
    },
    text: {
        color: '#fff',
        textAlign: 'center'

    },
    image:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageBg: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        flex: 1,

    },
});